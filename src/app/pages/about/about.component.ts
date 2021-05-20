import { Component, OnInit } from '@angular/core';
import { FormulaService } from 'src/app/shared/services/formula.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  op: number = 1
  constructor(private tunir: FormulaService) {
    this.abc()
  }

  abc() {
    this.tunir.setPage('Hello');
  }

  ngOnInit(): void {
  }

}