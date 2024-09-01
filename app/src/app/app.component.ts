import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private firestore: Firestore) {
    const itemCollection = collection(this.firestore, 'users');
    this.users$ = collectionData<User>(itemCollection);
  }

  users$: Observable<User[]>;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  trackByFn(index: number, item: any): number {
    return item.name;
  }
}

interface User {
  name: string;
}
