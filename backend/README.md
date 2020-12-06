# MI Visualization Backend (mi_service)

This flask application was written for [mi-code-challenge](https://github.com/door2door-io/mi-code-challenge).

## Installation
All the installation processes were tested on Centos 7. If you are not running production ready version, I suggest you to use Centos 7 for manual installation.

### Dockerized Version (Production)
* **Requirements:** [docker](https://docs.docker.com/get-docker/) & [docker-compose](https://docs.docker.com/compose/install/)

```
    cd backend
    docker-compose up
```

### Manual Installation (Development)
* **Requirements:** python3, virtualenv
* virtualenv is needed for creating a seperate environment on your machine if you are comfortable with other virtual environment wrapper you can use them also.

```
    cd backend
    # creating virtual environment
    # and activating it
    virtualenv vir
    source vir/bin/activate
    # installing requirements
    pip install .
    export FLASK_APP=mi_service:create_app
    export FLASK_ENV=development

    # if it's your first run
    flask init-db
    flask run
```

## Testing
* **Requirements:** You need to go through the steps of [Manual Installation (Development)](#manual-installation-(development)) section.

```
    cd backend
    source vir/bin/activate
    pytest
```

## Endpoints
* ### /city (GET)
    - This endpoint helps you to query bounding box of the provided city.
    - input
        - city_name
        - ex: "Berlin"
    - response
        - bounding box
        - ex: 
        - ```{ "max_latitude": "52.562995", "max_longitude": "13.506317", "min_latitude": "52.527919", "min_longitude": "13.340148" }```

* ### /simulate (GET)
    - This endpoint helps you to run simulator for the provided city.
    - input
        - city_name
        - ex: "Berlin"
    - response
        - bounding box
        - ex: can be found under **/docs/simulate_response.json**
