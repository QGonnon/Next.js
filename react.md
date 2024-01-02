# React

## Introduction

React est une bibliothèque JS qui permet de creer facilement des interfaces utilisateurs (UI). Elle est maintenue par Facebook et une communauté de déveolppeurs indépendants.

## Installation

```
npm create vite@latest my-reat-app --template react

cd my-reat-app

npm install

npm start ou npm run dev
```

## Fonctionnement
En react, tous les composants sont des "fonctions".  
Tout composant react doit retourner un élément JSX.  
Pour rendre disponible un composant, il faut l'exporter.  
En react, "<></>" permet de rendre le DOM plus lisible.  
React mets à jour le DOM avec des hooks : Ceux sont des fonctions qui commencent par use (convention).  

### Hooks
- UseState : on peut utiliser une fonction pour mettre à jour le state. Cette syntaxe est utile quand on veut mettre un state dont la valeur dépend de la valeur précédente