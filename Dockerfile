FROM ubuntu:latest
LABEL authors="tony_"

ENTRYPOINT ["top", "-b"]