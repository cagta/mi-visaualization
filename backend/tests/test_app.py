import json


def test_empty_db(client):
    """Start with a blank database."""

    rv = client.get("/")
    assert b"Hello, World!" in rv.data


def test_db_init(client):

    response = json.loads(
        client.get("/city", query_string=dict(city_name="Berlin")).data.decode("utf-8")
    )

    assert "52.527919" in response["min_latitude"]
    assert "13.340148" in response["min_longitude"]
    assert "52.562995" in response["max_latitude"]
    assert "13.506317" in response["max_longitude"]


def test_simulate(client):

    response = json.loads(
        client.get("/simulate", query_string=dict(city_name="Berlin")).data.decode("utf-8")
    )

    assert "booking_distance" in response
    assert "most_popular_dropoff_points" in response
    assert "most_popular_pickup_points" in response
