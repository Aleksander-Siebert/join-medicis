# Join Médicis — Brief complet V0
> Document de référence pour la conception et le développement du site  
> Préparé par : Aleksander Siebert · Mai 2025

---

## Table des matières

1. [C'est quoi Join Médicis ?](#1-cest-quoi-join-médicis-)
2. [La référence principale](#2-la-référence-principale)
3. [Identité visuelle & brand](#3-identité-visuelle--brand)
4. [Structure du site — toutes les pages](#4-structure-du-site--toutes-les-pages)
5. [La fonctionnalité principale : les Skills](#5-la-fonctionnalité-principale--les-skills)
6. [Scope V0 vs versions futures](#6-scope-v0-vs-versions-futures)
7. [Stack technique recommandée](#7-stack-technique-recommandée)
8. [Ce qui doit être fonctionnel en V0](#8-ce-qui-doit-être-fonctionnel-en-v0)

---

## 1. C'est quoi Join Médicis ?

**Tagline :** *La bibliothèque open-source de l'IA & de l'automatisation pour les Growth & Digital Marketers*

**CTA principal :** `Join the new Renaissance`

### Le concept en une phrase
Join Médicis est une bibliothèque en ligne gratuite et open-source qui regroupe des **Skills IA** (fichiers `.md`), des **templates d'automatisation** (n8n, Make, Zapier), des **configurations MCP** et des **agents IA** — le tout pensé pour les marketeurs français qui veulent industrialiser leur usage de l'IA **sans compétences techniques**.

### Le problème qu'on résout
83% des marketeurs français utilisent l'IA, mais seulement 17% l'ont vraiment intégrée dans leurs workflows. Les ressources existantes sont soit trop techniques (GitHub brut), soit trop généralistes (forums), soit exclusivement en anglais. **Join Médicis comble ce vide.**

### La proposition de valeur
Chaque ressource sur Join Médicis est :
- **Testée** avant publication (avec un vrai résultat mesurable)
- **Documentée** de façon claire et actionnables
- **Déployable en moins de 5 minutes** — sans terminal, sans clé API exposée, sans être développeur

### La vision à 18 mois
Devenir **la référence francophone** sur l'intersection Growth Marketing × IA, avec 50+ ressources publiées et une communauté active de contributeurs.

---

## 2. La référence principale

### Site à reproduire comme inspiration : [lawve.ai/fr](https://lawve.ai/fr)

Lawvable est exactement le modèle sur lequel Join Médicis se base, appliqué au droit. C'est une bibliothèque de Skills Claude pour avocats, avec une page de listing + des pages de détail par Skill très complètes.

**Ce qu'on reprend de Lawvable :**
- Le concept de "bibliothèque de Skills testés avec une fiche détaillée par Skill"
- La structure de la page Skill : auteur + tags + métriques + téléchargement + onglets
- La page exemple à regarder impérativement : [lawve.ai/fr/skills/persuasive-legal-writing-larissa-meredith-flister](https://lawve.ai/fr/skills/persuasive-legal-writing-larissa-meredith-flister)

**Ce qu'on fait différemment :**
- Notre cible = Growth Marketers (pas juristes)
- On ajoute un dossier `references/` avec des vrais documents sources que Claude lit activement (différenciateur éditorial clé)
- On a plusieurs types de ressources (pas que des Skills) : MCP, Automations, Agents, Écosystème

**Autre inspiration visuelle (style) :** [solomei.ai](https://solomei.ai) — regarder l'esthétique épurée avec illustrations de statues classiques en esquisse (image jointe dans le dossier)

---

## 3. Identité visuelle & brand

### Palette de couleurs

| Rôle | Couleur | Hex |
|------|---------|-----|
| Primaire | Deep Nordic Green | `#2D6A4F` ou `#1B4332` |
| Fond principal | Off-white / warm white | `#F8F9FA` |
| Accent / tags / hover | Light sage green | `#74C69D` |
| Titres | Near-black | `#1A1A2E` |
| Corps de texte | Dark grey | `#4A4A4A` |

### Typographie

- **Titres / headlines :** Playfair Display (serif, élégant, touche renaissance) — ou DM Serif Display
- **Corps / UI :** DM Sans (clean, lisible, moderne)
- **Code / fichiers :** DM Mono

> Ces deux fonts sont disponibles gratuitement sur Google Fonts.

### Ton général & style
- **Sérieux, fiable, moderne** — l'identité d'un vrai média de référence, pas d'une landing page startup
- **Touche renaissance :** petits éléments décoratifs (ornements SVG, diviseurs classiques, typo serif pour les titres), sans que ça devienne kitch. S'inspirer de l'image de Solomei AI : illustration de statue en esquisse légère dans le hero, grande typo, beaucoup d'espace blanc
- **Contenu et labels UI en anglais** (même si les Skills eux-mêmes seront en français)

---

## 4. Structure du site — toutes les pages

### Barre de navigation

```
[Logo : Join Médicis]  [🔍 Barre de recherche]  [Skills] [Resources ▾] [Blog] [Authors] [About]  [Join the Renaissance →]
```

**Dropdown "Resources" :**
- 🌍 Ecosystem
- 🔌 MCP
- 🧩 Plugins *(bientôt)*
- ⚡ Automations *(V2)*
- 🤖 AI Agents *(V3)*
- 📖 Documentation

---

### Pages à créer

#### Pages principales (navigation)

| Page | URL | Statut V0 |
|------|-----|-----------|
| Homepage | `/` | ✅ Complète |
| Skills (listing) | `/skills` | ✅ Complète |
| Skill (détail) | `/skills/[slug]` | ✅ Complète |
| Ecosystem | `/resources/ecosystem` | ✅ Complète |
| MCP | `/resources/mcp` | ✅ Complète |
| Plugins | `/resources/plugins` | 🔄 Page "en cours de développement" |
| Automations | `/resources/automations` | 🔄 Page "en cours de développement" |
| AI Agents | `/resources/agents` | 🔄 Page "en cours de développement" |
| Documentation | `/docs` | ✅ Contenu minimal |
| Blog | `/blog` | ✅ Listing (articles vides ok) |
| Authors | `/authors` | ✅ Complète |
| Author (détail) | `/authors/[slug]` | ✅ Complète |
| About | `/about` | ✅ Complète |

#### Pages secondaires (footer / liens)

| Page | URL | Statut V0 |
|------|-----|-----------|
| Contribuer | `/contribute` | ✅ Complète |
| Demander un Skill | `/request` | ✅ Formulaire simple |
| Contact | `/contact` | ✅ Formulaire simple |
| Mentions légales | `/legal` | ✅ Texte standard |
| Confidentialité | `/privacy` | ✅ Texte standard |

---

### Détail par page

#### Homepage `/`
- **Hero :** Tagline principale, sous-titre, 2 CTA (Explore Skills / Contribute), petite illustration style sketch classique en arrière-plan
- **Stats bar :** 4 chiffres clés (skills publiés, catégories, membres, % gratuit)
- **Catégories :** grille de 6 cards cliquables vers `/skills` filtrée
- **Latest Skills :** 3 skill cards en grille
- **CTA strip dark :** "Join the new Renaissance" en fond vert foncé
- **Footer complet**

#### Skills listing `/skills`
- **Sidebar gauche :** filtres par catégorie + difficulté + LLM compatible
- **Zone principale :** barre de filtres rapides (pills) + grille de skill cards
- **Chaque skill card affiche :** tags, titre, description courte, auteur, badge difficulté, nb de téléchargements

**Catégories de Skills :**
1. SEO & Content
2. Outbound & Prospecting
3. Analytics & Reporting
4. CRO & Conversion
5. Strategy
6. Foundations *(fichiers contexte de base)*

#### Pages "En cours de développement" (Plugins, Automations, Agents)
Afficher simplement :
- Une icône + titre de la section
- Un message clair : *"Cette section est en cours de développement. Disponible dans la V2."*
- Une barre de progression visuelle (ex : 35% pour Automations)
- Un bouton "Get notified" qui pointe vers `/contact`

---

## 5. La fonctionnalité principale : les Skills

### C'est quoi un Skill ?

Un Skill est un **fichier `.md`** contenant un system prompt structuré qui configure Claude (ou un autre LLM) pour exécuter une tâche Growth spécifique. L'utilisateur le télécharge, le colle dans les instructions de Claude.ai, et c'est prêt.

**Exemple de nom de fichier :** `cold-email-b2b-saas-fr.md`

### Structure d'un Skill (anatomy)

Chaque fichier Skill contient :

```yaml
---
name: cold-email-b2b-fr
version: 1.2.0
description: "Write ultra-personalized cold emails for the French B2B market."
category: prospection
difficulty: beginner
llm_compatibility: [claude, chatgpt, gemini, mistral]
time_saved: "2h30 / week"
result_metric: "+34% reply rate"
tested_by: 87
author: aleksander-siebert
---

# Cold Email B2B France

## §0 — Context & Paradigm
[Instructions pour le LLM...]

## §1 — Triggers
[Quand activer ce skill...]

## §2 — Methodology
[Comment travailler...]
```

Et un dossier `references/` avec de vrais documents sources que Claude lit activement (différenciateur éditorial clé de Join Médicis).

---

### La page Skill détail — c'est le cœur du site

**Référence exacte à reproduire :** [lawve.ai/fr/skills/persuasive-legal-writing-larissa-meredith-flister](https://lawve.ai/fr/skills/persuasive-legal-writing-larissa-meredith-flister)

#### Partie haute de la page (header du Skill)

Afficher en permanence, au-dessus des onglets :

- **Titre** du Skill (grand, serif)
- **Auteur** cliquable → fiche auteur
- **Date de publication**
- **Stats** : nombre de vues + nombre de téléchargements
- **Tags** (catégorie, type de tâche, etc.)
- **Résultats mesurés** : ex. `+34% reply rate · -2h30/week · 5 min to deploy · 87 members tested`
- **Boutons :** `⬇ Download .md` / `📦 Download .zip` / `Try Demo →`
- **LLM compatibles :** badges colorés (Claude, GPT-4o, Gemini, Mistral)

#### 3 onglets principaux (+ 1 bonus)

**Onglet 1 — About**
- Description de ce que fait le Skill
- Instructions de déploiement en 4 étapes numérotées
- Encadré "Beginner mode" (aide contextuelle pour les non-techniciens)
- Fiche auteur mini (avatar + nom + rôle + lien vers profil complet)

**Onglet 2 — Content**
- Explorateur de fichiers visuel (style GitHub) montrant : `skill.md` + `references/`
- Bouton de téléchargement sur chaque fichier
- Aperçu du YAML frontmatter (métadonnées)
- Preview du contenu du fichier (les 30 premières lignes)

**Onglet 3 — Demo**
- Zone de texte pré-remplie avec un cas d'usage exemple
- Bouton "Send →"
- Affichage d'un résultat statique (pas besoin d'appel API réel en V0)
- Note en bas : *"Static demo — full sandbox uses your API key → Try it tab"*

**Onglet 4 — Try it** *(bonus, peut être simplifié en V0)*
- Sélecteur de LLM (Claude sélectionné, autres "bientôt")
- Champ pour coller sa clé API
- Note : la clé reste dans le navigateur (sessionStorage), jamais envoyée à nos serveurs

#### En bas de page
- **Skills liés** : grille de 3 cards de Skills de la même catégorie

---

### Page Author (fiche auteur)

**Référence :** [growthtalent.org/talent/jeremy-goillot](https://www.growthtalent.org/talent/jeremy-goillot)

Contient :
- Photo/avatar + nom + rôle + bio
- Liens (LinkedIn, GitHub, site)
- KPIs : nombre de Skills publiés, total téléchargements, vues, note moyenne
- Grille de tous ses Skills publiés

---

## 6. Scope V0 vs versions futures

### V0 — Ce qu'on livre maintenant

- Toutes les pages listées ci-dessus sont **présentes et navigables**
- Les pages Plugins / Automations / Agents affichent un message "en cours de développement"
- **Téléchargement de fichiers `.md` fonctionnel** (priorité absolue)
- Contenu : ~5 Skills de démonstration + 3 guides MCP
- Formulaire de contact simple (peut pointer vers Tally.so)
- Design complet et responsive (desktop + mobile)
- Pas de back-end complexe, pas d'authentification

### V2 — Automations (Mois 3-4)

- Section Automations : 10 workflows n8n / Make / Zapier téléchargeables
- Serveur MCP Cloudflare Workers (membres avancés)
- Sandbox live avec clé API utilisateur

### V3 — Agents IA (Mois 6+)

- Section AI Agents (Claude Managed Agents, LangGraph, CrewAI)
- Membership optionnel (29€/mois) pour accès au serveur MCP exclusif

---

## 7. Stack technique recommandée

| Composant | Technologie | Pourquoi |
|-----------|------------|----------|
| Frontend | **Next.js 14** (App Router) | SSG pour SEO, Vercel natif, React |
| Styling | **Tailwind CSS** | Rapidité, pas de CSS custom à maintenir |
| Contenu | **MDX** (Markdown + JSX) | Composants React dans les fichiers Skill |
| Hosting | **Vercel** | Gratuit, déploiement auto GitHub, CDN mondial |
| Repo | **GitHub** | Open-source, versioning, contributions PR |
| Analytics | **Umami** (self-hosted) | RGPD, sans cookies, gratuit |
| Formulaires | **Tally.so** | Gratuit, intégrations, sans code |
| Domaine | **OVH / Gandi** | Fiabilité, support FR |

> ⚠️ **Important :** Le site doit être statique en V0. Pas de base de données. Les Skills sont des fichiers `.md` dans le repo GitHub, lus au build time.

---

## 8. Ce qui doit être fonctionnel en V0

### Must-have absolus

- [ ] Navigation complète entre toutes les pages
- [ ] **Téléchargement `.md` fonctionnel** sur chaque page Skill
- [ ] Page Skill avec les 3 onglets (About / Content / Demo)
- [ ] Fiche auteur complète avec lien depuis les Skills
- [ ] Pages "Coming Soon" pour Plugins, Automations, Agents
- [ ] Footer avec tous les liens légaux
- [ ] Responsive mobile

### Nice-to-have V0

- [ ] Barre de recherche fonctionnelle (filtre les Skills en JS client)
- [ ] Filtres de la sidebar Skills fonctionnels
- [ ] Dark mode toggle
- [ ] Animation légère au scroll (fade-in des cards)

### Pas pour V0

- [ ] Authentification / comptes utilisateurs
- [ ] Système de notation des Skills
- [ ] Serveur MCP
- [ ] Sandbox live (demo statique suffit)
- [ ] Blog CMS complet (articles statiques ok)

---

## Annexe — Exemples de contenus pour les démos

### Skill de démo : Cold Email B2B France

> **Métriques à afficher sur la fiche :** +34% reply rate · -2h30/semaine · 5 min to deploy · 87 members tested  
> **Tags :** Prospection, B2B, Cold Email, France  
> **Difficulté :** Beginner  
> **LLM :** Claude, GPT-4o, Gemini, Mistral

### Autres Skills à créer pour la démo

| Nom | Catégorie | Difficulté |
|-----|-----------|------------|
| SEO Editorial Brief | SEO & Content | Intermediate |
| Growth Reporting Assistant | Analytics | Advanced |
| Landing Page Audit | CRO | Beginner |
| LinkedIn Outreach Sequence | Outbound | Beginner |
| ICP Analysis Framework | Strategy | Intermediate |

### Guides MCP à créer pour la démo

- Google Search Console MCP (8 min install)
- Notion MCP (5 min install)
- HubSpot MCP (12 min install)

---

*Ce document est un brief vivant — il sera mis à jour à chaque sprint.*  
*Questions ? Contacte Aleksander directement.*
