FROM mdillon/postgis:9.6-alpine

COPY script/*.sh  /docker-entrypoint-initdb.d/
COPY cluster_setup.sh /var/lib/postgresql/
RUN chmod +x /var/lib/postgresql/cluster_setup.sh