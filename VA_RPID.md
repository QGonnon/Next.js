1. Quel est le but du hook useState dans React ? Donnez un exemple de son utilisation dans un composant fonctionnel.

useState permet de créer une constante réactive associer à une fonction pour changer sa valeur.
La fonction issu du useState peut prendre en paramètre une valeur ou bien une fonction (possédant la valeur précédente comme paramètre) pour changer la valeur de la constante.

Example avec un tableau représantant un formulaire et une fonction en paramètre de "setFormData":
import { useState } from 'react'
import styles from './ProfileCardEdit.module.css'

export default function ProfileCardEdit({profileInfo, childHandleSubmit}) {
  const [formData, setFormData] = useState({
    name: profileInfo.name,
    yo: profileInfo.yo,
    drivingLicenseCar: profileInfo.drivingLicenseCar,
    drivingLicenseBike: profileInfo.drivingLicenseBike
  })
  function handleChange (event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  function handleSubmit (event) {
    event.preventDefault();
    childHandleSubmit(formData)
  };
  

  return (
      <article className={styles.article}>
        <form onSubmit={handleSubmit}>
          <main>
            <div><div>Nom : </div><input name="name" value={formData.name} onChange={handleChange} /></div>
            <div><div>Age : </div><input name="yo" value={formData.yo} onChange={handleChange} /></div>
            <div><div>Licence automobile : </div><input name="drivingLicenseCar" value={formData.drivingLicenseCar} onChange={handleChange} /></div>
            <div><div>Licence moto : </div><input name="drivingLicenseBike" value={formData.drivingLicenseBike} onChange={handleChange} /></div>
          </main>
          <button>Submit</button>
        </form>
      </article>
  )
}

2. Décrivez comment le hook useEffect est utilisé dans les composants fonctionnels React. Quels sont ses cas d'utilisation courants ?

useEffect permet d'ajouter un "listener" sur une constante "réactive" (créer avec un useState). On peut donc ainsi exécuter du code logique s'exécutant à chaque rafraichissement de la constante (situé dans le paramètre "dependencies" du hook)

On l'utilise généralement sur un élément/composant n'étant pas issu de react, afin du lui donner un comportement proche de react. On peut aussi l'utiliser lorsque l'on souhaite modifié d'autres données en parallèle (par exemple, si l'on modifie la constante 'nom' d'une personne, alors on souhaiterait aussi modifié la constante 'description' qui lui est associé).

3. Expliquez l'API Contexte dans React et son cas d'utilisation principal. Comment implémenteriez-vous un contexte de thème pour les modes sombre et clair dans une application ?

L'API Contexte permet de passer des informations à des composants enfants à partir de composant issu d'une autre partie de l'application.

Pour implémenter un contexte de thème, je créerai un composant nommé 'ThemeProvider' utilisant un composant nommé 'ThemeContext' (issu de la fonction 'createContext()', et j'associerai une constante 'theme' dans le composant 'ThemeProvider' et passer en props sous le nom 'value' à 'ThemeContext.Provider'. J'irai ensuite définir 'ThemeProvider' comme parent de tous les composants dans App.jsx puis je créerai un bouton dans composant (possédant une constante définit selon 'useContext(ThemeContext)') afin de changer la valeur de 'theme', impactant ainsi le style css définit dans chaque composant utilisant le useContext et possedant une classe css en lien avec la valeur de 'theme'.

4. À quoi servent les hooks useMemo et useCallback dans React ? Donnez un exemple où leur utilisation serait bénéfique.
useMemo et useCallback permettent de limiter le rafraichissement de la page seulement à chaque modification de la valeur qu'ils possèdent en dépendance. La différence entre les deux est que useMemo renvoie une valeur alors que useCallback renvoie une fonction.

Example :
Dans un fichier 'Main':
import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import ShoppingList from "./ShoppingList";

const App = () => {
  const [count, setCount] = useState(0);
  const [shoppingList, setShoppingList] = useState([]);

  const addItem = useCallback(() => {
    setShoppingList((el) => [...el, "New Item"]);
  }, [shoppingList]);

  return (
    <>
      <ShoppingList shoppingList={shoppingList} addItem={addItem} />
    </>
  );
};

Dans un fichier 'ShoppingList':
import { memo } from "react";

const ShoppingList = ({ shoppingList, addItem}) => {
  return (
    <>
      <h2>My shopping list</h2>
      {shoppingList.map((item, i) => {
        return <p key={i}>{item}</p>;
      })}
      <button onClick={addItem}>Add Item</button>
    </>
  );
};

export default memo(ShoppingList );

5. Expliquez comment Next.js gère le routage. Quelle est la différence entre les routes statiques et dynamiques dans Next.js ?
Next.js utilise l'architecture et la nomenclature des dossiers pour le routage. Les routes statiques sont les routes par défaut de nextjs pour accéder à un fichier, alors que les routes dynamiques sont créé avec des crochets autour du nom du dossier afin de pouvoir utilisé le nom en tant que props au niveau du composant page.

6. Expliquez l'objectif du composant Image dans Next.js. Pourquoi est-il préféré à la balise HTML img standard ?
Le composant Image de Next.js permet d'afficher une image à la quelle on peut lui associer un style.
Comparer à la balise, le composant possède l'avantage de pouvoir posséder des images en tant que fallback si la premier n'a pas charger ou bien posséder une image lors du chargement.

7. Écrivez un exemple de code pour une route API Next.js qui gère les erreurs et renvoie des réponses appropriées au client.


8. Dans un composant Next.js, comment appliqueriez-vous des styles CSS de manière conditionnelle en fonction de l'état du composant ou de certaines props ? Donnez un exemple concret en utilisant les modules css ou tailwind.

On peut appliquer des styles CSS de manière conditionnelle grâce à la librairie clsx.

Example:
import clsx from 'clsx';
 
export default function Status({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
    {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
)}

9. Comment Vercel facilite-t-il la gestion des environnements de prévisualisation (preview environments) pour les applications Next.js ? Expliquez comment vous pourriez utiliser cette fonctionnalité pour améliorer le workflow de développement et de test.

Vercel permet de vérifier les changements sans fusionner les changements afin de voir si quelque chose casse.


10. Imaginez que vous développez une plateforme e-commerce en utilisant Next.js, qui inclut une page de recherche de produits. Cette page doit permettre aux utilisateurs de filtrer les produits par catégories, prix, et notations. Cependant, tous les filtres ne sont pas obligatoires. Un utilisateur peut vouloir rechercher des produits uniquement par catégorie, uniquement par prix, par une combinaison des deux, ou avec tous les filtres appliqués. Comment structureriez-vous les routes pour cette page  ? Quels seraient les avantages de cette approche par rapport à une gestion plus traditionnelle des paramètres de requête ?

la page de recherche serait rangé dans "search/[...slug]".
1 paramètre : test si catégorie ou prix (si seulement texte ou si seulement nombre)
2 paramètres : catégorie puis prix
3 paramètres : catégorie puis prix puis note
Les paramètres dans la route seront vérifiés dans le composant page afin de détecté quelle résultat renvoyer.