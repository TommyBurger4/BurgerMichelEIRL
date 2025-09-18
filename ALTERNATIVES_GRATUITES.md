# Alternatives gratuites pour gérer plus de 200 demandes/mois

## Solution actuelle implémentée

Le système est maintenant configuré avec **2 modes** :

### Mode 1 : Sans limite (Actuellement activé)
- Les demandes sont **sauvegardées localement** dans le navigateur
- Le client peut choisir entre :
  - **Envoyer via WhatsApp** (s'ouvre automatiquement avec le message pré-rempli)
  - **Appeler directement** sur ton téléphone
- **Page admin** : `admin.html` pour consulter toutes les demandes

### Mode 2 : EmailJS (Jusqu'à 200 emails/mois)
- Pour l'activer : Dans `script.js`, mettre `USE_EMAILJS = true`
- Nécessite configuration EmailJS (voir CONFIGURATION_EMAILJS.md)

## Comment utiliser la page Admin

1. Ouvre `admin.html` dans ton navigateur
2. Tu peux :
   - **Voir toutes les demandes** dans un tableau
   - **Cliquer sur "Voir"** pour les détails complets
   - **Exporter en CSV** pour Excel
   - **Supprimer** des demandes individuelles
   - Voir les **statistiques** (total, semaine, mois)

## Avantages de cette solution

✅ **100% GRATUIT** et illimité
✅ **WhatsApp** : Les clients t'envoient directement le message
✅ **Sauvegarde locale** : Aucune demande perdue
✅ **Export CSV** : Pour garder un historique Excel
✅ **Pas de serveur** nécessaire

## Autres alternatives gratuites

### 1. Utiliser plusieurs comptes EmailJS
- Créer 2-3 comptes EmailJS différents
- Alterner entre les comptes chaque mois
- 200 emails x 3 comptes = 600 emails/mois

### 2. Google Forms
- Créer un formulaire Google
- Les réponses arrivent dans Google Sheets
- Notifications par email illimitées
- Gratuit et professionnel

### 3. Netlify Forms (si tu héberges le site)
- 100 soumissions/mois gratuit
- Notifications email automatiques
- Dashboard pour gérer les demandes

### 4. Formspree
- 50 soumissions/mois gratuit
- Simple à intégrer
- Notifications par email

### 5. Solution Telegram Bot
- Créer un bot Telegram gratuit
- Les demandes arrivent dans Telegram
- Illimité et instantané

## Recommandation

La solution actuelle (WhatsApp + Sauvegarde locale) est la meilleure car :
- **0€ pour toujours**
- **Contact direct** avec les clients
- **Pas de limite** de messages
- **Simple** pour les clients

Pour consulter les demandes : ouvre régulièrement `admin.html` !