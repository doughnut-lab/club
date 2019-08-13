import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import {} from '../../../assets/js/plugins/morris/morris.min.js'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    //this.loadScript('../'); 
  
  }
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
  // ngAfterViewInit(){
  //   require('src/assets/js/plugins/morris/morris.min.js');
  // }

}
