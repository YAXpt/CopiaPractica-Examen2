import { Component, inject, OnInit, signal } from '@angular/core';
import { Event } from '../models/Event';
import { Events } from '../models/Events';
import { EventsService } from '../services/events.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-last-events',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './last-events.component.html',
  styleUrl: './last-events.component.css'
})
export class LastEventsComponent {

  private eventsService = inject(EventsService);

  events = signal<Event[]>([]);

  ngOnInit(): void {

    this.eventsService.getLastEvents().subscribe((response: Events) => {
      this.events.set(response.results);
    });
  }

}
