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

# NEXTJS
app est le dossier comportant touts les composants destiner à devenir une page de l'application

## Présentation de Next.js

Next.js est un framework pour React, conçu pour la production et l'efficacité. Il offre plusieurs avantages :

**Server-Side Rendering (SSR)** : Next.js permet le rendu côté serveur des pages web, ce qui améliore la performance et le SEO.
**Static Site Generation (SSG)** : Possibilité de générer des sites statiques pour une vitesse de chargement rapide.
Routing Automatique : Les fichiers dans le dossier pages deviennent automatiquement des routes.
**Optimisation des Performances** : Next.js inclut des fonctionnalités comme l'optimisation automatique des images.
Facilité de Déploiement : Intégration simple avec des plateformes comme Vercel pour un déploiement rapide.

## Installation et Configuration de Base

Pour installer Next.js, vous pouvez utiliser `npx create-next-app` ou `yarn create next-app`. Vous pouvez aussi utiliser `npm init next-app` ou `yarn create next-app` pour créer un projet Next.js à partir de zéro.

Pour ce cours, nous allons utiliser `npx create-next-app` pour créer un projet Next.js à partir d'un template. Pour cela, exécutez la commande suivante dans votre terminal :

```bash

npx create-next-app --example with-tailwindcss nextjs-course

```

Cette commande va créer un nouveau dossier nextjs-course avec un projet Next.js préconfiguré avec Tailwind CSS. Vous pouvez ensuite ouvrir le dossier dans votre éditeur de code favori.

Pour lancer le projet, exécutez la commande suivante :

```bash

cd nextjs-course
npm run dev

```

Vous pouvez ensuite ouvrir http://localhost:3000 pour voir le résultat.

## Structure de Projet Next.js 14

La structure de projet par défaut est la suivante :

```bash

```

## Routing de Base avec Next.js

Le routing de base avec Next.js est très simple. Il suffit de créer un fichier dans le dossier pages (`app` ?) avec le nom de la route. Par exemple, pour créer une page à l'adresse `/about`, il suffit de créer un fichier `about.js` (un dossier `about` avec un ficher `page.tsx` ?) 

Vocabulaire du système de routing de Next.js :
- Tree (arbre): Un arbre est une structure de donées qui représente une hiérarchie. Dans Next.js, l'arborescence des fichiers dans le dossier pages (`app` ?) représente l'arborescence des routes.
- Subtree: un sous-arbre est un arbre qui fait partie d'un arbre plus grand. Dans Next.js, un sous-arbre est un dossier qui fait partie de l'arborescence des fichiers dans le dossier pages (`app` ?).
- Root: La racine est le dossier le plus haut dans l'arborescence des fichiers.
- Leaf: Une feuille est un noeud qui n'a pas d'enfants. Dans Next.js, un fichier dans le dossier pages (`app` ?) est une feuille.

Par défaut tous les composants situés dans le dossier app sont des `React Server Components`.

En résumé: 
- Les dossiers permettent de definir les routes
- Les fichiers permettent de representer l'ui

Il existe tout un système de nomenclature des fichiers et de conventions afin d'assurer le bon fonctionnement du router:

- layout: permet de definir une UI commune pour plusieurs pages
- page: l'ui qui correspond a une route unique
- loading: la page de chargement commune a un segement et ses enfants
- error: ui en cas d'erreur
- not-found: ui lorsque la page n'est pas trouvée

### Navigation entre les pages

Il existe deux façons  de naviguer entre les pages dans Next.js :
- Le composant Link: permet de naviguer entre les pages sans recharger la page:

```tsx
import Link from 'next/link'

export default function Page() {
    return (
        <div>
            <Link href="/about">
                <a>About</a>
            </Link>
        </div>
    )
    
}
```

Link est un composant fourni par Next.

- Le hook useRouter: permet de naviguer depuis un composant client par le code (l'usage de hook requiert l'utilisation de la directive 'use client')

Il existe un hook très utile qui permet de verifier quel est le chemin actuel de l'application: usePathname

```tsx
import { usePathname } from "next/router";

export default function Page() {
    const pathname = usePathname();
    return <div>Current path: {pathname}</div>;
}
```

### Grouper les routes

Dans le dossier app, les dossiers correspondent normalement a des routes. Cependant, on peut empecher ce fonctionnement en pla^ant le nom d'un dossier entre parenthèses. Par exemple, si on veut que le dossier `blog` ne soit pas une route, on peut le renommer en `(blog)`.

On pourra ainsi organiser les portions de route de facon logique sans impacter l'url.

Il faut faire attention a ce que deux fichiers pages situes dans des dossiers différents ne soient pas accesible par la meme route.

```
app/(test)/users/page.tsx
app/(test2)/users/page.tsx
```

### Creer des routes dynamiques

Une route dynamique est creee en placant des crochets autour d'un segment de route. Par exemple, pour creer une route dynamique a l'adresse `/users/[id]/.../.../page.tsx`.

Les informations des routes dynamiques sont passees en props au composant page : params

```tsx
export default function({params}:{id:string}) {
    return <div>Current user: {params.id}</div>;
}
```

Pour aller plus loin, il existe une fonction appelee `generateStaticParams` qui permet de generer les routes dynamiques de facon statique (au moment du build).

### Le segment catch-all

Les segments dynamiques peuvent etre etendus avec le segment catch-all. Le segment catch-all est represente par trois points `...`. Il permet de recuperer tous les segments restants de l'url : `[...foldername]`

Route

```
app/shop/[...slug]/page.tsx
/shop/a
params : {slug:['a']}

app/shop/[...slug]/page.tsx
/shop/a/b
params : {slug:['a', 'b']}

app/shop/[...slug]/page.tsx
/shop/a/b/c
params : {slug:['a', 'b', 'c']}
```

### Le catch-all optionnel

Le catch-all peut etre rendu optionnel en le placant entre parentheses : `[[..slug]]`. Cela permet de creer des routes comme `/shop` et `/shop/a` avec le meme fichier page.

```tsx
 export default function Page({params}:{params: {slug?: string[]}}){
    return <div>Current user: {params.slug}<div>
 }
```

### Ma gestion des chargements

On peut creer une interface utilisateur de chargement pour les routes dynamiques en creant un fichier `loading.tsx` dans le dossier app. Ce fichier sera utilise pour toutes les routes dynamiques.

Ce systeme fonctionne avec React Suspense : https://react.dev/reference/react/Suspense

```tsx
export default function Loading(){
    return <LoadingSkeleton/>
}
```


### Gestion des erreurs

On peut creer une interface utilisateur d'erreur pour les routes dynamiques en creant un fichier `error.tsx` dans le dossier app. Ce fichier sera utilise pour toutes les routes dynamiques.