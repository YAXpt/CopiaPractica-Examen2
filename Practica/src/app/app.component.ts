import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Practica';

  constructor(private sessionService: SessionService) {
    console.log('Session ID:', this.sessionService.getSessionId());
    console.log('User ID:', this.sessionService.getUserId());
  }
}
