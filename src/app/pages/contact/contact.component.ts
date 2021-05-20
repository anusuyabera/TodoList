import { Component, OnInit } from '@angular/core';
import { FormulaService } from 'src/app/shared/services/formula.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  op: number = 1
  constructor(
    private fm: FormulaService
  ) { }

  ngOnInit(): void {
    this.fm.setPage('Contact Page')
  }

  calculate(a: number) {
    this.op = this.fm.magic(a)
  }

}
