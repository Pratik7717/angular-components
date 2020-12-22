import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  productName:string="";
  products=["test","test"];

  constructor() { }

  add():void
  {
    this.products.push(this.productName);
    this.productName='';
  }

  ngOnInit(): void {
  }

}
