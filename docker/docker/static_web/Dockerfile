# Version: 0.0.1
FROM ubuntu:14.04
MAINTAINER James Turnbull "james@example.com"
ENV REFRESHED_AT 2015-01-14
#ENV TEST_DIR /opt/testing
#WORKDIR $TEST_DIR
RUN apt-get update
RUN apt-get install -y nginx
RUN echo 'Hi, I am in your container' \
>/usr/share/nginx/html/index.html
EXPOSE 80
ADD transferFilterToContainerExample.txt /opt/transferFilterToContainerExample.txt
