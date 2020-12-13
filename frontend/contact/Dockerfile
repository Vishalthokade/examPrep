#base image 
FROM httpd
COPY ./dist/contact/ /usr/local/apache2/htdocs/

EXPOSE 1000

CMD apachectl -D FOREGROUND
