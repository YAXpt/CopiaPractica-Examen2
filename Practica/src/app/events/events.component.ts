import { Component, inject, OnInit, signal } from '@angular/core';
import { Event } from '../models/Event';
import { Events } from '../models/Events';
import { EventsService } from '../services/events.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-events',
  standalone: true,
  imports:  [ RouterModule ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

  private eventsService = inject(EventsService);

  clickCount = 0;
  visitCount = 0;

  ngOnInit(): void {

    // this.eventsService.getNumberEvents().subscribe((data) => {
    //   this.clickCount = data.clickCount;
    //   this.visitCount = data.visitCount;
    // });
  }

}
