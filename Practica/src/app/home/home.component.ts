import { Component, inject, OnInit, signal } from '@angular/core';
import { Pikmin } from '../models/Pikmin';
import { Pikmins } from '../models/Pikmins';
import { PikminService } from '../services/pikmin.service';
import { EventsService } from '../services/events.service';
import { SessionService } from '../services/session.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  private pikminService = inject(PikminService);
  private eventsService = inject(EventsService);
  private sessionService = inject(SessionService);

  pikmins = signal<Pikmin[]>([]);

  selectedPikmin = signal<string | null>(null);

  ngOnInit(): void {

    const sessionId = this.sessionService.getSessionId();

    const event = {
      sessionId: sessionId,
      llocEvent: 'Home',
      tipusEvent: 'visita'
    };

    this.eventsService.createEvent(event).subscribe();


    const baseUrl = 'http://localhost:3000';

    this.pikminService.getItems().subscribe((response: Pikmins) => {
      response.results.forEach((pikmin: Pikmin) => {
        pikmin.image = `${baseUrl}${pikmin.image}`;
      });
      this.pikmins.set(response.results);
    });
  }

  hideInfo(): void {
    this.selectedPikmin.set(null);
  }

  showInfo(pikmin: Pikmin): void {
    this.selectedPikmin.set(pikmin._id);
  }

}

