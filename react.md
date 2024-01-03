# React

## Introduction

React est une bibliothèque JS qui permet de creer facilement des interfaces utilisateurs (UI). Elle est maintenue par Facebook et une communauté de déveolppeurs indépendants.

## Installation

```
npm create vite@latest my-react-app --template react

cd my-react-app

npm install

npm start ou npm run dev
```

## Fonctionnement
En react, tous les composants sont des "fonctions".  
Tout composant react doit retourner un élément JSX.  
Pour rendre disponible un composant, il faut l'exporter.  
En react, "<></>" permet de rendre le DOM plus lisible.  
React mets à jour le DOM avec des hooks : Ceux sont des fonctions qui commencent par use (convention).  
 

### Props
Les composants React communiquent entre eux avec des props.
- Tout composant peut recevoir des props en parametre. 
- Les Props sont des objets dont l'utilisation est similaire a celle des atttributs HTML.
- Chaque props possède un attribut "children" permettant d'accéder aux éléments HTML/JSX dans la balise englobante.

### Hooks
- UseState : on peut utiliser une fonction pour mettre à jour le state. Cette syntaxe est utile quand on veut mettre un state dont la valeur dépend de la valeur précédente
- useEffect : permet d'ajouter un "listener" sur une constante "réactive" (créer avec un useState). On peut donc ainsi executer du code logique s'executant à chaque rafraichissement de la constante (situé dans le paramètre "dependencies" du hook) avec la fonction issus du useState
- useContext : 

utiliser usecontext et api context pour créer un store pour bcp de point