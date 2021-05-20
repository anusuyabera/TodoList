import { Component, Input } from '@angular/core';
import { MaxLengthValidator } from '@angular/forms';
import { FormulaService } from './shared/services/formula.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public fm: FormulaService
  ) { }
}