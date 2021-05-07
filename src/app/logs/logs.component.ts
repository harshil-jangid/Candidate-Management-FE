import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Candidate } from '../models/candidate';
import { Logs } from '../models/logs';
import { LogsService } from '../services/logs.service'
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  detailOldLog: any;
  detailNewLog: any;
  currentLog: any;

  constructor(
    private logsService: LogsService
  ) { }

  public logs: Logs[] = [];
  public oldValues: any[]=[];
  public newValues: any[]=[];

  ngOnInit(): void {
    this.getLogs();

  }

  public getLogs(): void{
    this.logsService.getLogs().subscribe(
      (response: Logs[])=>{
        this.logs=response;
        console.log(this.logs);
        for(let log of this.logs){
          var jsonObjOld = JSON.parse(log.oldValue);
          var jsonObjNew = JSON.parse(log.newValue);
          this.oldValues.push(jsonObjOld); 
          this.newValues.push(jsonObjNew); 

          console.log(jsonObjOld);
        }
        

      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

  public onOpenModal(oldValue: any,newValue: any, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'details') {
      this.detailOldLog = oldValue;
      this.detailNewLog = newValue;
      console.log(this.detailOldLog);
      console.log(this.detailNewLog);
      button.setAttribute('data-target', '.bd-example-modal-lg');
    }
    container?.appendChild(button);
    button.click();
  }

  public onOpenModal2(candidate: Candidate, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'details') {
      this.currentLog = candidate;
      console.log(candidate);
      button.setAttribute('data-target', '.bd-example-modal-lg2');
    }
    container?.appendChild(button);
    button.click();
  }

}
