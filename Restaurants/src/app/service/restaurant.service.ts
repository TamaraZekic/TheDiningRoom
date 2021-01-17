import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantList } from '../model/restaurant-list';
import { map } from 'rxjs/operators';
import { MenuList } from '../model/menu-list';
import { Menu } from '../model/menu';

const serverURL = "http://localhost:3000/api/restaurants";


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }


  getAll(newParams): Observable<RestaurantList>{

    let queryParams = {};

    if(newParams){
      queryParams = {
        params: new HttpParams()
        .set("sort", newParams.sort || "")
        .set("sortDirection", newParams.sortDirection || "desc")
        .set("page", newParams.page || 1)
        .set("pageSize", newParams.pageSize || 12)
        .set("filter", newParams.filter && JSON.stringify(newParams.filter) || "")
      };
    }


    return this.http.get(serverURL,queryParams).pipe(map( response => {
      return new RestaurantList(response);
    }))
  }

  getMenus(restaurantID): Observable<MenuList>  {
    return this.http.get(serverURL + "/" + restaurantID + "/menus").pipe(map(res => {
      return new MenuList(res);
    }));
  }
}
