import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // foodDetails
  
  foodDetails=[
    {
      id:1,
      foodName:"Pizza",
      foodDetails:"mushroom with cheese",
      foodPrice:10,
      foodImg:"../../../assets/img/pizzaHomeimg.jpg",
    
      
    },
    {
      id:2,
      foodName:"Burger",
      foodDetails:"chicken Burger",
      foodPrice:20,
      foodImg:"../../../assets/img/burgernew.jpg"
    },
    {
      id:3,
      foodName:"French Toast",
      foodDetails:"Authentic french toast",
      foodPrice:6,
      foodImg:"../../../assets/img/frenchtost.jpg"
    },
    {
      id:4,
      foodName:"Pasta",
      foodDetails:"Italian Pasta",
      foodPrice:16,
      foodImg:"../../../assets/img/pasta.jpg"
    },
    {
      id:5,
      foodName:"salad",
      foodDetails:"Fresh salad",
      foodPrice:7,
      foodImg:"../../../assets/img/salad.jpg"
    },
    {
      id:6,
      foodName:"Pasta",
      foodDetails:"Italian Pasta",
      foodPrice:16,
      foodImg:"../../../assets/img/pasta.jpg"
    },
    {
      id:7,
      foodName:"French Toast",
      foodDetails:"Authentic french toast",
      foodPrice:6,
      foodImg:"../../../assets/img/frenchtost.jpg"
    },
    {
      id:8,
      foodName:"Burger",
      foodDetails:"chicken Burger",
      foodPrice:20,
      foodImg:"../../../assets/img/burgernew.jpg"
    },




    

  ]
}
