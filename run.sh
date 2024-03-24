#!/bin/bash

# Stop the existing container if it's running
docker stop gcp-deployment-container

# Remove the existing container
docker rm gcp-deployment-container

# Remove the existing image
docker rmi gcp-deployment-img

# Build the Docker image
docker build -t gcp-deployment-img .

# Run the Docker container
docker run -d -p 3000:3000 --name gcp-deployment-container --volume gcp-deployment-volume:/usr/src/app gcp-deployment-img
