# Configuration EmailJS pour l'envoi automatique d'emails

Pour que le formulaire envoie automatiquement les emails à nellpatouparvedy@gmail.com, vous devez configurer EmailJS (service gratuit jusqu'à 200 emails/mois).

## Étapes de configuration :

### 1. Créer un compte EmailJS
1. Aller sur https://www.emailjs.com/
2. Cliquer sur "Sign Up Free"
3. Créer un compte avec l'email nellpatouparvedy@gmail.com

### 2. Configurer un service email
1. Dans le dashboard EmailJS, cliquer sur "Email Services"
2. Cliquer sur "Add New Service"
3. Choisir "Gmail"
4. Nommer le service : `service_mb_construction`
5. Connecter votre compte Gmail (nellpatouparvedy@gmail.com)
6. Cliquer sur "Create Service"

### 3. Créer un template d'email
1. Aller dans "Email Templates"
2. Cliquer sur "Create New Template"
3. Configurer le template comme suit :

**Template Name:** `template_mb_contact`

**Subject:** Nouvelle demande de {{from_name}} - MB Construction

**From Name:** {{from_name}}

**From Email:** {{from_email}}

**To Email:** {{to_email}}

**Reply To:** {{from_email}}

**Content:**
```
Nouvelle demande de projet reçue :

INFORMATIONS CLIENT:
==================
Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{phone}}

DÉTAILS DU PROJET:
==================
Type de projet: {{project_type}}
Budget estimé: {{budget}}
Délai souhaité: {{timeline}}

DESCRIPTION DU PROJET:
======================
{{description}}

ATTENTES DU CLIENT:
===================
{{expectations}}

---
Ce message a été envoyé depuis le formulaire de contact du site MB Construction.
```

4. Sauvegarder le template

### 4. Obtenir votre clé publique
1. Aller dans "Account" > "General"
2. Copier votre "Public Key"

### 5. Mettre à jour le fichier script.js
1. Ouvrir le fichier `script.js`
2. Remplacer `VOTRE_CLE_PUBLIQUE_ICI` par votre vraie clé publique EmailJS

   Exemple : `emailjs.init("BH8kL9mN2Xj5p7Q1z");`

### 6. Tester
1. Ouvrir le site dans votre navigateur
2. Remplir le formulaire de contact
3. Cliquer sur "Envoyer ma demande"
4. Vérifier la réception de l'email dans nellpatouparvedy@gmail.com

## Notes importantes :
- Service gratuit jusqu'à 200 emails/mois
- Les emails arrivent instantanément
- Le client n'a pas besoin d'ouvrir son client mail
- Tout se fait automatiquement en arrière-plan

## En cas de problème :
- Vérifier que la clé publique est correcte
- Vérifier les noms du service et du template
- Consulter la console du navigateur (F12) pour voir les erreurs
- Vérifier le dashboard EmailJS pour voir l'historique des envois