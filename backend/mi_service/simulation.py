import json
from flask import Blueprint
from flask import request
from flask import jsonify

from mi_service.db import get_db
from mi_service.simulator import Simulator

bp = Blueprint("simulation", __name__, url_prefix="/")

@bp.route("/city", methods=["GET"])
def get_bounding_box():
    city_name = request.args.get("city_name")
    bounding_box = (
        get_db()
        .execute(
            "SELECT min_latitude, min_longitude, max_latitude, max_longitude FROM region_bounding_box WHERE region_name = ?",
            (city_name,),
        )
        .fetchone()
    )
    response = jsonify({
        "min_latitude": bounding_box[0],
        "min_longitude": bounding_box[1],
        "max_latitude": bounding_box[2],
        "max_longitude": bounding_box[3],
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@bp.route("/simulate", methods=["GET"])
def simulate():
    city_name = request.args.get("city_name")
    bounding_box = (
        get_db()
        .execute(
            "SELECT region_id, min_latitude, min_longitude, max_latitude, max_longitude FROM region_bounding_box WHERE region_name = ?",
            (city_name,),
        )
        .fetchone()
    )
    region_id = bounding_box[0]
    bounding_box = (
        float(bounding_box[2]),
        float(bounding_box[1]),
        float(bounding_box[4]),
        float(bounding_box[3]),
    )
    # Trigger simulator, save results to db
    # get_db.execute()
    result = Simulator(bounding_box).simulate(10)

    most_popular_dropoff_points = result["most_popular_dropoff_points"]
    most_popular_pickup_points = result["most_popular_pickup_points"]

    try:
        get_db().execute(
            """
            INSERT INTO booking_distance(
                region_id,
                from_0_1,
                from_1_2,
                from_2_3,
                from_3_4
            )
            VALUES (
                '""" + region_id + """',
                '""" + 
                    str(result["booking_distance_bins"]["From 0->1km"]) + """',
                '""" + 
                    str(result["booking_distance_bins"]["From 1->2km"]) + """',
                '""" + 
                    str(result["booking_distance_bins"]["From 2->3km"]) + """',
                '""" + 
                    str(result["booking_distance_bins"]["From 3->4km"]) + """'
            );"""
        )
    except sqlite3.Error as error:
        print("Failed to insert data into sqlite table", error)

    response = jsonify({
        "booking_distance": result["booking_distance_bins"],
        "most_popular_dropoff_points": most_popular_dropoff_points,
        "most_popular_pickup_points": most_popular_pickup_points,
    })
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response