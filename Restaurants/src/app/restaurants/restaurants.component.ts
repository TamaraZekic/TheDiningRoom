import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantList } from '../model/restaurant-list';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurantList: RestaurantList;

  parameters = {
    sort:"rating",
    sortDirection: "desc",
    page: 1,
    pageSize: 12,
    filter: {
      priceFrom:1,
      priceTo:5,
      cuisine:""
    }
  }

  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(urlParametarObjekat => {
      
      let cuisine = urlParametarObjekat['cuisine'] == 'all' ? '' : urlParametarObjekat['cuisine'];
      this.parameters.filter.cuisine = cuisine;
      this.parameters.page = 1;
      this.getRestaurants();
    });
  }

  getRestaurants(newParams?) {

    if(newParams){
      this.parameters.page = newParams.page;
    }
    this.restaurantService.getAll(this.parameters).subscribe(data => {
      this.restaurantList = data;
      console.log(this.restaurantList);
    })
  }

}
