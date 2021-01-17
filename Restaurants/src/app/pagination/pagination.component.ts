import { newArray } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnChanges {
  @Input() totalItems;
  @Input() pageSize;
  @Output() emiterChangePage = new EventEmitter();

  currentPage: number;
  pageCount: number;
  pages: number[];

  constructor() { }

  ngOnChanges(): void {
    this.pageCount = Math.ceil(this.totalItems / this.pageSize);
    this.pages = Array(this.pageCount);
    this.currentPage = 1;
  }

  changePage(page){
    this.currentPage = page;
    this.emiterChangePage.emit({"page": this.currentPage});
  }

}
