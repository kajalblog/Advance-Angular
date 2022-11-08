import { Component, OnInit } from '@angular/core';
import { DServiceService } from '../d-service.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

Users:any;
successMsg:any;
  constructor(private dService:DServiceService) { }

  ngOnInit(): void {
    this.dService.readData().subscribe((res)=>{
      console.log("result",res);
      this.Users=res.data;
    })
  }
  deleteData(a:any)
  {
        this.dService.deleteUser(a).subscribe((res)=>{
          console.log(res,"selected");
          this.successMsg=res.message
        })
        this.dService.readData().subscribe((res)=>{
          console.log("result",res);
          this.Users=res.data;
        })
  }
  update()
  {
    
  }
}
