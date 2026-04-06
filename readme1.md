# 📘 TP React – Lab 1

## 🎯 Objectif

Ce TP a pour objectif de découvrir les bases de **React** en créant une petite application simple.
À la fin de ce TP, vous serez capable de :

* Initialiser un projet React
* Créer des composants fonctionnels avec JSX
* Utiliser les props pour passer des données
* Structurer une application React

---

## ⚙️ Installation

### 1. Installer les outils

* Installer **Node.js (version LTS)** : https://nodejs.org
* Vérifier l’installation :

```bash
node -v
npm -v
```

---

### 2. Créer le projet React

```bash
npx create-react-app tp-react
cd tp-react
npm start
```

L’application sera accessible sur :
👉 http://localhost:3000

---

## 📁 Structure du projet

```
src/
├── App.js
├── HelloWorld.js
├── Greeting.js
├── Profil.js
├── Voiture.js
├── ListeCourses.js
└── index.js
```

---

## 🧩 Composants créés

### 🔹 HelloWorld

Affiche un message simple :

```
Hello World !
```

---

### 🔹 Greeting

Affiche un message personnalisé avec props :

```
Bonjour, [prenom] !
```

---

### 🔹 Profil

Affiche :

* Une image utilisateur
* Le nom

Utilise **PropTypes** pour valider les données.

---

### 🔹 Voiture

Affiche les informations d’une voiture :

* Marque
* Modèle
* Couleur

---

### 🔹 ListeCourses

Affiche une liste dynamique d’éléments.

---

## ▶️ Exécution du projet

Dans le dossier du projet :

```bash
npm start
```

---

## 📌 Remarques importantes

* Tous les composants sont dans le dossier `src`
* L’image (`user.png`) doit être placée dans `public`
* Les balises JSX doivent être correctement fermées

---

## ✅ Résultat attendu

Une application React simple affichant :

* Un message "Hello World"
* Des salutations personnalisées
* Un profil utilisateur
* Une liste de voitures
* Des listes de courses

<img width="943" height="439" alt="image" src="https://github.com/user-attachments/assets/dcbda811-6e05-4750-88e5-d3399a4140b4" />

<img width="941" height="434" alt="image" src="https://github.com/user-attachments/assets/0c49cda9-d6b3-43d2-898a-1675dd32d10b" />

---

## 🧠 Conclusion

Ce TP permet de comprendre les bases de React :

* Composants
* JSX
* Props
* Organisation du projet
