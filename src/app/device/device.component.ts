import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})
export class DeviceComponent implements OnInit {

  @Input() info: string = ''
  @Output() clickedElement: EventEmitter<string> = new EventEmitter<string>()

  state: string = 'OFF'

  constructor() { }

  ngOnInit(): void {
  }

  elementClick() {
    this.clickedElement.emit(this.info)
  }

}