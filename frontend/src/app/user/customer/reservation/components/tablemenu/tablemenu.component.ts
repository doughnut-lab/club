import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GalleryService } from 'src/app/shared/services/gallery.service';
import { Gallery } from '../../../../../shared/models/gallery.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-tablemenu',
  templateUrl: './tablemenu.component.html',
  styleUrls: ['./tablemenu.component.css']
})
export class TablemenuComponent implements OnInit {
  //@Output()
  //sendFoodList: EventEmitter<Array<String>> = new EventEmitter<Array<String>>(); //creating an output event
  p=1;
  galleries: any
  catogory;

  all : any;
  brakfast : any;
  lunch : any;
  dinner : any;
  beverage : any;
  dessert : any;

  foodlist : Array<String> = [];

  url="http://localhost:3000/images/gallery/";
  constructor(private galleryservice: GalleryService) { }

  ngOnInit() {
    this.galleryservice.getFoodList().subscribe((res)=> {
      this.galleries= res as Gallery[];
    });
    // this.galleryservice.getFoodByCatogory("brakfast").subscribe((res)=>{
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

  setCatogory(catogory){
    this.galleryservice.setCatogory(catogory);
    console.log(this.catogory);
    // this.selectCatogory();
    // window.location.reload();
  }

  // getCatogory(){
  //   this.catogory = this.galleryservice.getCtogory();
  // }

  addFood(name){
    this.foodlist.push(name);
    console.log(this.foodlist);
  }

  setFoodArray(){
    // this.sendFoodList.emit(this.foodlist)
    this.galleryservice.addFoodArray(this.foodlist);
    
  }
  

}
