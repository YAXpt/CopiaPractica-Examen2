import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';
import { ItemService } from '../services/item.service';
import { RouterModule } from '@angular/router';
import { PikapiItem } from '../models/PikapiItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  private userService = inject(UserService);
  private itemService = inject(ItemService);
  private route = inject(ActivatedRoute);

  userId: string = '';
  user = signal<User | null>(null);
  items = signal<PikapiItem[]>([]);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
      console.log(this.userId);
      this.loadUser();
    });

  }

  loadUser() {
    this.userService.getUserById(this.userId).subscribe((response: User) => {
      this.user.set(response);
      this.loadItems(response.buyed);
    });
  }

  loadItems(buyedIds: string[]): void {
    this.items.set([]);

    buyedIds.forEach(id => {
      this.itemService.getItem(id).subscribe(
        (item: PikapiItem) => {
          this.items.update(items => [...items, item]);

        });

    });
  }
}
