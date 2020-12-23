#!/bin/bash
echo "current job on branch $TRAVIS_BRANCH"
echo "pull request $TRAVIS_PULL_REQUEST"
if [ "$TRAVIS_BRANCH" == "master" ] && [ $TRAVIS_PULL_REQUEST == false ]
then
  docker build --build-arg $COGNITO_USER_POOL_ID --build-arg $COGNITO_CLIENT_ID -t ian035/personal-finance-app-client .
  echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
  docker push ian035/personal-finance-app-client
else
  echo "not building image and pushing to dockerhub on pull request"
fi
