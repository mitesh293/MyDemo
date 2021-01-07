import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VanillaTiltSettings } from 'angular-tilt';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapsed: Boolean = true;
  linkType: string = 'home';
  tiltSettings: VanillaTiltSettings | undefined;

  constructor(private router: Router) { }

  ngOnInit() {
    this.tiltSettings = {scale : 1.4};
  }

  changeActiveTab(tabName: string){
    this.linkType = tabName;
  }
  get user(): any {
    return 'User';
  }
  get userImage() : any {
    let image ='https://ang-image.s3.ap-south-1.amazonaws.com/Johan.jpg';
    return image;
  }
}
