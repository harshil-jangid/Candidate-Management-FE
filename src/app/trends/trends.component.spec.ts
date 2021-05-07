import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TrendsComponent } from './trends.component';

describe('TrendsComponent', () => {
  let component: TrendsComponent;
  let fixture: ComponentFixture<TrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ TrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Skills Tab', () =>{
    const table= fixture.debugElement.query(By.css('#skills'));
    expect(table).toBeTruthy();
  });

  it('should have Location Tab', () =>{
    const table= fixture.debugElement.query(By.css('#location'));
    expect(table).toBeTruthy();
  });

  it('should show Skills Graph', () =>{
    const table= fixture.debugElement.query(By.css('ngx-charts-bar-vertical-2d'));
    expect(table).toBeTruthy();
  });

  it('should show Location Graph', () =>{
    const table= fixture.debugElement.query(By.css('ngx-charts-bar-vertical-2d'));
    expect(table).toBeTruthy();
  });

  it('should have a back button', () =>{
    const table= fixture.debugElement.query(By.css('#back'));
    expect(table).toBeTruthy();
  });
});
