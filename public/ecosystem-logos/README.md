# Logos des ressources de l'écosystème

Déposez ici les logos des ressources (format recommandé : **SVG** ou **PNG/WebP carré**, fond transparent, ~128×128 px).

## Comment associer un logo à une ressource

Dans `src/lib/data.ts`, ajoutez le champ `logo` à l'objet de la ressource :

```ts
{
  slug: "lemlist",
  name: "Skills Lemlist",
  org: "Lemlist",
  logo: "/ecosystem-logos/lemlist.svg", // chemin depuis /public
  // ...
}
```

Vous pouvez aussi utiliser une **URL distante** (https) :

```ts
logo: "https://exemple.com/logo.svg",
```

Sans champ `logo`, un **monogramme** (initiales de l'organisation sur fond vert) s'affiche automatiquement.
