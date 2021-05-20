import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  constructor() { }

  title: string = ''

  magic(a: number) {
    return a * a;
  }

  setPage(a: string) {
    this.title = a
  }
  
}