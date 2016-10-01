# get started


#### build node image (this can take a bit)
`docker build -t ddubs/vulpix-node-example ./node` 

#### start services

`docker-compose up`

#### see it works

[here](http://localhost:8000)

## what I think is cool
1. load balances between process
2. failover
    * kill one of the node processes and watch the behavior
    * found it more interesting watching from two different tabs
