FROM mysql:5.7
#setting a password for root user
ENV MYSQL_ROOT_PASSWORD "root"
#creating a db
ENV MYSQL_DATABASE "DB"
#getting files to execute in particular directory
COPY ./db.sql /docker-entrypoint-initdb.d/
#exposing the container port for using for forwarding
EXPOSE 3306
