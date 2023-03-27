import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/service/order-details.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  activatedId:any;
  menuData:any;
  constructor(private activeRoute:ActivatedRoute, private service:OrderDetailsService){}
  ngOnInit(): void {
    this.activatedId=this.activeRoute.snapshot.paramMap.get("id")
    console.log("id:",this.activatedId);
    if(this.activatedId){
      this.menuData=this.service.foodDetails.filter((value)=>{
        return this.activatedId==value.id;
      })
      
  
    }
  
  }
  


}
