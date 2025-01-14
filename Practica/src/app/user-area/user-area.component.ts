import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PikapiItem } from '../models/PikapiItem';
import { PikapiItems } from '../models/PikapiItems';
import { ItemService } from '../services/item.service';
import { UserService } from '../services/user.service';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-area',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './user-area.component.html',
  styleUrl: './user-area.component.css'
})

export class UserAreaComponent implements OnInit {
  private itemService = inject(ItemService);
  private userService = inject(UserService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  userId = '';
  items = signal<PikapiItem[]>([]);

  ngOnInit(): void {
    const baseUrl = 'http://localhost:3000';

    this.itemService.getItems().subscribe((response: PikapiItems) => {
      response.results.forEach((item: PikapiItem) => {
        item.image = `${baseUrl}${item.image}`;
      });
      this.items.set(response.results);
    });

    this.route.params.subscribe((params) => {
      this.userId = params['id'];
    });

  }

  buyItem(item: PikapiItem): void {
    console.log(item);
    console.log(item.stock);
    if (item.stock === 0) {
      alert('No hay stock');
      return;
    }

    this.itemService.putItem(item._id).subscribe(() => {
      this.items.set([...this.items()]);
      this.userService.updateUserBuyed(this.userId, item._id).subscribe(() => {
        alert(`Has comprado "${item.name}" por ${item.price}€`);
        });
      });
  }
}
