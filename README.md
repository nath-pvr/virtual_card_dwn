# Virtual Card DWN

Carte de visite virtuelle orientee mobile, avec une direction artistique neon/glassmorphism et des actions de contact rapides.

## Apercu

Le projet affiche une carte digitale personnelle avec :
- logo SVG stylise
- informations de contact
- boutons d'action (appel, email, lien)
- navigation sociale
- feedback utilisateur via toast lors de la copie du lien

## Technologies utilisees

- HTML5 : structure de la page (`index.html`)
- CSS3 : design, responsive, effets neon et glassmorphism (`styles.css`)
- JavaScript vanilla : interactions simples (`script.js`)
- SVG / images : logo et assets graphiques (`asset/img/...`)

## Structure du projet

```text
virtual_card_dwn/
  index.html
  styles.css
  script.js
  asset/
    img/
      logo_refonte_DWN.svg
      icons/
```

## Lancer le projet en local

1. Ouvrir le dossier du projet.
2. Lancer un serveur local (ou via votre environnement WAMP).
3. Ouvrir `index.html` dans le navigateur.

## Publication en page cachee (`/vcard`)

Le projet est prepare pour etre servi via :
- `https://www.digitalwithnath.fr/vcard`

Elements deja configures :
- `index.html` contient `base href="/vcard/"` pour stabiliser les chemins d'assets.
- balises meta `robots` en `noindex, nofollow`.
- `.htaccess` ajoute un header `X-Robots-Tag` et desactive le listing de dossier.

Deploiement recommande :
1. Copier ce projet dans le dossier web `vcard` de votre site principal.
2. Verifier que l'URL `https://www.digitalwithnath.fr/vcard/` charge bien la page.
3. Verifier que `https://www.digitalwithnath.fr/vcard` redirige vers la version avec slash (comportement Apache standard).

## Fonctionnalites principales

- Theme visuel neon + fond cosmique
- Carte principale avec effet verre (glassmorphism)
- Affichage des coordonnees (ville, email, telephone)
- Boutons CTA personnalises
- Copie du lien courant via le bouton `Copier mon lien`
