import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] =[
    new Recipe(
      'TEST NAME',
      'Amazing dadad daad',
      'https://media.istockphoto.com/id/535786572/photo/grilled-striploin-steak.jpg?s=1024x1024&w=is&k=20&c=vCxAYDoDNDQRdmylqzt1c9xZmc6Rq3OvZ4t6u-xQU-c='),
      new Recipe(
        'TEST NAME2',
        'This is just a recipe',
        'https://www.shutterstock.com/image-photo/notepad-your-recipe-herbs-spices-260nw-370298699.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
