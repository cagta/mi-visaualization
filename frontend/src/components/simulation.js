import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { MapContainer, TileLayer, GeoJSON} from 'react-leaflet';

export class Simulation extends React.Component {    

    constructor(props) {
        super(props);
        this.state = {
            city: "",
            cityInformation: {},
            popularPickups: {
              "type": "FeatureCollection",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
                }
              },
              "features": []
              },
            popularPickups_key : 1,
            popularDropoffs: {
              "type": "FeatureCollection",
              "crs": {
                "type": "name",
                "properties": {
                  "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
                }
              },
              "features": []
              },
            popularDropoffs_key: 1
        };
        this.simulate = this.simulate.bind(this);
        this.getPopularPickups = this.getPopularPickups.bind(this);
        this.getPopularDropoffs = this.getPopularDropoffs.bind(this);
    }

    componentDidMount(){
      const api_url = "http://localhost:5000/city?";

      fetch(api_url+"city_name=Berlin", {
        "method": "GET",
        "headers": {}
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          city: "Berlin",
          cityInformation: data
        })
      })
      .catch(err => {
        console.error(err);
      });
    }

    simulate(){
        const api_url = "http://localhost:5000/simulate?";
        fetch(api_url+"city_name="+this.state.city, {
          "method": "GET",
          "headers": {}
        })
        .then(response => response.json())
        .then(data => {
          this.setState({
            popularPickups: JSON.parse(data['most_popular_pickup_points']),
            popularPickups_key: this.state.popularPickups_key + 1,
            popularDropoffs: JSON.parse(data['most_popular_dropoff_points']),
            popularDropoffs_key: this.state.popularDropoffs_key + 1
          })
        })
        .catch(err => {
          console.error(err);
        });
    }

    getPopularPickups(){
      this.setState({
        popularPickups: {
          "type": "FeatureCollection",
          "crs": {
            "type": "name",
            "properties": {
              "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
            }
          },
          "features": [
            {
              "type": "Feature",
              "properties": {
                "name": "S+U Lichtenberg Bhf (Berlin)",
                "id": "u33depjmfnxb"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [
                  13.4985169632013,
                  52.510177259492899
                ]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "name": "S Karlshorst Bhf (Berlin)",
                "id": "u33deccqj25n"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [
                  13.526115879804884,
                  52.48134727965725
                ]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "name": "S Ostbahnhof (Berlin)",
                "id": "u33d9xpfkks7"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [
                  13.436124340038418,
                  52.509566225867424
                ]
              }
            }]
          },
        popularPickups_key: this.state.popularPickups_key + 1
      })
      

    }

    getPopularDropoffs(){
      this.setState({
        popularDropoffs: {
          "type": "FeatureCollection",
          "crs": {
            "type": "name",
            "properties": {
              "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
            }
          },
          "features": [
            {
              "type": "Feature",
              "properties": {
                "name": "S+U Lichtenberg Bhf (Berlin)",
                "id": "u33depjmfnxb"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [
                  13.4985169632013,
                  52.510177259492899
                ]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "name": "S Karlshorst Bhf (Berlin)",
                "id": "u33deccqj25n"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [
                  13.526115879804884,
                  52.48134727965725
                ]
              }
            },
            {
              "type": "Feature",
              "properties": {
                "name": "S Ostbahnhof (Berlin)",
                "id": "u33d9xpfkks7"
              },
              "geometry": {
                "type": "Point",
                "coordinates": [
                  13.436124340038418,
                  52.509566225867424
                ]
              }
            }]
          },
        popularDropoffs_key: this.state.popularDropoffs_key + 1      
      })
    }

    render() {
        return(
            <Container id="Simulation">
                <Container id="SimulationParameters" fluid>
                    <Row id="CityName">
                    <h3>Berlin</h3>
                    </Row>
                    <Row id="CityInformation">
                        <Col id="min_longitude" > { this.state.cityInformation["min_longitude"] }  </Col>
                        <Col id="min_latitude"> { this.state.cityInformation["min_latitude"] } </Col>
                        <Col id="max_longitude"> { this.state.cityInformation["max_longitude"] } </Col>
                        <Col id="max_latitude"> { this.state.cityInformation["max_latitude"] } </Col>  
                        <Col>
                            <Button variant="primary" size="lg" onClick={this.simulate}>
                                Simulate
                            </Button>
                        </Col>                  
                    </Row>
                </Container>
                <h3>Most Popular Pickup Points</h3>
                <MapContainer id="MostPopularPickupPoints" center={[52.539883126970174, 13.401767174694255]} zoom={11} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON key={this.state.popularPickups_key} data={this.state.popularPickups} />
                </MapContainer>
                
                <h3>Most Popular Dropoff Points</h3>
                <MapContainer id="MostPopularDropoffPoints" center={[52.539883126970174, 13.401767174694255]} zoom={11} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON key={this.state.popularDropoffs_key} data={this.state.popularDropoffs} ref={this.geoJsonLayer}/>
                </MapContainer>
            </Container>
        )
    }
}