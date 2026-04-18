# CI/CD Dockerized Cloud Wallet on AWS EC2

A real-world DevOps project where a Node.js + MySQL wallet application was containerized with Docker, connected to GitHub Actions CI/CD, and automatically deployed to a live AWS EC2 Ubuntu server.

## Live Demo

http://16.28.29.110:3000

---

## Project Overview

This project demonstrates a complete automated deployment pipeline.

Whenever code is pushed to GitHub:

- GitHub Actions starts automatically
- Docker image is built
- Image is pushed to Docker Hub
- GitHub securely connects to AWS EC2 using SSH
- EC2 pulls the latest image
- Docker Compose launches containers
- Updated application goes live automatically

---

## Tech Stack

- AWS EC2 Ubuntu 24.04
- Docker
- Docker Compose
- GitHub Actions
- Docker Hub
- Node.js
- Express.js
- MySQL
- Linux
- SSH Keys
- Git

---

## Architecture

Developer Pushes Code  
↓  
GitHub Repository  
↓  
GitHub Actions Workflow  
↓  
Build Docker Image  
↓  
Push to Docker Hub  
↓  
SSH Into AWS EC2  
↓  
Pull Latest Image  
↓  
Run Docker Compose  
↓  
Live Application

---

## Repository Structure

.
├── .github/  
│   └── workflows/  
│       └── deploy.yml  
├── Dockerfile  
├── docker-compose.yml  
├── server.js  
├── package.json  
└── README.md

---

## CI/CD Workflow

Workflow file:

.github/workflows/deploy.yml

This workflow handles:

- Checkout repository code
- Login to Docker Hub
- Build Docker image
- Push image to Docker Hub
- SSH into EC2
- Pull latest image
- Restart containers
- Publish live update

---

## Docker Containers

### App Container

- Node.js Cloud Wallet API
- Runs on port 3000

### Database Container

- MySQL 8.0
- Persistent Docker volume attached

---

## Application Features

- Create users
- Deposit funds
- Withdraw funds
- View balances
- MySQL integration

---

## Real Problems Solved During This Project

This project included real production troubleshooting.

### 1. GitHub Secrets Configuration

Configured secure repository secrets:

- DOCKERHUB_USERNAME
- DOCKERHUB_TOKEN
- EC2_HOST
- EC2_USERNAME
- EC2_SSH_KEY

### 2. SSH Authentication Problems

Resolved:

- Missing SSH key issues
- Incorrect key formatting
- Connection reset by peer
- Manual SSH verification through PowerShell

### 3. Original EC2 Instance Failure

The first server became unstable:

- High CPU CloudWatch alarm triggered
- Instance checks failed
- SSH access stopped working
- GitHub deployment failed

Solution:

- Launched a fresh Ubuntu EC2 instance
- Reinstalled Docker
- Reconfigured SSH access
- Updated GitHub secrets
- Redeployed successfully

### 4. Ubuntu 24.04 Docker Package Changes

Initial install method failed.

Correct installation used:

sudo apt update  
sudo apt install docker.io docker-compose-v2 -y

### 5. GitHub Actions Deployment Errors

Fixed:

- Hanging docker login step
- Wrong EC2 target IP
- SSH handshake failures
- Failed workflow reruns
- Broken server deployment attempts

### 6. AWS Networking

Configured security group inbound rules:

- Port 22 SSH
- Port 3000 Application Access
- Port 80 HTTP

---

## Final Successful Result

GitHub Actions workflow completed successfully.

Containers deployed automatically.

Live application response:

Cloud Wallet API is running

---

## Commands Used

### Trigger Deployment

git add .  
git commit -m "Deploy update"  
git push

### Verify Docker

docker --version  
docker compose version  
docker ps

### Manual SSH Access

ssh -i ndandise-key.pem ubuntu@server-ip

---

## Skills Demonstrated

- AWS EC2 Deployment
- Docker Containers
- CI/CD Automation
- GitHub Actions
- Linux Administration
- SSH Key Management
- Secrets Management
- Production Troubleshooting
- MySQL Containers
- Cloud Networking
- Infrastructure Recovery

---

## Future Improvements

- Custom domain
- HTTPS SSL
- Nginx reverse proxy
- Monitoring dashboard
- Auto rollback deployments
- Load balancer
- Staging environment

---

## Why This Project Matters

This project proves real hands-on DevOps engineering ability:

- Build
- Automate
- Deploy
- Troubleshoot
- Recover
- Deliver

---

Cloud Engineer | AWS | Docker | CI/CD | Linux | DevOps | Automation
