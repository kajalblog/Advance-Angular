import { Component, OnInit } from '@angular/core';
import { filter, forkJoin, map, of, pipe } from 'rxjs';
import { DServiceService } from '../d-service.service';

@Component({
  selector: 'app-day7',
  templateUrl: './day7.component.html',
  styleUrls: ['./day7.component.css']
})
export class Day7Component implements OnInit {
  AllUser:any[]=[];
  searchObj={
    CandidateId:'',
    FromDate:'',
    ToDate:'',
  }

  constructor(private api:DServiceService) { }

  ngOnInit(): void {
    const squareOdd = of(1, 2, 3, 4, 5)
  .pipe(
    filter(n => n % 2 !== 0),
    map(n => n * n)
  );
  squareOdd.subscribe(x => console.log(x));
    this.api.getAllUser().subscribe((res)=>{
      console.log(res.data);
      this.AllUser=res.data;
      // console.log(this.AllUser);

      forkJoin([this.api.getAllUser(),this.api.getAllAtendance(this.searchObj)]).subscribe((res)=>{
        console.log(res);
        console.log(res[0]);
        console.log(res[1]);

      })

    })
  }
  onSerach()
  {
    this.api.getAllAtendance(this.searchObj).subscribe((res)=>{
      console.log(res);
      this.AllUser=res['data'];
    })
  }

}
