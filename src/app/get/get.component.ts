import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {
  emp :any;
  constructor(private service:DataService) { }

  ngOnInit() {
    var observableresult=this.service.Select();
    observableresult.subscribe((result)=>{
      console.log(result);
      this.emp=result;
    });

  }

}
