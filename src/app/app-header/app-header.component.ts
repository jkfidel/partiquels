import { Component, OnInit, HostListener, Inject, NgModule } from '@angular/core';
import { WINDOW } from "../services/window.service";
import { BrowserModule } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  private clck : boolean = false;
  private scrll : boolean = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) {}
  @HostListener("window:scroll", [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if(offset> 200){
        console.log(offset);
        this.scrll = true;
        console.log(this.scrll);
    }else{
      this.scrll = false;
      console.log(this.scrll);
    }
  }

  ngOnInit() {
  }
  mobclck(){
  	if(this.clck){
  		this.clck = false;
  	}else{
  		this.clck = true;
  	}
	
  }

}
