# Setup

- npm install
- npm run prisma:reset 
- re-run npm run prisma:reset whenever you change schema


# Deploy

- create database service
- set DATABASE_URL
- build script
    - npm install && npm run prisma:reset
- start script
    - node server.js

