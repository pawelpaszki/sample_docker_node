## Sample node + docker-compose + mongo (mongoose) app
This is a demo of a node app that can be executed with docker-compose. 

## Prerequisites
The following is required to run the app:
- docker
- docker-compose

## Running the app with docker-compose
```
docker-compose up
```

After the app is running, it listens to port `8000`. 

It only has one route (POST http://localhost:8000/). It accepts `instanceID` as a parameter. When queried, it returns a counter from a db, that increases on each successful endpoint hit. It also returns the instance ID passed in the body.
