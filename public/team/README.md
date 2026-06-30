# Images des auteurs

Déposez ici les fichiers référencés dans `src/lib/data.ts` (champ `avatar` / `banner` de chaque auteur).

> ⚠️ Ce dossier s'appelle `team/` (et non `authors/`) car `/authors/*` est
> redirigé en 301 vers `/auteurs/*` : un fichier servi sous `/authors/`
> serait intercepté par la redirection et renverrait un 404.

## Aleksander Siebert
- `aleksander-siebert.jpg` — photo de profil (carré, idéalement ≥ 400×400)
- `aleksander-banner.jpg` — bannière (paysage, idéalement ≥ 1600×400)

Tant que les fichiers ne sont pas présents, la page auteur affiche un fond
vert pour la bannière et les initiales pour l'avatar (dégradation propre).
