import { Component, Input, OnInit } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit{
@Input() width:any="100%"
@Input() height:any="100%";

 textareaWidth:any;
 textareaHeight:any;
 textareResize=false



ngOnInit(){


}

onResized(event: ResizedEvent): void {

  if(this.textareaWidth==Math.round(event.newRect.width )||this.textareaHeight==Math.round(event.newRect.height)){
    this.textareResize=true

  }
  this.textareaWidth = Math.round(event.newRect.width);
  this.textareaHeight = Math.round(event.newRect.height);
 
  if(this.textareResize){
    this.height=Math.round(event.newRect.height)+'px';
  this.width=Math.round(event.newRect.width) +'px';
  }
  

}



}
