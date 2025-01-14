import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  currentUser: any = null;
  private userService = inject(UserService);
  private router = inject(Router);

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');
      if (userId) {
      this.userService.getUserById(userId).subscribe({
        next: (user) => {
          this.currentUser = user;
        },
        error: (err) => {
          console.error('Error al obtener el usuario:', err);
          this.logout();
        },
      });
    }
  }

  logout(): void {
    localStorage.removeItem('userId');
    this.currentUser = null;
    this.router.navigate(['/login']); // Redirige al usuario a la página de login
  }
}
