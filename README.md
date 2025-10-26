# 🎉 Les Gais Lurons - Site Web Officiel

[![GitHub](https://img.shields.io/badge/Développeur-@Zack1408-181717?logo=github)](https://github.com/Zack1408)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222222?logo=github)](https://pages.github.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> Site web moderne et responsive pour l'association **Les Gais Lurons** de Grossouvre - Des événements festifs et conviviaux pour tous ! 🎊

---

## 🌐 Accès Rapide

**🔗 Lien court :** [bit.ly/lesgaislurons](https://bit.ly/lesgaislurons)

**🌍 URL complète :** [Les-Gais-Lurons.github.io/LesGaisLurons](https://Les-Gais-Lurons.github.io/LesGaisLurons)

---

## 📖 À Propos

L'association **Les Gais Lurons** a pour vocation d'organiser des événements festifs et conviviaux autour de la Communauté de Communes des 3 Provinces. Nous rassemblons petits et grands à travers des manifestations locales qui célèbrent la joie de vivre, la culture et le partage.

### 🎯 Notre Mission

- 🎪 Organiser des événements festifs et conviviaux
- 🤝 Rassembler les habitants du territoire
- 🎨 Promouvoir la culture et le partage
- ✨ Créer des moments de joie et de convivialité

---

## ✨ Fonctionnalités du Site

- 📱 **Design responsive** - Adapté mobile, tablette et desktop
- 🎨 **Interface moderne** - Design coloré inspiré du logo de l'association
- 📅 **Gestion des événements** - Affichage dynamique des manifestations
- 🖼️ **Lightbox pour les affiches** - Visualisation en plein écran des images d'événements
- 📧 **Formulaire de contact** - Envoi direct d'emails via FormSubmit.co
- ❓ **FAQ interactive** - Accordéon pour les questions fréquentes
- 🎭 **Animations fluides** - Transitions et effets au scroll
- 🔗 **Réseaux sociaux** - Lien vers la page Facebook

---

## 🛠️ Technologies Utilisées

| Technologie | Description |
|------------|-------------|
| **HTML5** | Structure sémantique du site |
| **CSS3** | Design moderne avec variables CSS et animations |
| **JavaScript** | Interactivité et gestion dynamique du contenu |
| **FormSubmit.co** | Service gratuit d'envoi d'emails sans backend |
| **GitHub Pages** | Hébergement gratuit et fiable |

---

## 📂 Structure du Projet

```
LesGaisLurons/
├── 📂 img/                 # Dossier contenant les images
    ├── 🖼 logo.jpg              # Logo de l'association
    └── 🖼 marché-de-noël.png    # Affiche du Marché de Noël
├── 📄 index.html           # Page HTML principale
├── 🎨 styles.css          # Feuille de styles CSS
├── ⚙️ script.js           # Logique JavaScript
├── 📜 LICENSE             # Licence GNU GPLv3
└── 📖 README.md           # Ce fichier
```

---

## 🚀 Installation et Utilisation

### Cloner le Projet

```bash
git clone https://github.com/Les-Gais-Lurons/LesGaisLurons.git
cd LesGaisLurons
```

### Ouvrir Localement

Ouvrez simplement le fichier `index.html` dans votre navigateur préféré !

### Déployer sur GitHub Pages

1. Pushez votre code sur GitHub
2. Allez dans **Settings** → **Pages**
3. Sélectionnez la branche **main** et le dossier **/ (root)**
4. Votre site sera disponible à : `https://votre-username.github.io/le-nom-que-vous-choisirez-au-dêpot/`

---

## 📝 Gestion des Événements

Les événements sont gérés directement dans le fichier `script.js`. Pour ajouter, modifier ou supprimer un événement :

### Ajouter un Événement

```javascript
const events = [
    // ... événements existants
    {
        id: 5,  // Numéro unique
        title: "Nom de l'événement",
        date: "Date de l'événement",
        location: "Lieu, Ville",
        description: "Description complète de l'événement...",
        image: "URL de l'affiche (optionnel)"
    }
];
```

### Modifier un Événement

Modifiez directement les valeurs dans le tableau `events`.

### Supprimer un Événement

Supprimez le bloc `{ ... },` correspondant à l'événement.

---

## 📧 Configuration du Formulaire de Contact

Le formulaire utilise **FormSubmit.co** pour envoyer les messages par email.

### ⚠️ Première Utilisation

1. La première soumission enverra un email de confirmation à votre e-mail (veillez à la modifier avant)
2. Cliquez sur le lien de confirmation dans cet email
3. Les prochains messages arriveront directement !

### Changer l'Email de Réception

Dans `index.html`, modifiez la ligne :

```html
<form id="contactForm" action="https://formsubmit.co/VOTRE-EMAIL@exemple.fr" method="POST">
```

---

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `styles.css` via des variables CSS :

```css
:root {
    --primary-color: #d63031;      /* Rouge */
    --secondary-color: #fdcb6e;    /* Jaune/Or */
    --accent-color: #74b816;       /* Vert */
    --dark-color: #2d3436;         /* Gris foncé */
    --light-color: #f4e4c1;        /* Beige clair */
}
```

Modifiez ces valeurs pour changer toute la palette du site !

---

## 📱 Contact de l'Association

- 📍 **Adresse :** 13 Rue Principal, 18600 Grossouvre, France
- 📱 **Téléphone :** 06 29 74 54 75 / 07 88 70 85 00
- ✉️ **Email :** zack140821@francemel.fr
- 📘 **Facebook :** [Les Gais Lurons](https://www.facebook.com/profile.php?id=61564588143293)

---

## 🤝 Contribution

Ce projet est open source sous licence **GNU GPLv3**. Les contributions sont les bienvenues !

### Comment Contribuer ?

1. 🍴 Forkez le projet
2. 🌿 Créez une branche (`git checkout -b feature/amelioration`)
3. 💾 Committez vos changements (`git commit -m 'Ajout d'une fonctionnalité'`)
4. 📤 Pushez vers la branche (`git push origin feature/amelioration`)
5. 🔃 Ouvrez une Pull Request

---

## 📄 Licence

Ce projet est sous licence **GNU General Public License v3.0**.

Cela signifie que vous êtes libre de :
- ✅ Utiliser ce code pour votre propre projet
- ✅ Modifier le code comme vous le souhaitez
- ✅ Distribuer le code original ou modifié

**Mais vous devez :**
- 📝 Conserver la notice de licence
- 🔓 Partager vos modifications sous la même licence
- 📢 Indiquer les changements effectués

Pour plus de détails, consultez le fichier [LICENSE](LICENSE).

---

## 🎖️ Crédits

- **Développement :** [![GitHub](https://img.shields.io/badge/Développeur-@Zack1408-181717?logo=github)](https://github.com/Zack1408)
- **Design :** Inspiré du logo de l'association
- **Hébergement :** GitHub Pages
- **Lien court :** Bit.ly
- **Service Email :** FormSubmit.co

---

## 💬 Support

Besoin d'aide ? Vous avez des questions ?

- 📧 Envoyez un email à : zack140821@francemel.fr
- 📱 Appelez-nous : 06 29 74 54 75 ou 07 88 70 85 00
- 💬 Contactez-nous sur [Facebook](https://www.facebook.com/profile.php?id=61564588143293)

---

<div align="center">

**Fait avec ❤️ par l'association Les Gais Lurons**

⭐ Si vous aimez ce projet, n'hésitez pas à lui donner une étoile sur GitHub !

[🌐 Visiter le Site](https://bit.ly/LesGaisLurons) • [📘 Facebook](https://www.facebook.com/profile.php?id=61578908101018) • [📧 Contact](mailto:zack140821@francemel.fr)

</div>
