# Firestore POC

This project is a proof of concept for integrating a Firestore, including client side offline storage, with [Hono](https://hono.dev) and Angular.

# Table of Contents

- [Prerequisites](#prerequisites)
- [Setup Instructions](#setup-instructions)
  - [1. Create Google Cloud Console and Firebase Projects](#1-create-google-cloud-console-and-firebase-projects)
  - [2. Update Angular Configuration](#2-update-angular-configuration)
  - [3. Create Service Account Key](#3-create-service-account-key)
  - [4. Create `key.ts` File](#4-create-keyts-file)
  - [5. Install Node.js](#5-install-nodejs)
  - [6. Install Dependencies](#6-install-dependencies)
  - [7. Run the Application](#7-run-the-application)
  - [8. Access the Applications](#8-access-the-applications)
- [Project Structure](#project-structure)
- [Notes](#notes)

## Prerequisites

- Google Cloud Console account
- Firebase account
- Node.js (version 20)

## Setup Instructions

### 1. Create Google Cloud Console and Firebase Projects

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project.
3. Enable the Firestore API for your project.
4. Go to the [Firebase Console](https://console.firebase.google.com/).
5. Add a new Firebase project and link it to your Google Cloud project.
6. In the Firebase project settings, add a new web app and copy the web configuration.

### 2. Update Angular Configuration

1. Open the `app/src/app/app.config.ts` file.
2. Update the file with the Firebase web configuration you copied in the previous step.

### 3. Create Service Account Key

1. In the Firebase Console, navigate to Project Settings > Service Accounts.
2. Click "Generate New Private Key" to download the service account key JSON file.
3. Save the JSON file securely.

### 4. Create `key.ts` File

Instead of pulling from environment vars I'm just including the key in ts directly but ignoring it from source control.

1. Copy the template file `api/src/key.template.ts` to `api/src/key.ts`.
2. Open the `api/src/key.ts` file and add the contents of the downloaded JSON service account key.

### 5. Install Node.js

Ensure you have Node.js version 20 installed. You can download it from [nodejs.org](https://nodejs.org/).

### 6. Install Dependencies

Navigate to the project root directory and run the following command to install the required dependencies:

```
npm install
```

### 7. Run the Application

Start the Angular app and Hono API by running the following command:

```
npm run serve
```

### 8. Access the Applications

- Angular app: http://localhost:4200
- Hono API: http://localhost:3000

### Project Structure

- `app/`: Contains the Angular application.
- `api/`: Contains the Hono API.
- `app/src/app/app.config.ts`: Configuration where Angular injects firebase.
- `api/src/key.ts`: Service account key file for the Hono API.

### Notes

- Ensure that your Firestore security rules are properly configured to allow access only to authenticated users.
  - For the purpose of a simple demo I found it was easier to make the db public. Will have to research that more later.
- Keep your service account key file secure and do not expose it publicly.
