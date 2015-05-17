#TEST Dockerfile
FROM ubuntu:14.04

RUN apt-get update
RUN apt-get install -y openjdk-7-jre tomcat7

ADD run.sh /root/run.sh
RUN chmod +x /root/run.sh

ADD index.html /var/lib/tomcat7/webapps/ROOT/index.html
EXPOSE 8080

CMD  ["/root/run.sh"]
