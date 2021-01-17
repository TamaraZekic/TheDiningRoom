import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from '../model/restaurant';
import { RestaurantsModalComponent } from '../restaurants-modal/restaurants-modal.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() restaurant: Restaurant;
  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
    
  }

  openModal(){
    const modalRef = this.modal.open(RestaurantsModalComponent);
    modalRef.componentInstance.restaurant = this.restaurant;
    console.log(this.restaurant.days);
  }

}
