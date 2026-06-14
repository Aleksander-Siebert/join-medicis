---
title: "Anatomie d'un Skill Claude bien construit"
excerpt: "Frontmatter YAML, sections §0 à §3, dossier references — décortiqué étape par étape, avec les pièges à éviter."
publishedAt: "2026-05-15"
authorSlug: aleksander-siebert
readingTime: "8 min"
tags: [skills, tutoriel, claude]
collection: skills-mcp
---

Un bon Skill Claude n'a rien à voir avec un bon prompt. Là où un prompt est une phrase, un Skill est une **architecture** : il définit une identité, des déclencheurs, une méthodologie et des garde-fous.

Voici la structure qu'on utilise sur tous les Skills publiés sur Join Médicis.

## 1. Le frontmatter YAML

Toujours en tête de fichier, entre deux `---`. Il contient les métadonnées qui permettent au site (et aux humains qui forkent) de comprendre ce que fait le Skill, sans le lire en entier.

```yaml
---
name: cold-email-b2b-fr
version: 1.2.0
description: "Write ultra-personalized cold emails for the French B2B market."
category: prospection
llm_compatibility: [claude, chatgpt, gemini, mistral]
time_saved: "45 min / week"
result_metric: "+34% reply rate"
tested_by: 23
author: jeremy-goillot
license: CC-BY-4.0
---
```

**Le piège classique** : oublier le versioning. Sans `version` (semver), impossible pour les utilisateurs de savoir si tu as fait un patch mineur ou un breaking change.

## 2. §0 — Identité & paradigme

C'est la section la plus importante. Elle définit **qui est Claude** quand il utilise ce Skill.

> Tu es un copywriter B2B francophone spécialisé dans le cold email outbound pour le marché français. Tu maîtrises les codes culturels de la prospection en France : ton respectueux mais direct, pas de bullshit, vouvoiement par défaut.

**Ce qu'il faut éviter** : « Tu es un expert marketing. » Trop vague. Claude n'a pas de prise sur quoi se calibrer.

**Ce qui marche** : un rôle précis + un marché + un style + une posture éthique.

## 3. §1 — Déclenchement

Quand le Skill doit-il s'activer ? La section §1 donne à Claude les signaux à détecter.

```markdown
## §1 — Déclenchement

Active-toi sur toute demande de rédaction d'email à froid à destination
d'un prospect français. Tu prends le relais dès que tu détectes une
intention de prospection commerciale.
```

Sur les Skills « fondation » (comme Growth Context), §1 est souvent absent : le Skill s'applique en permanence.

## 4. §2 — Méthodologie

Le cœur du Skill. Comment Claude doit travailler, étape par étape.

Trois patterns qu'on retrouve souvent :

- **Le workflow en étapes** : « Étape 1 : récolte de contexte. Étape 2 : structuration. Étape 3 : output. »
- **Les axes d'analyse** : pour les audits, lister 8 à 10 axes à examiner systématiquement
- **Les règles d'or** : 5 à 7 règles dures que Claude doit toujours respecter

## 5. §3 — Format de sortie

Spécifie **exactement** la structure attendue. Avec un template formaté si possible.

```markdown
## §3 — Format de sortie

Objet : [objet 4-7 mots]

Bonjour [Prénom],

[Ligne 1 — Personnalisation contextuelle]
[Ligne 2 — Lien avec leur réalité]
[Ligne 3 — Proposition de valeur concrète]
[Question CTA simple]

[Signature]
```

Plus tu es précis, moins Claude improvise.

## 6. §4 — Anti-patterns

Une section sous-utilisée mais cruciale. Liste ce que Claude ne doit **jamais** faire.

```markdown
## §4 — Anti-patterns à éviter

- "J'espère que vous allez bien"
- "Permettez-moi de me présenter"
- "Nous sommes leaders dans..."
- Objet en majuscules ou avec emojis
- Plus de 3 paragraphes
```

C'est ce qui transforme un bon Skill en excellent Skill : la connaissance fine de ce qui ne marche pas.

## 7. Le dossier `references/`

C'est le différenciateur éditorial clé de Join Médicis. À côté du `skill.md`, un dossier `references/` contient des documents sources que Claude lit activement :

- Des études sectorielles
- Des frameworks méthodologiques
- Des exemples annotés
- Des données chiffrées de référence

Claude ne se base plus sur ses connaissances génériques — il s'appuie sur **tes** documents.

## En résumé

Un Skill bien construit, c'est :

1. ✅ Frontmatter complet et versionné
2. ✅ Identité précise (§0)
3. ✅ Conditions de déclenchement claires (§1)
4. ✅ Méthodologie pas-à-pas (§2)
5. ✅ Format de sortie templatisé (§3)
6. ✅ Anti-patterns documentés (§4)
7. ✅ Documents de référence dans `references/`

Si un de ces 7 points manque, c'est probablement encore un prompt — pas un Skill.

---

*Tu veux contribuer un Skill ? [Voici le process complet](/contribuer).*
