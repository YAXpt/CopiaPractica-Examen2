import { Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid'; // Generador de UUID

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private sessionId: string;
  private userId: string | null = null;

  constructor() {
    // Generar un sessionId único cada vez que la aplicación se inicia
    this.sessionId = uuidv4();
    console.log('Session ID generado:', this.sessionId);
  }

  // Obtener el sessionId
  getSessionId(): string {
    return this.sessionId;
  }

  // Establecer el userId (cuando el usuario inicia sesión)
  setUserId(userId: string | null): void {
    this.userId = userId;
  }

  // Obtener el userId
  getUserId(): string | null {
    return this.userId;
  }

  // Cerrar sesión (resetear userId, pero mantener el sessionId)
  logout(): void {
    this.userId = null;
    console.log('Usuario deslogueado.');
  }
}
