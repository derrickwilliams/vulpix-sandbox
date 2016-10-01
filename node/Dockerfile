FROM mhart/alpine-node

RUN apk add --update \
    python \
    python-dev \
    py-pip \
    build-base \
    hiredis \
  && pip install virtualenv \
  && rm -rf /var/cache/apk/*

RUN npm install -g nodemon

# Provides cached layer for node_modules
ADD package.json /tmp/package.json
RUN cd /tmp && npm install --loglevel=verbose redis \
  && npm install --loglevel=verbose

RUN mkdir -p /src && cp -a /tmp/node_modules /src/

# Define working directory
WORKDIR /src
ADD . /src

# Expose port
EXPOSE  8080

# Run app using nodemon
CMD ["npm", "start"]


# # Set the base image to Ubuntu
# FROM    mhart/alpine-node:6.0.0

# # File Author / Maintainer
# MAINTAINER Anand Mani Sankar

# RUN apk add --update \
#     python \
#     python-dev \
#     py-pip \
#     build-base \
#   && pip install virtualenv \
#   && rm -rf /var/cache/apk/*

# # Install nodemon
# RUN npm install -g nodemon

# # Provides cached layer for node_modules
# ADD package.json /tmp/package.json
# RUN cd /tmp && npm install
# RUN mkdir -p /src && cp -a /tmp/node_modules /src/

# # Define working directory
# WORKDIR /src
# ADD . /src

# # Expose port
# EXPOSE  8080

# # Run app using nodemon
# CMD ["nodemon", "/src/index.js"]