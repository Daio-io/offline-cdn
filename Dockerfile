FROM    centos:centos6

# Enable EPEL for Node.js
RUN     rpm -Uvh http://download.fedoraproject.org/pub/epel/6/i386/epel-release-6-8.noarch.rpm
# Install Node.js and npm
RUN     yum install -y npm

# Bundle app
ADD ./app /app

# Remove any current node modules and run npm install
RUN cd  /app && rm -rf node_modules && npm install

EXPOSE  5000

CMD ["node", "/app/index.js"]

