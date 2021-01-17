import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../model/menu';
import { Restaurant } from '../model/restaurant';
import { RestaurantsComponent } from '../restaurants/restaurants.component';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurants-modal',
  templateUrl: './restaurants-modal.component.html',
  styleUrls: ['./restaurants-modal.component.css']
})
export class RestaurantsModalComponent implements OnInit {

  menu: Menu;
  weekdays = []
  @Input() restaurant: Restaurant

  constructor(private restaurantService: RestaurantService) { }

  


  ngOnInit(): void {

    this.weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    this.restaurantService.getMenus(this.restaurant._id).subscribe( x => {
      
      this.menu = x.results[0];
    })
  }

}
