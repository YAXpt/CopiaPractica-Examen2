import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { EventsService } from '../services/events.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private sessionService = inject(SessionService);
  private eventsService = inject(EventsService);
  private userService = inject(UserService);
  private router = inject(Router);

  loginForm = new FormGroup({
    username: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', { validators: [Validators.required, Validators.email] })
  });

  ngOnInit(): void {

    const sessionId = this.sessionService.getSessionId();

    const event = {
      sessionId: sessionId,
      llocEvent: 'Login',
      tipusEvent: 'visita'
    };

    this.eventsService.createEvent(event).subscribe();
  }


  onSubmit() {
    if (this.loginForm.valid) {
      const user = {
        username: this.loginForm.value.username as string,
        email: this.loginForm.value.email as string
      };

      this.userService.loginUser(user).subscribe({
        next: (response) => {
          this.router.navigate(['/area', response._id]);
        },
        error: (err) => {
          alert('Error al iniciar sesión: ' + err.message);
        }
      });
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

}
