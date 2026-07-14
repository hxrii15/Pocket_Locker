# Pocket Locker

Pocket Locker is a React-based password vault application for storing, organizing, and managing login credentials securely. The app combines Firebase Authentication with client-side encryption so users can keep sensitive account details in a personal digital vault.

## Overview

This project is built as a modern single-page application using Vite and React. It provides a polished dashboard experience for managing credentials, generating strong passwords, and protecting account data with encryption.

## Core Features

- User authentication with Firebase Auth
- Protected routes for authenticated users only
- Vault page to add, edit, delete, search, and filter saved accounts
- Category-based organization for credentials such as Social, Dev, Finance, Email, and Other
- Password generator with customizable length and character options
- Clipboard helper for quick password copy actions
- Encrypted password storage using CryptoJS and a user-specific key derivation
- Dashboard for profile management, vault statistics, theme switching, and backup export
- Encrypted export of vault data for backup purposes
- Session timeout and inactivity-based logout handling

## Tech Stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Firebase Authentication and Firestore
- CryptoJS for encryption
- Lucide React for icons
- React Hot Toast for notifications

## Project Structure

```text
src/
  components/       # Reusable UI components
  context/          # Auth and vault state providers
  firebase/         # Firebase configuration and Firestore/auth helpers
  pages/            # Login, vault, and dashboard screens
  utils/            # Encryption, clipboard, and password generation helpers
```

## Getting Started

### Prerequisites

- Node.js and npm installed
- A Firebase project with Authentication and Firestore enabled

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root with your Firebase configuration values:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_SECRET_SALT=your_secret_salt
```

### Run Locally

```bash
npm run dev
```

The app will be available in the browser at the local Vite address shown in the terminal.

## Available Scripts

```bash
npm run dev      # starts the development server
npm run build    # builds the app for production
npm run preview  # previews the production build locally
```

## Security Notes

- Passwords are encrypted client-side before being stored or exported.
- The encryption key is derived from the user ID and a secret salt configured through environment variables.
- The app uses Firebase Authentication for user identity and Firestore for storing vault data.

## Notes for Contributors

- Keep the encryption and storage flow consistent with the current architecture.
- Make sure Firebase environment variables are configured before running the app.
- Prefer using the existing context and utility modules when adding new features.

## Status

This repository currently contains the core password vault experience, including authentication, encrypted credential management, profile controls, and export functionality.
