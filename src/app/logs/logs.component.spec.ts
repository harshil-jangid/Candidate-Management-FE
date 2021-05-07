import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { LogsService } from '../services/logs.service';
import { LogsComponent } from './logs.component';
// import { }

describe('LogsComponent', () => {
  let component: LogsComponent;
  let fixture: ComponentFixture<LogsComponent>;
  let logsService: LogsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ LogsComponent ],
      providers: [LogsService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsComponent);
    logsService = TestBed.get(LogsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Show Logs Table', () =>{
    const table= fixture.debugElement.query(By.css('#main-container'));
    expect(table).toBeTruthy();
  });

  it('should Show Audit HIstory', () =>{
    const table= fixture.debugElement.query(By.css('#logInfoModal'));
    expect(table).toBeTruthy();
  });

  it('should have a back button', () =>{
    const table= fixture.debugElement.query(By.css('#back'));
    expect(table).toBeTruthy();
  });
});
