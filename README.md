# Budget Best

![Logo de Budget Best](lien_vers_votre_logo)

Bienvenue dans Budget Best ! Un outil de gestion financière simple et efficace pour vous aider à gérer vos finances personnelles avec facilité.

---

## Introduction

Budget Best est une application de gestion financière conçue pour simplifier le suivi de vos revenus, dépenses et budgets. Que vous ayez besoin de gérer votre budget mensuel, suivre vos dépenses quotidiennes ou planifier vos économies, Budget Best vous offre les fonctionnalités nécessaires pour vous aider à atteindre vos objectifs financiers.

---

## Fonctionnalités principales

- **Suivi des revenus et dépenses:** Enregistrez facilement vos transactions et visualisez vos flux de trésorerie.
- **Gestion des budgets:** Définissez des budgets pour différentes catégories et suivez vos progrès.
- **Visualisations claires:** Consultez des graphiques et des tableaux pour comprendre rapidement votre situation financière.
- **Personnalisation:** Adaptez l'application à vos besoins avec des options de personnalisation flexibles.

---

## Comment démarrer

Pour commencer à utiliser Budget Best, suivez ces étapes simples :

1. **Installation des dépendances:** Assurez-vous d'avoir Node.js et npm installés sur votre machine.
2. **Clonage du référentiel:** Clonez le référentiel de Budget Best sur votre machine locale.
3. **Installation des packages:** Exécutez `npm install` dans les répertoires frontend et backend pour installer les dépendances.
4. **Démarrage de l'application:** Lancez l'application en exécutant `npm run dev` dans les répertoires frontend et backend.
## Technologies utilisées

---

- **Frontend:** React.js, Vite, Tailwind CSS 
- **Backend:** Node.js, Express.js, MySQL

---
5. **Création du fichier config.js dans le dossier backend/database**: Créez un fichier config.js dans le dossier backend/database et remplissez-le avec vos informations de connexion à la base de données.
Exemple de fichier config.js :
                        const dbConfig = {
                        host: 'localhost',
                        user: 'root',
                        password: 'password',
                        database: 'yourdatabase',
                      };

                      module.exports = dbConfig;