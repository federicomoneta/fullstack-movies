# syntax=docker/dockerfile:1

FROM mysql
# MAINTAINER csgeek@mail.com

ENV MYSQL_ROOT_PASSWORD Admin2020%

# ADD jsp_backup.sql /docker-entrypoint-initdb.d

CMD ["mysqld", "--default-authentication-plugin=mysql_native_password"]

EXPOSE 3306
