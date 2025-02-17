import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { EventsService } from '../services/events.service';
import { SessionService } from '../services/session.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})


export class RegisterComponent {
  private userService = inject(UserService);
  private eventsService = inject(EventsService);
    private sessionService = inject(SessionService);


  registerForm = new FormGroup({
    username: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', { validators: [Validators.required, Validators.email] })
  });

  onSubmit() {
    const sessionId = this.sessionService.getSessionId();

    const event = {
      sessionId: sessionId,
      llocEvent: 'Register',
      tipusEvent: 'click'
    };
    this.eventsService.createEvent(event).subscribe();

    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      const user = {
        username: this.registerForm.value.username as string,
        email: this.registerForm.value.email as string
      };
      this.userService.createUser(user).subscribe({
        next: (response) => alert('Nuevo usuario registrado, inicie sesión desde "Login"'),
        error: (err) => alert('Error al registrar usuario'),
      });
    } else {
      alert('Algun dato del formulario es incorrecto');
    }
  }

}
