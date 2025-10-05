'use client';
import {
  Auth,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail
} from 'firebase/auth';
import { errorEmitter } from './error-emitter';
import { FirestorePermissionError } from './errors';

// Non-blocking operations that emit errors globally for centralized handling.

export function initiateAnonymousSignIn(authInstance: Auth): void {
  signInAnonymously(authInstance).catch(error => {
    // We don't create a permission error here as anonymous sign-in is a general auth action,
    // not tied to a specific Firestore path. A general error log is more appropriate.
    console.error("Anonymous Sign-In Failed:", error);
  });
}

export function initiateEmailSignUp(authInstance: Auth, email: string, password: string): void {
  createUserWithEmailAndPassword(authInstance, email, password).catch(error => {
     console.error("Email Sign-Up Failed:", error);
     // You could potentially create and emit a custom 'AuthError' if needed.
  });
}

export function initiateEmailSignIn(authInstance: Auth, email: string, password: string): void {
  signInWithEmailAndPassword(authInstance, email, password).catch(error => {
    console.error("Email Sign-In Failed:", error);
  });
}

export function initiateGoogleSignIn(authInstance: Auth): void {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authInstance, provider).catch(error => {
        console.error("Google Sign-In Failed:", error);
    });
}

export function initiatePasswordReset(authInstance: Auth, email: string): Promise<void> {
  // This operation is better handled with a returned Promise,
  // as the UI will likely want to give direct feedback to the user (e.g., "Password reset email sent").
  return sendPasswordResetEmail(authInstance, email);
}
