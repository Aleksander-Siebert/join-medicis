# Articles du glossaire

Un fichier `.md` = un article de glossaire. Aucun code à toucher.

## Ajouter un article en 4 étapes (depuis GitHub, sans rien installer)

1. Repère le **slug** du terme dans [`src/lib/glossary.ts`](../../src/lib/glossary.ts)
   (le champ `slug`, ex. `llm`).
2. Dans ce dossier, clique sur **Add file → Create new file**.
3. Nomme le fichier **exactement** `<slug>.md` (ex. `llm.md`).
   ⚠️ Le nom doit correspondre au slug au caractère près, sinon l'article ne
   sera pas relié au terme.
4. Colle le modèle ci-dessous, écris, puis **Commit changes**.

Vercel redéploie tout seul. La page `/glossaire/<slug>` affiche l'article
et **passe automatiquement en indexable** (sans article, elle reste en
`noindex` pour ne pas publier une page trop pauvre).

## Modèle à copier

```markdown
---
excerpt: "Une phrase de résumé, affichée sous le titre et utilisée comme meta description Google."
updatedAt: "2026-07-17"
---

## Qu'est-ce que le [terme] ?

Le premier paragraphe répond directement à la question, en une ou deux phrases.
C'est souvent lui que Google reprend en extrait.

## Pourquoi c'est important

Développez ici.

## Exemple concret

- Un point
- Un autre point

## À retenir

Une synthèse courte.
```

## Le frontmatter (entre les `---`)

| Champ | Obligatoire | Rôle |
|---|---|---|
| `excerpt` | non | Chapô sous le titre + **meta description** Google. **Fortement recommandé**. |
| `metaTitle` | non | **Title tag** Google, si vous le voulez différent du H1 (ex. H1 « LLM », title « Qu'est-ce qu'un LLM ? »). |
| `updatedAt` | non | Date `AAAA-MM-JJ`, affichée en bas de l'article. |
| `title` | non | Remplace le H1. À n'utiliser que si le titre du glossaire ne convient pas. |
| `draft` | non | `true` = page visible en ligne mais **non indexée**, hors sitemap et non liée. Retirez la ligne pour publier. |

Tout ce qui suit le second `---` est le corps de l'article, en Markdown
(`##` pour les sous-titres, `**gras**`, `- listes`, `[liens](https://...)`).

## Bon à savoir

- **Ne créez pas de fichier pour un terme absent** de `src/lib/glossary.ts` :
  la page n'existera pas (404). Ajoutez d'abord le terme au glossaire.
- Les titres `#` (H1) sont inutiles : le titre de la page est déjà affiché.
  Commencez à `##`.
- Un fichier vide (frontmatter sans texte) est ignoré : la page retombe sur la
  définition courte du glossaire.
