import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  devices: Array<string> = ["Fan", "Light", "TV", "AC"]
  eventName: string = ''
  xyz(x: string) {
    this.eventName = x
  }
  showVersion() {
    alert('version 1.0.0')
  }
}