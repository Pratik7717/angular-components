import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  productName:string="";
  productPrice:number=0;
  products=[
    {name: "test" , price: 0},
    {name: "test" , price: 0}
  ];

  constructor() { }

  add():void
  {
    //this.products.push(this.productName);
    this.products.push({name:this.productName,price:this.productPrice});
    this.productName='';
    this.productPrice=0;
  }

  ngOnInit(): void {
  }

}
