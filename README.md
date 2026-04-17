\# Dockerized Cloud Wallet



A cloud-ready wallet API built with Node.js, Express, MySQL, and Docker Compose.



This project simulates a digital wallet system where users can create wallet accounts, view balances, deposit funds, and withdraw funds. It demonstrates backend development, database integration, containerization, and practical cloud engineering skills.



\## Tech Stack



\* Node.js

\* Express.js

\* MySQL 8

\* Docker

\* Docker Compose

\* REST API

\* PowerShell



\## Project Structure



dockerized-cloud-wallet/

├── server.js

├── package.json

├── package-lock.json

├── Dockerfile

├── docker-compose.yml

├── .dockerignore

├── .gitignore

├── init.sql

└── README.md



\## How It Works



This project runs two containers together:



\* \*\*wallet\_app\*\* runs the Node.js API

\* \*\*wallet\_db\*\* runs the MySQL database



Docker Compose manages both services and allows them to communicate on the same internal network.



Ports used:



\* API: `3000`

\* MySQL: `3307`



\## Features



\* Create wallet users

\* View all users

\* Deposit funds

\* Withdraw funds

\* Store balances in MySQL

\* Run entire stack with Docker



\## Run The Project



Make sure Docker Desktop is running.



```bash

docker compose up --build

```



To stop:



```bash

docker compose down

```



\## API Base URL



```text

http://localhost:3000

```



\## API Endpoints



\### Create User



\*\*POST\*\* `/users`



Request:



```json

{

&#x20; "name": "Ndandise",

&#x20; "email": "ndandise@example.com",

&#x20; "balance": 500

}

```



PowerShell test:



```powershell

Invoke-RestMethod -Method Post -Uri "http://localhost:3000/users" -ContentType "application/json" -Body '{"name":"Ndandise","email":"ndandise@example.com","balance":500}'

```



Response:



```json

{

&#x20; "message": "User created successfully",

&#x20; "userId": 1

}

```



\---



\### Get Users



\*\*GET\*\* `/users`



```powershell

Invoke-RestMethod -Method Get -Uri "http://localhost:3000/users"

```



Response:



```json

\[

&#x20; {

&#x20;   "id": 1,

&#x20;   "name": "Ndandise",

&#x20;   "email": "ndandise@example.com",

&#x20;   "balance": 500

&#x20; }

]

```



\---



\### Deposit Funds



\*\*POST\*\* `/deposit/1`



Request:



```json

{

&#x20; "amount": 200

}

```



```powershell

Invoke-RestMethod -Method Post -Uri "http://localhost:3000/deposit/1" -ContentType "application/json" -Body '{"amount":200}'

```



Response:



```json

{

&#x20; "message": "Deposit successful"

}

```



Balance changes from `500` to `700`.



\---



\### Withdraw Funds



\*\*POST\*\* `/withdraw/1`



Request:



```json

{

&#x20; "amount": 100

}

```



```powershell

Invoke-RestMethod -Method Post -Uri "http://localhost:3000/withdraw/1" -ContentType "application/json" -Body '{"amount":100}'

```



Response:



```json

{

&#x20; "message": "Withdrawal successful"

}

```



Balance changes from `700` to `600`.



\## Database Setup



The `init.sql` file automatically creates the users table on first startup.



Columns:



\* id

\* name

\* email

\* balance



\## Docker Setup



\### Dockerfile



The app container:



\* Uses Node.js 20 Alpine

\* Copies project files

\* Installs dependencies

\* Exposes port 3000

\* Starts with `npm start`



\### docker-compose.yml



This file:



\* Builds the Node.js app

\* Runs MySQL 8

\* Maps ports

\* Creates persistent database storage

\* Loads `init.sql`



\## Commands Used



```bash

docker compose up --build

docker compose down

docker ps

docker logs wallet\_app

docker logs wallet\_db

docker restart wallet\_app

```



\## Successfully Tested



\* Docker image build

\* Multi-container startup

\* App to DB connection

\* User creation

\* User retrieval

\* Deposits

\* Withdrawals

\* Balance updates



\## Real Problems Solved



During the project:



\* Docker DNS pull issues

\* Docker Desktop startup issues

\* MySQL timing issues

\* App connection refused errors

\* PowerShell JSON formatting errors



\## Skills Demonstrated



\* Docker

\* Docker Compose

\* Backend API development

\* MySQL integration

\* SQL logic

\* REST testing

\* Debugging containers

\* Multi-service architecture





\## Why This Project Matters



This project proves practical ability to build real backend systems using containers and databases, not just theory.



\## Future Improvements



\* JWT Authentication

\* Transaction History

\* Transfer Between Users

\* Frontend Dashboard

\* CI/CD Pipeline

\* Deploy to AWS EC2

\* Nginx Reverse Proxy



\## Author



Ndandise Xalisa



GitHub: https://github.com/Zwelibanzi09-03



\## Final Status



Dockerized Cloud Wallet completed successfully.



