# 📚 CAHIER DE CHARGES - PLATEFORME E-LEARNING XAM XAM ELITE

**Version:** 1.0  
**Date:** Avril 2026  
**Client:** XAM XAM Elite  
**Stack Technologique:** NestJS + Angular  

---

## 📋 TABLE DES MATIÈRES

1. [Contexte et Objectifs](#contexte-et-objectifs)
2. [Périmètre du Projet](#périmètre-du-projet)
3. [Analyse Fonctionnelle](#analyse-fonctionnelle)
4. [Architecture Technique](#architecture-technique)
5. [Base de Données](#base-de-données)
6. [Spécifications Frontend](#spécifications-frontend)
7. [Spécifications Backend](#spécifications-backend)
8. [Sécurité & Authentification](#sécurité--authentification)
9. [Intégrations Externes](#intégrations-externes)
10. [Plan de Développement](#plan-de-développement)
11. [Tests & QA](#tests--qa)
12. [Déploiement & Maintenance](#déploiement--maintenance)

---

## 1. CONTEXTE ET OBJECTIFS

### 1.1 Contexte
XAM XAM Elite est une plateforme de formation accélérée (6 mois) proposant 20+ domaines spécialisés avec :
- Formation théorique et pratique
- Stage rémunéré intégré
- Employabilité garantie
- Recrutement prioritaire au sein du groupe WALDY

### 1.2 Objectifs de la Plateforme E-Learning
1. **Digitaliser les formations** : Faciliter l'accès au contenu pédagogique 24/7
2. **Suivi en temps réel** : Tracker la progression de chaque apprenant
3. **Interaction pédagogique** : Forums, webinaires, tutoriels vidéo
4. **Certification** : Générer et valider les certificats numériques
5. **Gestion administrative** : Inscriptions, paiements, attestations
6. **Analytics** : Tableau de bord pour formateurs et administrateurs

### 1.3 Public Cible
- **Apprenants** : Candidats aux formations (18-45 ans, niveaux BAC+2 minimum)
- **Formateurs** : Experts du groupe WALDY et partenaires externes
- **Administrateurs** : Gestion RH, finance, support
- **Responsables Domaines** : Chef de projet par spécialité

---

## 2. PÉRIMÈTRE DU PROJET

### 2.1 Inclus
✅ Plateforme web responsive (mobile, tablet, desktop)  
✅ Dashboard apprenant avec progession personnalisée  
✅ Gestion du contenu pédagogique (cours, modules, quizz)  
✅ Système de notation et évaluation  
✅ Forum de discussion et chat en temps réel  
✅ Webinaires/conférences en ligne (intégration Zoom/Jitsi)  
✅ Certificats numériques édités automatiquement  
✅ Gestion des inscriptions et des paiements  
✅ Tableau de bord analytiques pour formateurs  
✅ Authentification sécurisée (JWT + OAuth2 optional)  
✅ API REST complète  
✅ Documentation API (Swagger)  

### 2.2 Exclus (Phase 2+)
❌ Application mobile native (Version web optimisée d'abord)  
❌ Gamification avancée (badges, leaderboards)  
❌ Intelligence Artificielle (chatbot IA)  
❌ Marketplace de formation (vendre des places)  
❌ Localisation complète (FR/EN d'abord)  

---

## 3. ANALYSE FONCTIONNELLE

### 3.1 Parcours Utilisateur - APPRENANT

#### 3.1.1 Inscription & Authentification
```
Visiteur → Page d'accueil → Clic "S'inscrire"
           → Remplir formulaire (email, mot de passe, données personnelles)
           → Vérification email
           → Choix du domaine de formation (select parmi 20+)
           → Paiement (Stripe/Wave/Payteck)
           → Confirmation d'inscription
           → Redirection dashboard apprenant
```

**Champs d'inscription:**
- Prénom et nom
- Email (validation unicité)
- Téléphone (validé au format Sénégal)
- Domaine de formation (dropdown)
- Niveau d'étude actuel
- Lieu de résidence
- Secteur professionnel
- Mot de passe (forces check: min 12 chars, 1 majuscule, 1 chiffre, 1 spécial)

#### 3.1.2 Dashboard Apprenant
**Aperçu principal:**
- Profil utilisateur (avatar, infos, état d'avancement)
- Cours en cours (progression bar 0-100%)
- Prochaine session/deadline importante
- Statistiques personnelles (heures d'étude, score moyen)
- Quick access à 3 derniers cours visionnés

**Rubriques:**
- **Mes Cours** : Liste tous les modules du domaine (filtrage par statut: En cours/Complété/À venir)
- **Mon Progression** : Visualisation chronographique du parcours
- **Certificats** : Téléchargement des attestations générées
- **Messagerie** : Conversations avec formateurs et classmates
- **Paramètres** : Profil, sécurité, notifications, préférences de langue

#### 3.1.3 Consultation Contenu Pédagogique
**Structure des cours:**
```
Domaine (ex: Commerce International)
└── Phase 1 (Fondamentaux) → 4 semaines
    ├── Module 1: Environnement global
    │   ├── Leçon 1.1: Acteurs du commerce (vidéo 15min)
    │   ├── Leçon 1.2: Règles internationales (article + slides)
    │   ├── Quiz 1 (5 questions multi-choix)
    │   └── Ressources (PDF, lien externe)
    ├── Module 2: Techniques import-export
    │   └── (même structure)
    └── Projet Module (remise de devoir)
└── Phase 2 (Performance & Développement) → 3 mois
    ├── Etude de cas en groupe
    ├── Mise en situation réelle
    └── Soutenance finale
```

**Types de contenu:**
- **Vidéos** : Hébergées (Vimeo Pro ou YouTube, lecture adaptive bitrate)
- **Articles** : Markdown/HTML enrichi avec images
- **Slides** : Upload PDF ou Iframes Slideshare
- **Quizz** : Questions multi-choix, vrai/faux, texte libre
- **Ressources** : Téléchargements (PDF, DOCX, ZIP)
- **Devoirs** : Remise de fichiers avec date limite et notation

**Interaction:**
- Lecture/téléchargement du contenu
- Note automatique pour quizz
- Soumission devoir (upload max 50MB)
- Marquage comme "complété" (débloquer contenu suivant)
- Commentaires par section (modérés par formateurs)

#### 3.1.4 Forums & Chat
**Forums:**
- Système de posts/réponses par module ou topique transversal
- Les apprenants peuvent poser questions, formateurs répondent (tag @formateur1)
- Système de "upvote" pour réponses utiles
- Modération (suppression contenu inapproprié)
- Recherche full-text

**Chat en temps réel:**
- Messages directs apprenant ↔ formateur
- Notifications push (opt-in)
- Historique conversations
- Disponibilité formateurs (en ligne/hors ligne)

#### 3.1.5 Webinaires & Sessions Live
- Calendrier des sessions à venir
- Intégration Jitsi ou Zoom API pour vidéoconf
- Enregistrement des webinaires (accessible après)
- Q&A live pendant session (modérée)
- Ressources synchrones (partage écran, annotations)

#### 3.1.6 Évaluations & Notation
- Notation automatique quizz (% correct)
- Notation manuelle devoirs (formateur assigne score + commentaire)
- Calcul moyenne module = moyenne pondérée (quizz 30%, devoirs 70%)
- Passage module = moyenne ≥ 60%
- Redoublement possible (jusqu'à 3 tentatives)
- Relevé de notes téléchargeable

#### 3.1.7 Certificats & Attestations
- Certificat généré automatiquement si:
  - Tous modules passés (≥60%)
  - Stage validé
  - Projet final soutenu et approuvé
- Certificat numérique (PDF signé avec QR code de vérification)
- Partage certificat sur réseaux sociaux (avec lien de vérification)
- Historique certificats consultables

---

### 3.2 Parcours Utilisateur - FORMATEUR

#### 3.2.1 Authentification & Accès
- Login sécurisé (email + MFA optionnel)
- Rôle: `FORMATEUR` (accès restreint)
- Vue d'accueil: domaines assignments (relations Many-to-Many)

#### 3.2.2 Gestion Contenu Pédagogique
**CRUD Complet:**
- Créer/modifier/supprimer modules, leçons, quizz
- Upload vidéos (conversion WebM/MP4)
- Import contenu depuis Word/PDF (OCR basique)
- Versionning (historique modifications)
- Brouillon → Publication (workflow)

**Éditeur de contenu:**
- Wysiwyg Editor (Quill ou Tinymce) pour articles
- Code highlighting pour exemples techniques
- LaTeX pour formules mathématiques
- Galerie images intégrée

#### 3.2.3 Suivi Apprenants
**Dashboard Formateur:**
- Liste apprenants par domaine
- Status d'avancement global (% achèvement)
- Taux de réussite (% passant chaque module)
- Apprenants "en retard" (alertes automatiques)
- Temps moyen dépensé par module

**Actions:**
- Corriger/noter devoirs (interface dépôt/correcteur)
- Visualiser quizz repassés (analytics questions)
- Envoyer messages personnalisés
- Marquer automatiquement comme complété (si devoir excellent)
- Générer certificats fin de formation

#### 3.2.4 Création Quizz
- Interface intuitive pour ajouter questions
- Types: Multi-choix, Vrai/Faux, Réponse texte libre, Matching
- Points par question configurable
- Feedback immédiat ou après submission (choix)
- Randomization questions (optionnel)
- Limitation temps par quizz (optionnel)

#### 3.2.5 Modération & Sécurité
- Moderer les commentaires avant publication (optionnel)
- Bloquer utilisateurs toxiques
- Historique modifications contenu
- Alertes plagiat (détection similitude devoirs)

---

### 3.3 Parcours Utilisateur - ADMIN

#### 3.3.1 Gestion Utilisateurs
- CRUD apprenants/formateurs/admin
- Activation/désactivation compte
- Reset mot de passe initiés
- Bulk import utilisateurs (CSV)
- Attribution rôles dynamiques

#### 3.3.2 Gestion Domaines de Formation
- Créer/modifier domaines (ex: "Commerce International")
- Assigner formateurs à domaines
- Configurer durée formation (ex: 6 mois)
- Définir prix inscription (ex: 500 000 FCFA)
- Activer/désactiver domaine

#### 3.3.3 Gestion Financière
- Dashboard revenus (CA par domaine, par mois)
- Rapports inscriptions payantes
- Gestion codes promo/réductions
- Exports factures (PDF/Excel)
- Téléchargement rapports d'apprenants (RGPD compliant)

#### 3.3.4 Configuration Système
- Paramètres généraux (logo, couleurs, titre site)
- Gestion emails (SMTP config, templates)
- Intégrations externes (Stripe, Zoom, etc.)
- Logs d'accès/audit (qui a fait quoi, quand)
- Sauvegardes base données (exports SQL)
- Gestion stockage fichiers (quota, nettoyage)

#### 3.3.5 Support & Ticketing
- Ticket support apprenant (catégorie, priorité)
- Assignment formateurs support
- Historique résolution
- Knowledge base (FAQ générées automatiquement)

---

## 4. ARCHITECTURE TECHNIQUE

### 4.1 Architecture Globale
```
┌─────────────────────────────────────────────────────────┐
│                      CLIENT (Angular)                    │
│    (SPA responsive - Mobile/Tablet/Desktop)              │
└────────────┬────────────────────────────────────────────┘
             │ HTTP/HTTPS (REST API + WebSocket)
┌────────────▼────────────────────────────────────────────┐
│                    API GATEWAY/LOAD BALANCER              │
│              (Nginx ou AWS Application LB)                │
└────────────┬────────────────────────────────────────────┘
             │
    ┌────────┼────────┬─────────┐
    ▼        ▼        ▼         ▼
┌────────┐┌────────┐┌────────┐┌────────┐
│ NestJS ││ Cache  ││ Message││Storage │
│ Backend││ Redis  ││ Queue  ││ S3/MinIO
│        │└────────┘│ RabbitMQ└────────┘
└────┬───┘          └────┬───┘
     │                   │
     └─────────┬─────────┘
               ▼
         ┌──────────────┐
         │   Database   │
         │  PostgreSQL  │
         └──────────────┘
```

### 4.2 Stack Frontend (Angular)

**Version:** Angular 17+  
**Framework:** Angular (TypeScript, RxJS)  
**State Management:** NgRx  
**HTTP Client:** HttpClient (Interceptors)  
**Styling:** Tailwind CSS + Angular Material  
**UI Libraries:** Angular Material, PrimeNG  
**E-commerce:** Si paiement intégré (Stripe Angular SDk)  
**Testing:** Jasmine + Karma  

**Packages clés:**
```json
{
  "dependencies": {
    "@angular/core": "^17.0.0",
    "@angular/material": "^17.0.0",
    "@ngrx/store": "^17.0.0",
    "@ngrx/effects": "^17.0.0",
    "tailwindcss": "^3.0.0",
    "quill": "^1.3.7",
    "chart.js": "^4.0.0",
    "zone.js": "^0.14.x",
    "@angular/common": "^17.0.0"
  }
}
```

### 4.3 Stack Backend (NestJS)

**Version:** NestJS 10+  
**Runtime:** Node.js 20 LTS  
**Langage:** TypeScript  
**ORM:** TypeORM + Migrations Knex  
**Validation:** class-validator, class-transformer  
**Auth:** Passport.js (JWT strategy)  
**Logging:** Winston  
**Testing:** Jest + Supertest  

**Architecture NestJS:**
```
src/
├── modules/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   ├── auth.module.ts
│   │   ├── dto/
│   │   └── strategies/
│   ├── users/
│   ├── courses/
│   ├── lessons/
│   ├── quizz/
│   ├── submissions/
│   ├── certificates/
│   ├── payments/
│   ├── notifications/
│   ├── chat/
│   └── analytics/
├── common/
│   ├── guards/
│   ├── interceptors/
│   ├── filters/
│   └── decorators/
├── database/
│   ├── entities/
│   └── migrations/
├── config/
│   ├── database.config.ts
│   ├── jwt.config.ts
│   └── mail.config.ts
├── utils/
│   ├── validators.ts
│   ├── helpers.ts
│   └── constants.ts
└── main.ts
```

### 4.4 Base de Données

**SGBD:** PostgreSQL 15+  
**ORM:** TypeORM  
**Migrations:** TypeORM CLI / Knex  
**Backups:** Automatiques daily (AWS S3 ou minIO)  

### 4.5 Cache & Sessions
- **Redis:** Cache requêtes fréquentes, sessions utilisateur
- **TTL:** Sessions 7 jours, cache data 24h

### 4.6 File Queue & Jobs Asynchrones
- **RabbitMQ ou Bull (Redis-based)**
- Jobs: Envoi emails, conversion vidéos, génération certificats

### 4.7 Stockage Fichiers
- **Local (initial):** `/uploads/` + nginx alias
- **Production:** AWS S3 ou MinIO (self-hosted)
- **CDN:** CloudFlare (caching, compression)

### 4.8 Authentification & Autorisation
- **JWT** avec refresh tokens
- **Rôles:** ADMIN, FORMATEUR, APPRENANT
- **Permissions granulaires** basées sur rôles
- **OAuth2 optionnel:** Google, Facebook sign-in (Phase 2)

---

## 5. BASE DE DONNÉES

### 5.1 Entités Principales

#### Users
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  avatar_url VARCHAR(500),
  role ENUM('ADMIN', 'FORMATEUR', 'APPRENANT'),
  status ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_login TIMESTAMP,
  UNIQUE(email)
);
```

#### Domains (Domaines de Formation)
```sql
CREATE TABLE domains (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  duration_months INT DEFAULT 6,
  price DECIMAL(15, 2),
  max_students INT,
  formateur_lead_id UUID REFERENCES users(id),
  status ENUM('ACTIVE', 'ARCHIVED'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Enrollments (Inscriptions)
```sql
CREATE TABLE enrollments (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  domain_id UUID NOT NULL REFERENCES domains(id),
  enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  start_date TIMESTAMP,
  end_date TIMESTAMP,
  status ENUM('ACTIVE', 'COMPLETED', 'SUSPENDED', 'CANCELED'),
  progress INT DEFAULT 0, -- 0-100%
  payment_status ENUM('PENDING', 'PAID', 'REFUNDED'),
  payment_id VARCHAR(255),
  certificate_issued BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, domain_id)
);
```

#### Courses (Modules)
```sql
CREATE TABLE courses (
  id UUID PRIMARY KEY,
  domain_id UUID NOT NULL REFERENCES domains(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  order_index INT,
  duration_hours DECIMAL(5, 2),
  status ENUM('DRAFT', 'PUBLISHED', 'ARCHIVED'),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Lessons (Leçons)
```sql
CREATE TABLE lessons (
  id UUID PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content_type ENUM('VIDEO', 'ARTICLE', 'QUIZ', 'RESOURCE', 'ASSIGNMENT'),
  content TEXT, -- HTML enrichi ou JSON
  video_url VARCHAR(500), -- Vimeo video ID ou YouTube embedd
  duration_minutes INT,
  order_index INT,
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Quizzes
```sql
CREATE TABLE quizzes (
  id UUID PRIMARY KEY,
  lesson_id UUID REFERENCES lessons(id),
  title VARCHAR(255),
  total_questions INT,
  passing_score INT DEFAULT 60, -- %
  time_limit_minutes INT,
  randomize BOOLEAN DEFAULT FALSE,
  show_feedback BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Questions
```sql
CREATE TABLE questions (
  id UUID PRIMARY KEY,
  quiz_id UUID NOT NULL REFERENCES quizzes(id) ON DELETE CASCADE,
  question_text TEXT NOT NULL,
  question_type ENUM('MULTIPLE_CHOICE', 'TRUE_FALSE', 'SHORT_TEXT', 'MATCHING'),
  points INT DEFAULT 1,
  order_index INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Submissions (Devoirs)
```sql
CREATE TABLE submissions (
  id UUID PRIMARY KEY,
  lesson_id UUID NOT NULL REFERENCES lessons(id),
  user_id UUID NOT NULL REFERENCES users(id),
  file_url VARCHAR(500), -- S3/local path
  submitted_at TIMESTAMP,
  score INT, -- NULL si pas corrigé
  feedback TEXT,
  graded_by UUID REFERENCES users(id), -- Formateur
  graded_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(lesson_id, user_id)
);
```

#### Progress (Suivi Progression)
```sql
CREATE TABLE progress (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  lesson_id UUID NOT NULL REFERENCES lessons(id),
  completed BOOLEAN DEFAULT FALSE,
  completed_at TIMESTAMP,
  views INT DEFAULT 0,
  watch_time_minutes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, lesson_id)
);
```

#### Certificates
```sql
CREATE TABLE certificates (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  domain_id UUID NOT NULL REFERENCES domains(id),
  issued_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  certificate_number VARCHAR(255) UNIQUE,
  certificate_url VARCHAR(500), -- PDF signed
  verification_token VARCHAR(255) UNIQUE,
  expires_at TIMESTAMP, -- Optionnel
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Payments
```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  enrollment_id UUID UNIQUE REFERENCES enrollments(id),
  amount DECIMAL(15, 2),
  currency VARCHAR(3) DEFAULT 'XOF',
  status ENUM('PENDING', 'COMPLETED', 'FAILED', 'REFUNDED'),
  payment_method VARCHAR(50), -- stripe, wave, payteck, etc.
  transaction_id VARCHAR(255),
  reference_number VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Forum Posts
```sql
CREATE TABLE forum_posts (
  id UUID PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES courses(id),
  user_id UUID NOT NULL REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  is_pinned BOOLEAN DEFAULT FALSE,
  views INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Forum Replies
```sql
CREATE TABLE forum_replies (
  id UUID PRIMARY KEY,
  post_id UUID NOT NULL REFERENCES forum_posts(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES users(id),
  content TEXT NOT NULL,
  is_solution BOOLEAN DEFAULT FALSE,
  upvotes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### Chat Messages
```sql
CREATE TABLE chat_messages (
  id UUID PRIMARY KEY,
  sender_id UUID NOT NULL REFERENCES users(id),
  recipient_id UUID NOT NULL REFERENCES users(id),
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 5.2 Relations & Indexes
- Index sur `(user_id, domain_id)` → Enrollments
- Index sur `domain_id` → Courses
- Index sur `course_id` → Lessons
- Index sur `(user_id, lesson_id)` → Progress
- Partitioning possible: Logs, analytics par année

---

## 6. SPÉCIFICATIONS FRONTEND

### 6.1 Pages Principales

#### 6.1.1 Landing Page Publique
- Hero section avec CTA "S'inscrire"
- Présentation 20 domaines (grid/carousel)
- Section "À Propos" (mission, valeurs)
- Section "Pourquoi XAM XAM Elite" (avantages)
- Témoignages apprenants (carousel)
- Section "Admission" (conditions, dates)
- FAQ (accordion dynamique)
- Footer avec liens légaux

#### 6.1.2 Page Authentification
**Login:**
- Email input
- Mot de passe input
- "Se souvenir de moi" (cookie 30 jours)
- Lien "Mot de passe oublié?"
- Lien "S'inscrire"

**Inscription:**
- Formulaire multi-étapes (wizard):
  - Étape 1: Infos personnelles
  - Étape 2: Choisir domaine
  - Étape 3: Conditions & paiement
  - Étape 4: Confirmation

**Reset Mot de Passe:**
- Email input
- Link envoyé par email
- Page reset (nouveau mdp + confirmation)

#### 6.1.3 Dashboard Apprenant
**Layout:**
- Sidebar (mobile: hamburger menu)
  - Rubriques: Ma Formation, Mes Cours, Messagerie, Certificats, Paramètres
- Top bar: Avatar + dropdown menu + notifications

**Vue "Ma Formation":**
- Carte apprenant (snapshot: progression, domaine, deadline)
- Statistiques (heures d'étude cette semaine, prochaines sessions)
- Timeline visuelle du parcours pédagogique
- Prochaines tâches importantes (deadlines)
- Shortcuts aux 3 derniers cours

**Vue "Mes Cours":**
- Filtrage: En cours, Complétés, À venir
- Pour chaque module:
  - Titre + description courte
  - Barre progression (% + jours restants)
  - Nombre leçons/quizz
  - CTA "Continuer le cours"

#### 6.1.4 Page Cours Détaillé
```
┌─────────────────────────────────────┐
│ Titre Module | Progression Bar      │
├────────────┬────────────────────────┤
│   Sommaire │      Contenu Principal │
│ Leçon 1 ✓  │                        │
│ Leçon 2    │  [Video Player] ou     │
│ Leçon 3    │  [Article HTML]        │
│ Quiz 1     │                        │
│ Devoir     │  Télécharger ressources│
│            │  ┌──────────────────┐  │
│            │  │ Précédent | Suivant │
│            │  └──────────────────┘  │
├────────────┴────────────────────────┤
│  Commentaires / Questions            │
└─────────────────────────────────────┘
```

- **Lecteur Vidéo:** HTML5 + contrôles adaptés (replay, sous-titres)
- **Lecteur Article:** Clean typography, responsive, peut contenir images/embeds
- **Section Ressources:** Liens téléchargement
- **Bouton "Marquer complétés":** Active après 80% visionnage vidéo
- **Commentaires:** Thread-based, modérés

#### 6.1.5 Quizz Interactif
```
┌──────────────────────────┐
│ Quiz: Module 1           │
│ Question 1/5 - Temps: 45s│
├──────────────────────────┤
│ Quelle est la définition │
│ du commerce international?
│                          │
│ ○ Réponse A              │
│ ○ Réponse B              │
│ ○ Réponse C (CORRECT)    │
│ ○ Réponse D              │
│                          │
│ [Précédent] [Suivant]    │
├──────────────────────────┤
│ Progression: ●●●○○       │
└──────────────────────────┘
```

- Affichage 1 question à la fois ou all (choix)
- Timer visible (rouge si ≤ 30 secondes)
- Boutons prev/next
- Feedback immédiat (optionnel: masqué jusqu'à fin)
- Score final + détail par question

#### 6.1.6 Soumission Devoirs
- Zone "drop & drag" pour fichier (max 50MB)
- Affichage historique submissions (versions)
- Note reçue + commentaire formateur
- Possibilité resoummettre (si deadline non dépassée)

#### 6.1.7 Forums
- Liste posts (titre, auteur, date, nb réponses, nb vues)
- Filtrage (non répondus, récents, top)
- Création post (form modal avec titre + contenu riche)
- Affichage post + réponses (thread vertical)
- Upvote/downvote réponses
- Modération (supprimer post/réponse)

#### 6.1.8 Chat
- Liste conversations (avatar + preview dernier message)
- Fenêtre chat (messages scrollables + input)
- Notifications "online/offline" formateur
- Historique conversations consultables

#### 6.1.9 Certificats
- Galerie certificats (miniatures PDF)
- Téléchargement PDF
- Partage LinkedIn/Facebook
- Vérification certificat (lien unique avec QR code)

#### 6.1.10 Paramètres Apprenant
- Profil: Photo, prénom, nom, email, téléphone
- Sécurité: Changer mdp, 2FA, appareils
- Notifications: Email préférences, rappels
- Préférences: Langue, thème (light/dark)

### 6.2 Dashboard Formateur

#### 6.2.1 Vue Principale
- Domaines assignés (cards avec stats: nb étudiants, progression moyenne)
- Top apprenants en retard (alertes)
- Derniers devoirs à corriger (queue)
- Statistiques module (taux réussite, questions problématiques)

#### 6.2.2 Gestion Contenu
- CRUD modules/leçons
- Éditeur WYSIWYG (Quill/TinyMCE)
- Upload vidéos (drag & drop, progress bar)
- Versionning (historique modifications)
- Workflow publication (Brouillon → Publié)

#### 6.2.3 Correction Devoirs
- Queue devoirs en attente (countdown depuis submission)
- Visualiseur fichier (PDF, Word preview)
- Zone notation (score + commentaire riche text)
- Actions: Accepter, Rejeter, Demander modification
- Historique corrections (audit trail)

#### 6.2.4 Création Quizz
- Constructeur questions intuitif
- Drag-drop pour réordonner
- Prévisualisation quizz
- Paramètres: Temps limite, feedback, randomization
- Import/export questions (CSV)

#### 6.2.5 Analytics Formateur
- Graphiques: Progression apprenant (line chart)
- Taux réussite (bar chart)
- Temps moyen dépensé (heatmap week)
- Difficultés questions (word cloud erreurs)
- Export reports (PDF/Excel)

### 6.3 Dashboard Admin

#### 6.3.1 Vue Principale
- KPIs globaux: Nb utilisateurs, CA, taux complétion
- Graphique revenus (line chart par mois)
- Alertes système (db size, disque, erreurs)

#### 6.3.2 Gestion Utilisateurs
- Tableau apprenants/formateurs/admins (filtrage, recherche)
- CRUD utilisateurs (activation, reset mdp)
- Bulk import (CSV)
- Logs activité par utilisateur

#### 6.3.3 Gestion Domaines
- Tableau domaines (actif, archivé)
- Édition domaine (nom, description, prix, durée)
- Attribution formateurs (multi-select)
- Monitoring: nb étudiants, progression moyenne

#### 6.3.4 Gestion Financière
- Tableau paiements (statut, montant, date)
- Codes promo (CRUD, usage tracking)
- Exports factures
- Rapports CA (par domaine, par période)

#### 6.3.5 Configuration Système
- Branding: Logo, couleurs, nom site
- Email: SMTP config, test envoi
- Intégrations: Stripe keys, Zoom credentials
- Stockage: Limite fichiers, nettoyage anciens
- Logs: Audit trail, erreurs système

### 6.4 Design & Accessibilité

**Design System:**
- **Palette:** Couleurs Xam Xam Elite (noir, or, blanc) + couleurs accentuées
- **Typography:** Font body (sans-serif), font heading (serif style Cormorant)
- **Spacing:** Scale 8px (8, 16, 24, 32, 40...)
- **Composants:** Buttons, inputs, modals, cards, toasts, modals

**Accessibilité:**
- WCAG 2.1 AA compliance
- Alt text images
- ARIA labels interactifs
- Keyboard navigation (tab, enter, escape)
- Focus visible
- Contrast ratio ≥ 4.5:1

**Responsive:**
- Mobile first approach
- Breakpoints: 320px, 640px, 1024px, 1440px
- Touch-friendly (buttons min 48x48px)

---

## 7. SPÉCIFICATIONS BACKEND

### 7.1 API REST Endpoints

#### 7.1.1 Authentification
```
POST   /api/auth/register        - Inscription apprenant
POST   /api/auth/login            - Login (retourne JWT)
POST   /api/auth/refresh-token    - Refresh token expiré
POST   /api/auth/logout           - Logout (invalidate session)
POST   /api/auth/forgot-password  - Demande reset
POST   /api/auth/reset-password   - Reset mot de passe
POST   /api/auth/verify-email     - Vérifier email
GET    /api/auth/me               - Infos utilisateur courant
```

#### 7.1.2 Utilisateurs
```
GET    /api/users/:id             - Profil utilisateur
PATCH  /api/users/:id             - Mettre à jour profil
PUT    /api/users/:id/avatar      - Upload avatar
DELETE /api/users/:id             - Supprimer compte

-- Admin only --
GET    /api/admin/users           - Liste utilisateurs (pagination, filtrage)
POST   /api/admin/users           - Créer utilisateur
PATCH  /api/admin/users/:id       - Modifier utilisateur
DELETE /api/admin/users/:id       - Supprimer utilisateur (soft delete)
POST   /api/admin/users/bulk-import - Import CSV
```

#### 7.1.3 Domaines de Formation
```
GET    /api/domains               - Liste domaines (public, avec filtres)
GET    /api/domains/:id           - Détail domaine
GET    /api/domains/:id/courses   - Modules d'un domaine

-- Formateur --
POST   /api/domains/:id/courses   - Créer module
PATCH  /api/domains/:id/courses/:courseId - Modifier module
DELETE /api/domains/:id/courses/:courseId - Supprimer module

-- Admin --
POST   /api/admin/domains         - Créer domaine
PATCH  /api/admin/domains/:id     - Modifier domaine
DELETE /api/admin/domains/:id     - Supprimer domaine
```

#### 7.1.4 Inscriptions (Enrollments)
```
POST   /api/enrollments           - S'inscrire (création enrollment + paiement)
GET    /api/enrollments/:id       - Détail inscription
GET    /api/users/:id/enrollments - Mes inscriptions
PATCH  /api/enrollments/:id       - Modifier (annuler, suspendre)

GET    /api/admin/enrollments     - Toutes inscriptions (admin)
```

#### 7.1.5 Leçons & Contenu
```
GET    /api/courses/:courseId/lessons - Leçons d'un module
GET    /api/lessons/:id           - Détail leçon
POST   /api/lessons/:id/view      - Marquer leçon visionnée
GET    /api/lessons/:id/attachments - Ressources téléchargement

-- Formateur --
POST   /api/courses/:courseId/lessons - Créer leçon
PATCH  /api/lessons/:id           - Modifier leçon
DELETE /api/lessons/:id           - Supprimer leçon
POST   /api/lessons/:id/video     - Upload vidéo
```

#### 7.1.6 Quizz & Questions
```
GET    /api/quizzes/:id           - Détail quizz
POST   /api/quizzes/:id/start     - Démarrer quizz (retourne questions)
POST   /api/quizzes/:id/submit    - Soumettre réponses (scoring auto)
GET    /api/users/:id/quiz-results - Historique quizz utilisateur

-- Formateur --
POST   /api/courses/:courseId/quizzes - Créer quizz
PATCH  /api/quizzes/:id           - Modifier quizz
DELETE /api/quizzes/:id           - Supprimer quizz
POST   /api/quizzes/:id/questions - Ajouter question
PATCH  /api/questions/:id         - Modifier question
DELETE /api/questions/:id         - Supprimer question
```

#### 7.1.7 Devoirs & Submissions
```
GET    /api/lessons/:id/submissions - Historique submission
POST   /api/lessons/:id/submit    - Soumettre devoir
GET    /api/submissions/:id       - Détail submission

-- Formateur --
GET    /api/courses/:courseId/submissions - Tous devoirs (queue)
PATCH  /api/submissions/:id       - Corriger (score + feedback)
DELETE /api/submissions/:id       - Supprimer submission
```

#### 7.1.8 Progression
```
GET    /api/users/:id/progress    - Progression utilisateur (par domaine)
GET    /api/users/:id/progress/:courseId - Progression module
POST   /api/progress/:id/mark-complete - Marquer leçon complétée
```

#### 7.1.9 Certificats
```
GET    /api/certificates          - Mes certificats
GET    /api/certificates/:id      - Télécharger certificat (PDF)
POST   /api/certificates/verify/:token - Vérifier certificat (public)
GET    /api/certificates/:id/shared - Partage certificat

-- Admin --
DELETE /api/admin/certificates/:id - Révoquer certificat
```

#### 7.1.10 Forums
```
GET    /api/forums/posts          - Liste posts (filtrage, pagination)
GET    /api/forums/posts/:id      - Détail post + replies
POST   /api/forums/posts          - Créer post
PATCH  /api/forums/posts/:id      - Modifier post
DELETE /api/forums/posts/:id      - Supprimer post

POST   /api/forums/posts/:id/replies - Ajouter réponse
PATCH  /api/forums/replies/:id    - Modifier réponse
DELETE /api/forums/replies/:id    - Supprimer réponse

POST   /api/forums/replies/:id/upvote - Like réponse
POST   /api/forums/replies/:id/mark-solution - Marquer comme réponse
```

#### 7.1.11 Chat & Messaging
```
GET    /api/messages              - Conversations apprenant
GET    /api/messages/:conversationId - Historique conversation
POST   /api/messages              - Envoyer message
POST   /api/messages/:id/read     - Marquer comme lu

GET    /api/messages/unread/count - Nb non-lus
```

#### 7.1.12 Paiements
```
POST   /api/payments/initiate     - Créer session Stripe/Wave/Payteck
GET    /api/payments/:id          - Statut paiement
GET    /api/payments/webhook      - Webhook paiement (privé, source=Stripe)

-- Admin --
GET    /api/admin/payments        - Tous paiements (exports, reports)
POST   /api/admin/payments/:id/refund - Rembourser
```

#### 7.1.13 Analytics
```
-- Formateur --
GET    /api/analytics/progress    - Progression apprenants
GET    /api/analytics/quizz       - Statistiques quizz
GET    /api/analytics/completion  - Taux complétion
GET    /api/analytics/export      - Export PDF/Excel

-- Admin --
GET    /api/admin/analytics/dashboard - KPIs globaux
GET    /api/admin/analytics/revenue  - Revenus (par period)
GET    /api/admin/analytics/users    - Growth utilisateurs
```

#### 7.1.14 Notifications
```
GET    /api/notifications         - Apprenants notifications
POST   /api/notifications/:id/read - Marquer comme lu
DELETE /api/notifications/:id     - Supprimer notification

WebSocket: /socket.io             - Real-time notifications
```

### 7.2 Authentification & Autorisation

**JWT Token:**
```json
{
  "sub": "user_id",
  "email": "apprenant@example.com",
  "role": "APPRENANT",
  "iat": 1234567890,
  "exp": 1234567890 + 7 * 24 * 60 * 60
}
```

**Refresh Token:** Stocké en httpOnly cookie, retour dans body

**Rôles & Permissions:**
- `ADMIN`: Accès total système
- `FORMATEUR`: Gestion contenu domaine assigné, correction devoirs
- `APPRENANT`: Consultation formation, soumission devoirs, forums

**Guard NestJS:**
```typescript
@UseGuards(AuthGuard('jwt'))
@Roles('APPRENANT', 'FORMATEUR')
async getCourses() { ... }
```

### 7.3 Validation & Erreurs

**Global Exception Filter:**
```typescript
@Catch(Exception)
catch(exception: Exception) {
  return {
    statusCode: 400,
    message: "Validation error",
    errors: { field: "error description" },
    timestamp: new Date()
  };
}
```

**DTO Validation (class-validator):**
```typescript
export class RegisterDto {
  @IsEmail()
  email: string;

  @MinLength(12)
  @Matches(/[A-Z].*[0-9].*[@!#]/)  // Regex force
  password: string;

  @IsPhoneNumber('SN')
  phone: string;
}
```

**HTTP Codes:**
- 200: OK
- 201: Created
- 400: Bad Request (validation)
- 401: Unauthorized (pas authentifié)
- 403: Forbidden (pas autorisé)
- 404: Not Found
- 409: Conflict (email existe déjà)
- 422: Unprocessable Entity
- 500: Internal Server Error

### 7.4 Logging & Monitoring

**Winston Logging:**
```typescript
const logger = new Logger('AppModule');
logger.log('Application started');
logger.error('Database connection failed', error);
logger.debug('Sensitive operation performed');
```

**Levels:** error, warn, info, debug  
**Transports:** Console + File (daily rotation)  
**Metrics Prometheus:** Requêtes/latence/erreurs

### 7.5 Performance & Caching

**Redis Cache:**
- Courses listing: TTL 24h
- User profile: TTL 1h
- Quiz results: TTL 30min

**Database Queries:**
- Eager loading relations (N+1 fix)
- Pagination par défaut (limit 20)
- Indexes sur colonnes filtrées fréquemment

**Compression:**
- Gzip responses (threshold 1KB)
- API responses < 2s (target)

### 7.6 Scheduled Jobs (Bull/RabbitMQ)

```typescript
// Cron jobs
@Cron('0 0 * * *')  // Minuit quotidien
async generateCertificates() {
  // Auto-issue certificats éligibles
}

@Cron('0 9 * * 1')  // Lundi 9h
async sendWeeklyReminders() {
  // Rappels apprenants en retard
}

// Task async
async convertVideoUpload(videoId) {
  // Queue job → workers conversion vidéo
}
```

---

## 8. SÉCURITÉ & AUTHENTIFICATION

### 8.1 Authentification

**Méthodes:**
1. **Email/Mot de passe:**
   - Hash bcrypt ($2b$12$) + salt
   - Password policy: min 12 chars, 1 majuscule, 1 chiffre, 1 spécial
   - Pas storage plaintext jamais

2. **JWT (Json Web Tokens):**
   - Signature HS256 ou RS256
   - Access token: 1 jour
   - Refresh token: 7 jours (httpOnly cookie)
   - Révocation liste noire (Redis)

3. **MFA (Multi-Factor Auth) - Phase 2:**
   - TOTP (Google Authenticator)
   - Email one-time code

### 8.2 Autorisation

**RBAC (Role-Based Access Control):**
- 3 rôles: ADMIN, FORMATEUR, APPRENANT
- Permissions granulaires (ex: "edit_own_courses")
- Guards NestJS pour endpoints sensibles

**Ownership Checks:**
```typescript
// Apprenant ne peut éditer que son profil
if (req.user.id !== user.id && req.user.role !== 'ADMIN') {
  throw new ForbiddenException();
}
```

### 8.3 OWASP Top 10

**1. Injection (SQL, NoSQL, Command):**
- ORM TypeORM (parameterized queries)
- Input validation DTO
- Sanitization contenu utilisateur

**2. Broken Authentication:**
- JWT sécurisés (HS256 + bon secret)
- Refresh token rotation
- Session timeout
- Pas de credentials en logs

**3. Sensitive Data Exposure:**
- HTTPS/TLS obligatoire (SSL certificate Letsencrypt)
- Pas mdp en emails
- Chiffrement données sensibles (passwords hashed)
- CORS restrictif

**4. XML External Entities (XXE):**
- Pas parsing XML externe
- Upload fichiers: validation type MIME

**5. Broken Access Control:**
- Authorization checks tous endpoints
- Principle least privilege
- Tests d'accès croisé (user A ≠ accès user B data)

**6. Security Misconfiguration:**
- Config par environment (dev ≠ prod)
- Headers sécurité (helmet.js):
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - Strict-Transport-Security
- CORS: Whitelist domaines

**7. XSS (Cross-Site Scripting):**
- Sanitization input HTML (DOMPurify)
- Angular escape interpolation auto `{{ variable }}`
- CSP headers

**8. CSRF (Cross-Site Request Forgery):**
- CSRF tokens dans forms
- SameSite=Strict cookies

**9. Using Components with Known Vulnerabilities:**
- Dependencies audit régulière `npm audit`
- Updates sécurité prioritaires
- SNYK monitoring

**10. Insufficient Logging & Monitoring:**
- Audit trail: Qui, Quoi, Quand, Où
- Alertes anomalies (n échecs login failed)
- Pas logging données sensibles

### 8.4 Données Personnelles & RGPD

**Respect confidentialité:**
- Consentement avant collecte données
- Droit à l'oubli (soft delete + anonymisation)
- Exportabilité données (format JSON)
- Politique confidentialité claire
- DPI: Deletion on demand

### 8.5 Chiffrement

**SSL/TLS:**
- HTTPS partout (HTTP → HTTPS redirect)
- Certificate: Letsencrypt (auto-renew)

**Données en repos (optionnel Phase 2):**
- Files: AES-256 chiffrement
- Passwords déjà hashed

### 8.6 Rate Limiting

```typescript
@UseGuards(ThrottleGuard)
@Throttle(5, 60)  // 5 requêtes par 60s
async login() { ... }
```

- Login: 5 tentatives/minute
- API public: 100 req/heure par IP
- Exponential backoff après limite

---

## 9. INTÉGRATIONS EXTERNES

### 9.1 Paiements en Ligne

**Stripe (Principal):**
- Intégration checkout session
- Webhook paiement réussi → création enrollment
- Gestion remboursements (refund API)

**Wave (Sénégal):**
- API Wave Mobile Money
- Fallback si Stripe unavailable

**Payteck (Alternative):**
- Carte bancaire + mobile money

**Flow:**
```
Apprenant → Formulaire inscription → Choix domaine + paiement
         → Stripe checkout session
         → Redirection vers gateway Stripe
         → Après paiement → Webhook `/api/payments/webhook`
         → Création enrollment + envoi email confirmation
```

### 9.2 Emails

**SendGrid ou Brevo (Sendinblue):**
- Templates emails transactionnels
- Tracking opens/clicks
- Unsubscribe management

**Templates:**
- Welcome email (post-inscription)
- Confirmation inscription
- Reset mot de passe
- Rappel deadline (cron)
- Certificat prêt (notification)
- Session live scheduled (48h avant)
- Newsletter hebdomadaire (opt-in)

### 9.3 Vidéoconférences

**Jitsi Meet (Self-hosted ou cloud):**
- Webinaires/sessions live
- Enregistrement auto
- Screen sharing
- Chat intégré

**Zoom (Alternative):**
- Zoom API pour créer meeting
- Webhook meeting ended
- Recording disponible après

**Flow Webinaire:**
```
Formateur crée session → Scheduling system
Apprenant voit calendrier → Lien Jitsi à h-5min
Session démarre → Recording active
Post-session → Lien replay disponible dans app
```

### 9.4 Stockage Fichiers (CDN)

**Local (MVP):**
- `/uploads` symlink nginx
- Backups nightly S3

**Production:**
- AWS S3 ou MinIO (self-hosted)
- CloudFront CDN (cache 24h)
- Lifecycle policy: Delete après 90 jours

### 9.5 Analytics

**Google Analytics 4:**
- Tracking page views, events
- Conversion: Inscription complétée
- Cohort: Par domaine de formation

**Plausible Analytics (Alternative):**
- Privacy-first, pas de cookies
- Simple, sans troisiè partie

### 9.6 Notifications Push

**Firebase Cloud Messaging (FCM):**
- Notifications desktop (opt-in)
- Deep links apprenant vers cours

### 9.7 Webhooks Externes

**Tracking paiements:**
```
Stripe → POST /api/webhooks/stripe
Wave → POST /api/webhooks/wave
```

---

## 10. PLAN DE DÉVELOPPEMENT

### 10.1 Phases Projet

#### **PHASE 0: PRÉPARATION (2 semaines)**
- [ ] Setup environnement dev (Node, Postgres, Redis)
- [ ] Initialisation repos Git (Frontend + Backend)
- [ ] Architecture files/folders
- [ ] Mise en place CI/CD (GitHub Actions)
- [ ] Configuration ESLint + Prettier (formattage code)

#### **PHASE 1: FONDATIONS (6 semaines)**

**Backend NestJS:**
- [ ] Structure modules (auth, users, domains, courses)
- [ ] Database setup (PostgreSQL) + migrations
- [ ] ORM TypeORM entities mapping
- [ ] Auth endpoints (register, login, JWT)
- [ ] User CRUD
- [ ] Validation DTOs
- [ ] Logging setup (Winston)
- [ ] Error handling global
- [ ] API documentation (Swagger)
- [ ] Authentification sécurisée (bcrypt, JWT)

**Frontend Angular:**
- [ ] Scaffolding project (routing, modules)
- [ ] Layout principal (nav, sidebar, content)
- [ ] Home/Landing page
- [ ] Auth pages (login, register, forgot-password)
- [ ] HTTP interceptors (JWT auth, error handling)
- [ ] Store NgRx setup (users, auth state)
- [ ] Responsive design (Tailwind + Material)
- [ ] Theming (light/dark modes)

#### **PHASE 2: CONTENU PÉDAGOGIQUE (8 semaines)**

**Backend:**
- [ ] Entities Courses/Lessons/Quizzes
- [ ] CRUD endpoints courses/lessons
- [ ] Quizz engine (question management, scoring)
- [ ] Progress tracking
- [ ] Upload fichiers (local ou S3)
- [ ] Video encoding (optional FFmpeg)

**Frontend:**
- [ ] Dashboard apprenant
- [ ] Leçons player (video + article)
- [ ] Quizz interface (questions display, timer)
- [ ] Progress visualization (timeline, percentage)
- [ ] Devoir upload interface
- [ ] Forum de discussion

#### **PHASE 3: ÉVALUATIONS & CERTIFICATS (6 semaines)**

**Backend:**
- [ ] Submission management (devoirs)
- [ ] Notation système (auto-quizz, manual devoirs)
- [ ] Certificate generation (PDF signed)
- [ ] Verification token management
- [ ] Analytics queries

**Frontend:**
- [ ] Soumission devoirs
- [ ] Historique scores/notes
- [ ] Certificats gallery + téléchargement
- [ ] Share certificat (social media)
- [ ] Analytics dashboard (apprenant view)

#### **PHASE 4: PAIEMENTS & ADMINISTRATION (4 semaines)**

**Backend:**
- [ ] Stripe integration (checkout sessions)
- [ ] Webhook handling paiements
- [ ] Payment status tracking
- [ ] Enrollment + payment linking
- [ ] Admin endpoints (users, domains, analytics)
- [ ] Reports generation (PDF/Excel)

**Frontend:**
- [ ] Payment form (Stripe Elements)
- [ ] Admin dashboard
- [ ] User management tables
- [ ] Domain configuration
- [ ] Analytics dashboards (revenue, users)

#### **PHASE 5: COMMUNICATION EN TEMPS RÉEL (4 semaines)**

**Backend:**
- [ ] WebSocket server (Socket.io)
- [ ] Chat messages storage + retrieval
- [ ] Notification system
- [ ] Forum real-time updates

**Frontend:**
- [ ] Chat interface
- [ ] Notification center
- [ ] Live forum (refresh real-time)
- [ ] Typing indicators

#### **PHASE 6: FORMATEURS & MONITORING (4 semaines)**

**Backend:**
- [ ] Formateur analytics endpoints
- [ ] Content publishing workflow
- [ ] Moderation tools (delete comments, block users)
- [ ] Email notifications (cron jobs)

**Frontend:**
- [ ] Formateur dashboard
- [ ] Content management interface
- [ ] Correction devoirs panel
- [ ] Analytics charts (formateur view)
- [ ] Webinaire scheduling

#### **PHASE 7: TESTS & QA (6 semaines)**
- [ ] Unit tests (80%+ coverage)
- [ ] Integration tests
- [ ] E2E tests (Cypress/Playwright)
- [ ] Performance testing
- [ ] Security audit
- [ ] UAT (User Acceptance Testing)
- [ ] Bug fixes

#### **PHASE 8: DÉPLOIEMENT & PRODUCTION (3 semaines)**
- [ ] Environnement production setup
- [ ] Database migrations prod
- [ ] SSL certificate setup
- [ ] Monitoring/alerting setup
- [ ] Backup strategy
- [ ] Launch !

### 10.2 Timeline Globale

| Phase | Durée | Fin Estimée |
|-------|-------|-------------|
| Phase 0 | 2 sem | Fin avril 2026 |
| Phase 1 | 6 sem | Mi-juin 2026 |
| Phase 2 | 8 sem | Fin juillet 2026 |
| Phase 3 | 6 sem | Mi-septembre 2026 |
| Phase 4 | 4 sem | Mi-octobre 2026 |
| Phase 5 | 4 sem | Mi-novembre 2026 |
| Phase 6 | 4 sem | Mi-décembre 2026 |
| Phase 7 | 6 sem | Fin janvier 2027 |
| Phase 8 | 3 sem | **Mi-février 2027** |

**Total: ~43 semaines ≈ 10 mois développement**

### 10.3 Ressources Équipe

**Équipe Recommandée:**
- **1 Chef de Projet** (pilotage)
- **2 Développeurs Backend NestJS** (1 senior, 1 junior)
- **2 Développeurs Frontend Angular** (1 senior, 1 junior)
- **1 DevOps/Infra** (part-time)
- **1 QA/Testeur** (part-time)
- **1 Designer UX/UI** (part-time, surtout Phase 1)

**Total: ~6 FTE (Full-Time Equivalents)**

---

## 11. TESTS & QA

### 11.1 Stratégie de Tests

**Pyramide Tests:**
```
           /\
          /  \ E2E (5%)
         /____\
        /      \
       / Intg   \ Integration (15%)
      /________\
     /          \
    / Unit Tests \ Unit (80%)
   /____________\
```

### 11.2 Unit Tests

**Backend (Jest):**
- Couverture: 80% minimum
- Services (logique métier)
- DTOs validation
- Guards & interceptors

```typescript
describe('AuthService', () => {
  it('should register user', async () => {
    const result = await authService.register(registerDto);
    expect(result.email).toBe(registerDto.email);
  });
});
```

**Frontend (Jasmine):**
- Services (HTTP calls, business logic)
- Pipes (data transformation)
- Guards (routing authorization)

### 11.3 Integration Tests

**Backend:**
- API endpoints (santé globale)
- Database transactions (rollback errors)
- External services (Stripe mock)

```typescript
describe('Auth Endpoints', () => {
  it('POST /auth/register should create user', async () => {
    const res = await request(app.getHttpServer())
      .post('/auth/register')
      .send(registerDto)
      .expect(201);
  });
});
```

**Frontend:**
- Module interactions (navigation, state)
- API integration (HTTP + error handling)

### 11.4 E2E Tests (Cypress/Playwright)

**Scénarios critiques:**
- [ ] Inscription apprenant complète
- [ ] Login + access protected routes
- [ ] Consultation cours + quizz
- [ ] Soumission devoir + correction
- [ ] Paiement (Stripe test mode)
- [ ] Admin user management
- [ ] Certificat generation

```javascript
describe('E2E: User Journey', () => {
  it('complete registration and start course', () => {
    cy.visit('/');
    cy.contains('S\'inscrire').click();
    cy.get('input[name="email"]').type('user@example.com');
    // ... more steps
  });
});
```

### 11.5 Performance Tests

**Lighthouse:**
- Performance ≥ 90
- Accessibility ≥ 95
- Best Practices ≥ 90
- SEO ≥ 90

**Load Testing (k6/JMeter):**
- API: 1000 utilisateurs concurrent → response < 500ms
- Database queries: < 100ms

### 11.6 Security Tests

**OWASP Top 10 Validation:**
- [ ] SQL Injection tests
- [ ] XSS payload tests
- [ ] CSRF protection
- [ ] Authentication bypass attempts
- [ ] Authorization (access control)

**Automated scanning:**
- npm audit (dependencies)
- SNYK scanning (code)
- Burp Suite (web security)

### 11.7 QA Checklist

**Avant Release:**
- [ ] All tests passing (100% coverage critical paths)
- [ ] No console errors/warnings
- [ ] Responsive design checked (mobile/tablet/desktop)
- [ ] Forms validation working
- [ ] Offline mode graceful fallback
- [ ] Accessibility tests (WAVE, axe)
- [ ] Performance baseline met
- [ ] Security audit passed
- [ ] Documentation updated

---

## 12. DÉPLOIEMENT & MAINTENANCE

### 12.1 Environnements

**DEV (Local):**
- Docker Compose (PostgreSQL, Redis, Backend, Frontend)
- Hot reload (ng serve, npm run start:dev)

**STAGING:**
- Cloud VM ou container (AWS EC2, DigitalOcean, etc.)
- Database replica prod
- Testing complet avant prod

**PRODUCTION:**
- Load-balanced API servers
- Managed Database (AWS RDS, Digital Ocean, etc.)
- CDN (CloudFlare)
- Auto-scaling capabilities

### 12.2 Infrastructure & Devops

**Containerization:**
```dockerfile
# Backend
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
EXPOSE 3000
CMD ["node", "dist/main"]
```

```dockerfile
# Frontend (Nginx)
FROM node:20-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/e-learning /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Docker Compose (DEV):**
```yaml
version: '3.8'
services:
  backend:
    build: ./backend
    ports: [3000:3000]
    environment:
      DATABASE_URL: postgresql://user:pass@db:5432/elearning
      REDIS_URL: redis://cache:6379
    depends_on: [db, cache]
  
  frontend:
    build: ./frontend
    ports: [4200:4200]
    command: ng serve --host 0.0.0.0
  
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
      POSTGRES_DB: elearning
    volumes: [db_data:/var/lib/postgresql/data]
  
  cache:
    image: redis:7-alpine
    ports: [6379:6379]

volumes:
  db_data:
```

**CI/CD Pipeline (GitHub Actions):**
```yaml
name: CI/CD
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: { node-version: '20' }
      - run: npm ci && npm run test && npm run build
      
  deploy:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to production
        env:
          DEPLOY_KEY: ${{ secrets.DEPLOY_KEY }}
        run: |
          ssh -i $DEPLOY_KEY user@prod-server 'cd /app && git pull && docker-compose up -d'
```

### 12.3 Deployment Process

**Versioning Semantique:**
- v1.0.0 = MAJOR.MINOR.PATCH (CalVer: 2027.02.1)

**Release Checklist:**
- [ ] Merge PR vers main
- [ ] Bump version (package.json)
- [ ] Create git tag (v1.0.0)
- [ ] GitHub Actions buid + tests
- [ ] Manual approval staging
- [ ] Staging UAT (2-3 jours)
- [ ] Approval production
- [ ] Auto-deploy prod
- [ ] Smoke tests post-deploy
- [ ] Monitoring alerts setup

**Rollback Strategy:**
- Keep previous version tagged
- Database migrations: Reversible
- Blue-green deployment (2 envs, switch traffic)

### 12.4 Monitoring & Observabilité

**Application Monitoring:**
- New Relic ou DataDog (APM)
- Metrics: Request latency, error rates, CPU, memory
- Logs: Centralized (ELK stack ou CloudWatch)
- Alerts: Slack channel pour anomalies

**Uptime Monitoring:**
- Uptime Robot (external health checks)
- Target: 99.5% uptime SLA

**Real User Monitoring (RUM):**
- Sentry (error tracking)
- Honeycomb (tracing distribué)

### 12.5 Backups & Disaster Recovery

**Database Backups:**
- Automatique daily, retention 30 jours
- Hébergement: AWS S3 + versioning
- Restore test mensuel

**File Uploads Backups:**
- S3 replication (cross-region)
- Lifecycle policy: Archive après 90 jours

**RTO/RPO Targets:**
- RTO (Recovery Time Objective): 4 heures
- RPO (Recovery Point Objective): 1 jour

### 12.6 Maintenance & Support

**Updates Régulières:**
- Security patches: ASAP (< 24h)
- Minor updates: Monthly
- Major updates: Quarterly (avec UAT)

**Support Users:**
- Support email: support@xamxamelite.sn
- Ticketing system intégré
- Response time: < 4h (weekdays)
- SLA: 99% tickets résolus 48h

**Maintenance Windows:**
- Jeudi 22h-23h (maintenance window)
- Maintenance mode page affichée
- Notification email 24h avant

---

## 13. GLOSSAIRE & RÉFÉRENCES

### Acronymes
- **JWT:** Json Web Tokens
- **MFA:** Multi-Factor Authentication
- **OWASP:** Open Web Application Security Project
- **RGPD:** Règlement Général Protection Données
- **TTL:** Time To Live (cache expiry)
- **RTO/RPO:** Recovery Time/Point Objective
- **SLA:** Service Level Agreement
- **UAT:** User Acceptance Testing
- **CDN:** Content Delivery Network

### Outils & Technos Clés
- **NestJS:** Framework Node backend
- **Angular 17+:** Framework frontend
- **PostgreSQL 15:** Relational database
- **Redis:** Cache & session store
- **Docker:** Containerization
- **GitHub Actions:** CI/CD
- **Stripe:** Payments gateway
- **Jitsi:** Videoconferencing
- **SendGrid/Brevo:** Email service
- **Sentry:** Error tracking

### Liens Ressources
- [NestJS Documentation](https://docs.nestjs.com)
- [Angular Documentation](https://angular.io/docs)
- [PostgreSQL Documentation](https://www.postgresql.org/docs)
- [OWASP Top 10](https://owasp.org/www-project-top-ten)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [TypeORM Documentation](https://typeorm.io)

---

## 14. ANNEXES

### Annexe A: Wireframes Key Pages

_(À générer avec Figma/Adobe XD - Placeholder)_

- Landing page
- Registration flow
- Dashboard apprenant
- Course player
- Admin panel
- Formateur dashboard

### Annexe B: Données de Test (Seeding)

```typescript
// seed.ts
export async function seed(dataSource: DataSource) {
  // 20 domaines de formation
  // 100 apprenants test
  // 50 formateurs
  // Contenus pédagogiques (modules, leçons, quizzes)
  // Enrollments avec progressions variées
}
```

### Annexe C: Configuration d'Intégrations

**Stripe Keys:**
```
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

**SendGrid:**
```
SENDGRID_API_KEY=SG...
SENDGRID_FROM_EMAIL=noreply@xamxamelite.sn
```

### Annexe D: Scripts Utiles

```bash
# Setup dev environment
npm install
docker-compose up -d

# Run migrations
npm run typeorm migration:run

# Generate TypeORM entity from DB
npm run typeorm schema:sync

# Build production
npm run build
npm run start:prod

# Run tests
npm run test
npm run test:cov  # Coverage

# Deploy (staging)
npm run deploy:staging

# Deploy (production)
npm run deploy:prod
```

---

## RÉSUMÉ EXÉCUTIF

La plateforme e-learning XAM XAM Elite est un projet d'envergure moyen-grande (~10 mois dev) permettant :

✅ **Digitalization** complète formations 6 mois  
✅ **Contenu riche:** 20+ domaines, videos, quizzes, devoirs  
✅ **Engagement:** Forums, chat, webinaires live  
✅ **Suivi:** Analytics apprenants, formateurs, admins  
✅ **Monétization:** Gestion paiements Stripe/Wave  
✅ **Certification:** Certificats numériques signés  

**Stack:** NestJS + Angular + PostgreSQL + Redis  
**Équipe:** 6 FTE, deadline février 2027  
**Coûts Infra annuels:** ~5,000-10,000$ (AWS/Digital Ocean)  

---

**Document Finalisé:** Avril 2026  
**Prochaine Review:** Fin Phase 1 (Juin 2026)
