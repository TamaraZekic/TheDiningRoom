import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() fullIcon: string;
  @Input() emptyIcon: string;
  @Input() grade: number;
  emptyIconArray;
  fullIconArray;

  constructor() { }

  ngOnInit(): void {
    this.emptyIconArray = new Array(5 - this.grade);
    this.fullIconArray = new Array(this.grade);
  }

}
