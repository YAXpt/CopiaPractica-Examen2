import { Component, inject, OnInit } from '@angular/core';
import { Estadistic } from '../models/Estadistic';
import { Estadistics } from '../models/Estadistics';
import { EstadisticService } from '../services/estadistic.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-last-events',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './last-events.component.html',
  styleUrl: './last-events.component.css'
})
export class LastEventsComponent {

  private estadisticService = inject(EstadisticService);

  estadistics = signal<Estadistic[]>([]);

  ngOnInit(): void {
    const baseUrl = 'http://localhost:3000';

    this.estadisticService.getItems().subscribe((response: Estadistics) => {
      this.estadistics.set(response.results);
    });
  }

}


