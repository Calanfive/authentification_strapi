---
marp: true
theme: gaia
markdown.marp.enableHtml: true
paginate: true
_paginate: false
style: @import url('https://unpkg.com/tailwindcss@^2/dist/utilities.min.css');
---

<style>
  section {
    background-color: #fefefe;
    color: #333;
  }
</style>

<!-- _class: lead -->
<!-- _color: #555 -->

# L'authentification dans les API

![bg right w:40% contain](../images/api-rest.png)

---

## Pourquoi authentifier nos utilisateurs ?

- Pour savoir qui fait quoi

  - Thomas s'est loggé deux fois aujourd'hui
  - le panier validé est celui de Thomas

- Pour savoir qui a le droit de faire quoi
  - Thomas peut récupérer la liste des films
  - Thomas ne peut pas supprimer un film

---

## Comment authentifier nos utilisateurs ?

Besoin :

- identifiant : email, pseudo, ... mais pas thomas + laforge + age + ...
- mot de sécurité : mot de passe, clé, certificat, ...
- KYC ?
- aider à la connexion : OAuth, SSO, ...
- retrouver / modifier ses données d'authentification

---

## Comment authentifier nos utilisateurs ?

### 1. Basic Auth

- Envoi de l'identifiant et du mot de passe à chaque requête
- L'identifiant et le mot de passe sont stockés par le client (en clair) Basic Thomas:1234

### 2. Token

- Envoi d'un token à chaque requête
- Le token est généré par le serveur
- Le token est stocké par le client
- Le token est valide pendant un certain temps

---

## Comment authentifier nos utilisateurs ?

### 3. OAuth

- Le token est généré par un tiers de confiance
- Le token est stocké par le client
- Le token est valide pendant un certain temps

---

## Qu'est ce qu'un hash ?

- Une fonction de hachage est une fonction qui, à partir d'une donnée fournie en entrée, calcule très rapidement une empreinte unique de cette donnée, de sorte que toute modification de la donnée entraîne une modification significative de l'empreinte.

  Exemples :

  - watcher
  - bitcoin
  - mot de passe

---

## Qu'est ce qu'un JWT

- JSON Web Token
- Un token est formé de 3 parties séparées par un point
  - La première partie est l'entête (type de token, algorithme de hashage)
  - La deuxième partie est le payload (données)
  - La troisième partie est la signature (hash de la première et deuxième partie)
- Bearer

---

## HTTP vs HTTPS

En quoi HTTPS permet de sécuriser l'authentification ?

- HTTPS = HTTP + SSL

Ca nous sauve de tout ?

---

## TP

- Créer une Basic Auth
- Utiliser ensuite un token JWT
- Utilisez les bonnes pratiques pour réaliser un espace de connexion

---

# JWT avec express

Utiliser le paquet `jsonwebtoken`
=> https://www.npmjs.com/package/jsonwebtoken

```js
const jwt = require("jsonwebtoken");
jwt.sign({ foo: "bar" }, "your-secret-key-dans-un-fichier-env", { expiresIn: "1h" });
jwt.verify(tokenWithoutBearerAndSpaceFromAuthorizationHeader, "your-secret-key-dans-un-fichier-env");
```

Et voilà !
