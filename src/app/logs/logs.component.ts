import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Logs } from '../models/logs';
import { LogsService } from '../services/logs.service'
@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  constructor(
    private logsService: LogsService
  ) { }

  public logs: Logs[] = [];

  ngOnInit(): void {
    this.getLogs();

  }

  public getLogs(): void{
    this.logsService.getLogs().subscribe(
      (response: Logs[])=>{
        this.logs=response;
        console.log(this.logs);
      },
      (error:HttpErrorResponse)=>{
        alert(error.message);
      }
    );
  }

}
