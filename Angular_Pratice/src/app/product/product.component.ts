import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,AfterViewInit {

  // @ViewChild('box')data:ElementRef
  @ViewChild('box')box:ElementRef;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.box);
    // 
  }
  ngAfterViewInit(): void {
    console.log(this.box);

    setTimeout(() => {
      this.box.nativeElement.style.backgroundColor='purple';
      this.box.nativeElement.style.color='white';
      this.box.nativeElement.innerHTML="This is modified text"
      
    }, 2000);
   
  }
  

}
