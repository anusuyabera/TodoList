import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Anusuya Bera'
  dogcount = 1
  dogs = [
    {
      name: "Jimmy",
      activity: [
        "walk",
        "eat",
        "bite people"
      ],
      image: "https://th.bing.com/th/id/OIP.EkOxo19lVUaq6eVlVPxZ2wHaE7?w=239&h=180&c=7&o=5&dpr=1.25&pid=1.7"
    },
    {
      name: "Tommy",
      activity: [
        "sleep",
        "eat",
        "swim"
      ],
      image: "https://th.bing.com/th/id/OIP.Encpy4zhjNpIb0NAqlbLfwHaE7?w=239&h=180&c=7&o=5&dpr=1.25&pid=1.7"
    },
    {
      name: "Brad",
      activity: [
        "walk",
        "swim",
        "chase cats"
      ],
      image: ""
    }
  ]
  addDog(){
    this.dogcount += 1
  }
}
