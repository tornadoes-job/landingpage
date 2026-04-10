# 🚀 AWS Deployment Plan - E-Learning Platform

**Project Name:** XAM XAM Elite E-Learning Platform  
**Cloud Provider:** AWS  
**Mode:** NEW (Greenfield)  
**Created:** 2026-04-08  
**Status:** ⏳ **Pending Approval**  

---

## 📊 Project Summary

| Property | Value |
|----------|-------|
| **Application Type** | Full-stack Web Application (SPA) |
| **Frontend** | Angular 21+ (SPA + Responsive) |
| **Backend** | NestJS 10+ (RESTful API) |
| **Database** | AWS RDS PostgreSQL 15 (Managed) |
| **Cache** | AWS ElastiCache Redis 7 (Managed) |
| **Storage** | S3 (file uploads, assets) + CloudFront CDN |
| **Identity** | JWT + Passport.js |
| **Container Registry** | Amazon ECR (Elastic Container Registry) |
| **IaC Language** | CloudFormation ou Terraform |
| **Containerization** | Docker Compose (Dev) + ECS Fargate (Prod) |
| **Deployment Strategy** | ECS Fargate (serverless containers) or AppRunner |

---

## 🏗️ Architecture Overview

```
┌────────────────────────────────────────────────────┐
│        Frontend (Angular SPA - Static)              │
│   S3 + CloudFront CDN (global distribution)        │
└──────────────────┬─────────────────────────────────┘
                   │ HTTPS/REST API
┌──────────────────▼─────────────────────────────────┐
│      Backend (NestJS - ECS Fargate/AppRunner)      │
│   Serverless containers, auto-scaling               │
└──────────────────┬────────────────────┬────────────┘
                   │ PostgreSQL         │ Redis
            ┌──────▼──────────┐   ┌────▼────────────┐
            │  RDS PostgreSQL │   │ ElastiCache     │
            │  (Multi-AZ)     │   │ (Auto-failover) │
            └─────────────────┘   └─────────────────┘
                   
        ┌──────────────────────────────┐
        │ S3 (File uploads, backups)   │
        │ CloudFront CDN               │
        └──────────────────────────────┘
```

---

## 📋 Technical Stack Selection

### **Frontend Stack**
- Framework: Angular 21+
- Build: @angular-eslint, TypeScript 5+
- State: NgRx + Effects
- Styling: Tailwind CSS + Angular Material
- HTTP: HttpClient + Interceptors
- Testing: Jasmine + Karma + Cypress (E2E)
- Package Manager: npm

### **Backend Stack**
- Framework: NestJS 10+ (TypeScript)
- Runtime: Node.js 20 LTS
- API: RESTful + OpenAPI (Swagger)
- ORM: TypeORM + PostgreSQL
- Auth: Passport.js (JWT Strategy)
- Validation: class-validator, class-transformer
- Logging: Winston
- Testing: Jest + Supertest
- Task Queue: Bull (Redis-backed) or RabbitMQ

### **Database Stack**
- Primary: Azure Database for PostgreSQL Flexible Server v15
- Cache: Azure Cache for Redis Standard/Premium
- Storage: Azure Blob Storage (uploads, logs)

### **DevOps**
- Container Registry: Azure Container Registry (ACR)
- CI/CD: GitHub Actions (automated builds + tests)
- Infrastructure: Bicep (AZD templates)
- Deployment: Azure Developer CLI (azd)
- Monitoring: Application Insights (optional Phase 2)

---

## 🎯 Deployment Pipeline

### **Development Environment**
```bash
docker-compose up  # PostgreSQL + Redis + NestJS + Angular (hot reload)
```

### **Staging/Production**
```
Code Push → GitHub Actions
         ↓
      Build & Test
         ↓
  Build Docker Images
         ↓
  Push to ACR
         ↓
  Deploy (Bicep) → Azure Resources
         ↓
  Container Apps / App Service
```

---

## 🔧 AWS Services Required

| Service | Configuration | Rationale |
|---------|----------------|-----------|
| **RDS PostgreSQL** | db.t3.small+ (Multi-AZ) | Managed DB, automatic failover, backups |
| **ElastiCache Redis** | cache.t3.micro (MVP) → cache.t3.small+ (Prod) | Session store, caching, auto-failover |
| **ECS Fargate** | 0.25-1 vCPU, 512MB-4GB memory | Serverless containers, auto-scaling, pay-per-use |
| **ECR** | Standard | Docker image hosting (private registry) |
| **S3** | Standard (MVP) → Intelligent-Tiering (Prod) | Static frontend, file uploads, backups |
| **CloudFront** | Standard | Global CDN, edge caching, SSL/TLS |
| **Application Load Balancer** | Standard | Route traffic to ECS tasks, health checks |
| **CloudWatch** | Standard (Phase 2) | Logs, metrics, monitoring |
| **Secrets Manager** | Standard | Secrets management (DB password, API keys) |
| **IAM + Security Groups** | Custom | Access control, network isolation |

---

## 📦 Project Structure

```
e-learning-platform/
├── .aws/
│   ├── deployment-plan.md          <- YOU ARE HERE
│   ├── config.json                 (environment config)
│   └── env/.env.local              (sensitive - NOT in git)
├── .github/
│   └── workflows/
│       ├── ci.yml                  (Build + Test)
│       └── deploy.yml              (Deploy to AWS)
├── infra/
│   ├── terraform/                  OR cloudformation/
│   │   ├── main.tf                 (Main orchestrator)
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   ├── modules/
│   │   │   ├── rds.tf              (PostgreSQL)
│   │   │   ├── elasticache.tf      (Redis)
│   │   │   ├── ecs.tf              (ECS Fargate cluster)
│   │   │   ├── alb.tf              (Application Load Balancer)
│   │   │   ├── s3.tf               (S3 + CloudFront)
│   │   │   ├── ecr.tf              (Container Registry)
│   │   │   ├── iam.tf              (Roles, policies)
│   │   │   ├── security-groups.tf  (Network)
│   │   │   └── secrets.tf          (Secrets Manager)
│   │   ├── terraform.tfvars        (Parameters)
│   │   └── .terraform/
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   ├── main.ts
│   │   └── app.module.ts
│   ├── Dockerfile                  (Multi-stage)
│   ├── package.json
│   ├── tsconfig.json
│   └── nest-cli.json
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── assets/
│   │   ├── main.ts
│   │   └── index.html
│   ├── Dockerfile                  (Node builder + Nginx)
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml              (Local dev)
└── README.md                       (Setup guide)
```

---

## 🔐 Security Decisions (AWS)

- ✅ JWT tokens (1 day) + Refresh tokens (7 days, httpOnly cookie)
- ✅ IAM roles for ECS tasks (no hardcoded credentials)
- ✅ Secrets Manager for sensitive data (DB password, API keys)
- ✅ Security Groups for network isolation
- ✅ HTTPS enforced (ALB listener, ACM certificate)
- ✅ RDS encryption at rest (KMS)
- ✅ S3 bucket encryption (SSE-S3 or SSE-KMS)
- ✅ VPC for private network (custom CIDR blocks)
- ✅ CloudWatch for audit logs and monitoring
- ✅ WAF on CloudFront (Phase 2, DDoS protection)

---

## 💰 Cost Estimates (Monthly - AWS)

| Service | Tier | Est. Cost |
|---------|------|-----------|
| RDS PostgreSQL | db.t3.small | ~$30 |
| ElastiCache Redis | cache.t3.micro | ~$15 |
| ECS Fargate | 0.5 vCPU, 1GB/month | ~$60-80 |
| ALB | Standard | ~$16 |
| S3 storage | 50GB | ~$1 |
| CloudFront | 100GB transfer | ~$10 |
| ECR | 10GB storage | ~$1 |
| CloudWatch | Logs + metrics | ~$5 |
| Secrets Manager | 1 secret | ~$0.40 |
| **TOTAL (MVP)** | — | **~$130-160** |

**Note:** Costs scale with traffic + data. Fargate pricing: $0.04438/hour per vCPU, $0.004731/hour per GB.

---

## 📅 Implementation Phase Overview

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **Phase 0** | 1 week | Project scaffold, Dockerfiles, azure.yaml |
| **Phase 1** | 6 weeks | Auth, users, courses CRUD, basic API |
| **Phase 2** | 8 weeks | Content management, quizzes, progress tracking |
| **Phase 3** | 6 weeks | Certificates, submissions, scoring |
| **Phase 4** | 4 weeks | Payments, admin panel |
| **Phase 5** | 4 weeks | Real-time chat & notifications |
| **Phase 6** | 4 weeks | Formateur dashboards & analytics |
| **Phase 7** | 6 weeks | Testing & QA |
| **Phase 8** | 3 weeks | Production deployment |
| **TOTAL** | ~43 weeks | **Production-ready platform** |

---

## ⚙️ What Will Be Generated (Phase 0)

### **Backend**
- [ ] NestJS project scaffolded
- [ ] TypeORM setup (entities, migrations)
- [ ] Authentication module (JWT + Passport)
- [ ] Health check endpoint (`/health`)
- [ ] Swagger API documentation
- [ ] Winston logger configured
- [ ] Environment configs (.env.example)
- [ ] Dockerfile (multi-stage Node.js)

### **Frontend**
- [ ] Angular 21 project scaffolded
- [ ] Routing configured (guards, lazy loading)
- [ ] Auth interceptor (JWT injection)
- [ ] Material theme setup
- [ ] Tailwind CSS configured
- [ ] Dockerfile (Node builder + Nginx)
- [ ] Build optimization (AOT, tree-shaking)

### **Infrastructure (Terraform)**
- [ ] RDS PostgreSQL module (Multi-AZ, backup)
- [ ] ElastiCache Redis module (replication)
- [ ] ECS cluster + task definitions
- [ ] Application Load Balancer
- [ ] S3 bucket + CloudFront distribution
- [ ] ECR repository
- [ ] IAM roles + policies (least privilege)
- [ ] Security groups (ingress/egress rules)
- [ ] Secrets Manager integration
- [ ] VPC configuration (optional)

### **DevOps**
- [ ] Terraform configuration (dev, staging, prod)
- [ ] Docker Compose (local development)
- [ ] GitHub Actions workflows (CI/CD)
- [ ] AWS credentials setup guide
- [ ] Environment files (.env templates, .tfvars)
- [ ] README with AWS deployment steps
- [ ] Task definitions for ECS Fargate

---

## ✅ Approval Checklist

**Before proceeding to Phase 2 (Execution), please confirm:**

- [ ] **AWS Account Ready?** (You have AWS credentials configured)
- [ ] **AWS Region Preference?** (e.g., `eu-west-1`, `us-east-1`)
- [ ] **Terraform or CloudFormation?** (Terraform ✅ recommended)
- [ ] **Backend Orchestrator:** ECS Fargate ✅ or Lambda/AppRunner?
- [ ] **Frontend Hosting:** S3 + CloudFront ✅ or AWS Amplify?
- [ ] **VPC Needed?** (Public subnets sufficient for MVP)
- [ ] **Multi-AZ Database?** (Yes for production-readiness)
- [ ] **Cost estimate comfortable?** (~$130-160/month MVP)
- [ ] **Timeline acceptable?** (10 months full development)
- [ ] **GitHub Actions for CI/CD?** (Stores AWS credentials securely)

---

## 📝 Next Steps

**Option A: APPROVE & PROCEED**
```
→ Create scaffolds (NestJS, Angular, Dockerfiles)
→ Generate Terraform configuration (ECS, RDS, S3, etc.)
→ Configure CI/CD (GitHub Actions for AWS)
→ Local dev environment (docker-compose)
→ AWS credentials setup + region selection
→ Deploy to AWS (terraform apply)
→ Ready for Phase 1 development
```

**Option B: MODIFY PLAN**
```
→ Change backend orchestration (Lambda vs ECS vs AppRunner?)
→ Change frontend hosting (Amplify vs S3+CloudFront?)
→ Adjust budget tier or region
→ Add/remove AWS services
→ Private network (VPC) requirements?
```

**Option C: QUESTIONS**
```
→ Ask about any AWS architecture decisions
→ Clarify technical requirements
→ Cost optimization strategies?
```

---

## 📞 Status

**Current Status:** ⏳ **AWAITING APPROVAL**

**Approval Requested From:** You (User)

**Plan Created By:** GitHub Copilot Agent  
**Date:** 2026-04-08  
**Cloud Provider:** AWS (Adapted from Azure)

---

**Please review and respond with:**
1. ✅ **APPROVE** (proceed with scaffold for AWS)
2. ❓ **QUESTIONS** (clarify before proceeding)
3. 🔄 **MODIFY** (adjust plan)
