import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';


interface USER {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  reg_date: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
ELEMENT_DATA: USER[] = [];
isLoading = false;
totalRows = 0;
pageSize = 5;
currentPage = 0;
pageSizeOptions: number[] = [5, 10, 25, 100];

displayedColumns: string[] = ['id', 'firstname', 'lastname', 'email', 'reg_date'];
dataSource: MatTableDataSource<USER> = new MatTableDataSource();

@ViewChild(MatPaginator)
paginator!: MatPaginator;

ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}

ngOnInit(): void {
  //Load initial data
  this.loadData();
}

loadData() {
  this.isLoading = true;
  let URL = `http://65.0.155.254:5001/admin/department/list?pageno=${this.currentPage}&per_page=${this.pageSize}`;


  fetch(URL)
    .then(response => response.json())
    .then(data => {
      this.dataSource.data = data.rows;
      setTimeout(() => {
        this.paginator.pageIndex = this.currentPage;
        
        this.paginator.length = data.count;
      });
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.isLoading = false;
    });
}

pageChanged(event: PageEvent) {
  console.log({ event });
  this.pageSize = event.pageSize;
  this.currentPage = event.pageIndex;
  this.loadData();
}

  constructor(private breakpointObserver: BreakpointObserver, private apiService:ApiService) {

  }
}

