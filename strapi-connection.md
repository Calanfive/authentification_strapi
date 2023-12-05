# Se connecter avec Strapi

## Objectifs

- Avant de coder notre propre API protégée par un système d'authentification, nous allons utiliser Strapi pour créer une API et nous connecter à celle-ci.
- Comment récuperer un token d'authentification ?
- Comment créer un token d'authorisation ?
- Comment récupérer des informations réservées aux utilisateurs connectés ?
- Comment se reconnecter ?
- Comment se déconnecter ?
- Comment créer un utilisateur ?
- Comment changer son mot de passe ?

## Créer un projet Strapi

Créez un projet Strapi avec la commande suivante :
    
```bash
npx create-strapi-app@latest Strapi-Authentification --quickstart
```

## Se connecter à l'interface d'administration

RETENEZ-BIEN VOS IDENTIFIANTS (et ne pas devoir les saisir 13893173813678 fois avant que ça ne marche). Je ne cible ni Jérémy, ni Camille, ni Aymeric ^^

## Créer un utilisateur

Créez un utilisateur dans l'interface d'administration avec un mot de passe et un rôle `authenticated`


## Créer un utilisateur par l'API

Ajoutez dans votre fichier requests.http les requêtes suivantes :

- Créer un utilisateur
- Se connecter
- Se déconnecter
- Récupérer les informations de l'utilisateur connecté
- Modifier le mot de passe de l'utilisateur connecté

## Créer une collection de jeux gratuits

Créer un Content Type `FreeGame` avec les champs suivants :
nom, description, image
Rendez ce Content Type public

Ajouter dans votre fichier requests.http les requêtes suivantes :
- Créer un jeu gratuit
- Récupérer tous les jeux gratuits
- Récupérer un jeu gratuit
- Modifier un jeu gratuit
- Supprimer un jeu gratuit

## Créer une collection de jeux payants

Créerss un Content Type `OfficialGame` avec les champs suivants :

nom, description, image, prix
Rendez ce Content Type privé au rôle `authenticated`

Comment récupérer un token d'authentification ?
A vous de trouver l'information mais vous avez surement déjà vu un token JWT lors de précédents projets ^^

Ajoutez dans votre fichier requests.http les requêtes suivantes :
- Créer un jeu payant
- Récupérer tous les jeux payants
- Récupérer un jeu payant
- Modifier un jeu payant
- Supprimer un jeu payant

## Créer un token d'authorisation

Créez un token d'authorisation pour le rôle `authenticated` et ajoutez le dans le header de vos requêtes pour les jeux payants

Dans Settings/API Tokens vous pouvez créer un token d'authorisation pour un rôle donné

Après avoir réalisé vos tests, révoquez le token d'authorisation

Quels sont les intérêts d'un token d'authorisation par rapport à une authentification ?
Quels sont les défauts d'un token d'authorisation par rapport à une authentification ?

## La documentation de son API

Nous allons utiliser un plugin pour générer une documentation de notre API.
Pour cela, ouvrir le Marketplace de Strapi et installer le plugin `Documentation`.
`http://localhost:1337/admin/marketplace?search=open&page=1`
Installez le plugin et suivez les instructions ici :
https://market.strapi.io/plugins/@strapi-plugin-documentation
Vous devriez avoir une nouvelle section `Documentation` dans le menu de gauche.
Installer l'extension Open API pour tester notre API