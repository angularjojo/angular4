import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedClass(columnName){
    //return (columnName == this.sorting.column) ? 'glyphicon glyphicon-arrow-up': 'glyphicon glyphicon-arrow-down';

    if(columnName == this.sorting.column)
    {
      return this.sorting.descending ? "fa fa-arrow-down" : "fa fa-arrow-up"
    }
  }
  
  changeSorting(columnName): void{
    var sort = this.sorting;
    if (sort.column == columnName) {
      sort.descending = !sort.descending;
    } else {
      sort.column = columnName;
      sort.descending = false;
    }
  }
  
  convertSorting(): string{
    return this.sorting.descending ? '-' + this.sorting.column : this.sorting.column;
  }

  data: any[] = [
    {
      Name: 'Data 1',
      Amount: 100.23,
      Date: 1433588216000
    },
    {
      Name: 'Data 2',
      Amount: 0.875623,
      Date: 1432387616000
    },
    {
      Name: 'Data 3',
      Amount: .010123,
      Date: 1461820116000
    },
    {
      Name: 'Data 4',
      Amount: 1873.02301,
      Date: 1423128616000
    },
    {
      Name: 'Data 5',
      Amount: 93,
      Date: 1439220116000
    }
  ];

  columns: any[] = [
    {
      display: 'Column 1',
      variable: 'Name', 
      filter: 'lowercase' 
    },
    {
      display: 'Column 2',
      variable: 'Amount', 
      filter: 'currency'
    },
    {
      display: 'Column 3', 
      variable: 'Date', 
      filter: 'date' 
    }
  ];

  sorting: any = {
    column: 'Name', 
    descending: false
  };


}
