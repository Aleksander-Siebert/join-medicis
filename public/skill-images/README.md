# Images de couverture des Skills

Déposez ici les images de couverture des Skills (format recommandé : **WebP**, ratio **16:9**, ~1200×675 px).

## Comment associer une image à un Skill

Dans `src/lib/data.ts`, ajoutez le champ `image` à l'objet du Skill :

```ts
{
  slug: "mon-skill",
  name: "Mon Skill",
  image: "/skill-images/mon-skill.webp", // chemin depuis /public
  // ...
}
```

Vous pouvez aussi utiliser une **URL distante** (https) :

```ts
image: "https://exemple.com/image.webp",
```

L'image s'affiche automatiquement en haut de la `SkillCard` (page auteur, /skills, etc.).
Sans champ `image`, la carte reste affichée normalement, sans bandeau.
