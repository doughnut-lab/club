import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import { Gallery } from '../../../shared/models/gallery.model';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  p=1;
  galleries: any
  catogory;

  all : any;
  brakfast : any;
  lunch : any;
  dinner : any;
  beverage : any;
  dessert : any;
  list:any[] = ["breakfast","lunch","dinner","beverage"]
  url="http://localhost:3000/images/gallery/";
  constructor(private galleryservice: GalleryService) { }

  ngOnInit() {
    this.galleryservice.getFoodList().subscribe((res)=> {
      this.galleries= res as Gallery[];
    });
    // this.galleryservice.getFoodByCatogory("breakfast").subscribe((res)=>{
    //   console.log(res)
    //   this.brakfast= res as Gallery[];
    // });
    // this.galleryservice.getFoodByCatogory("lunch").subscribe((res)=>{
    //   this.lunch= res as Gallery[];
    // });
    // this.galleryservice.getFoodByCatogory("dinner").subscribe((res)=>{
    //   this.dinner= res as Gallery[];
    // });
    // this.galleryservice.getFoodByCatogory("beverage").subscribe((res)=>{
    //   this.beverage= res as Gallery[];
    // });
    // this.galleryservice.getFoodByCatogory("dessert").subscribe((res)=>{
    //   this.dessert= res as Gallery[];
    // });
    
    
    
  }

  selectCatogory(){
    this.galleryservice.getFoodByCatogory(this.catogory).subscribe((res)=>{
      this.galleries= res as Gallery[];
    });
  }

  setCatogory(catogory:String){
    this.galleryservice.setCatogory(catogory);
    console.log(catogory);
    if(catogory == "all"){
      this.galleryservice.getFoodList().subscribe((res)=> {
        this.galleries= res as Gallery[];
      });
      // for(var i in this.list){
      //   this.galleryservice.getFoodByCatogory(i).subscribe((res)=>{
      //     this.galleries= res as Gallery[];
      //     console.log(res)
      //   });
      // }
    }
    this.galleryservice.getFoodByCatogory(catogory).subscribe((res)=>{
      this.galleries= res as Gallery[];
      console.log(res)
    });

    // this.selectCatogory();
    // window.location.reload();
  }

  // getCatogory(){
  //   this.catogory = this.galleryservice.getCtogory();
  // }

}
