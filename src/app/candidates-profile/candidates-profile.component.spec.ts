import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig } from 'angularx-social-login';
import { LoginService } from '../services/login-service';
import { CandidatesProfileComponent } from './candidates-profile.component';
import { By } from '@angular/platform-browser';


describe('CandidatesProfileComponent', () => {
  let component: CandidatesProfileComponent;
  let fixture: ComponentFixture<CandidatesProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterModule,FormsModule,RouterTestingModule],
      declarations: [ CandidatesProfileComponent ],
      providers:[RouterModule,LoginService,SocialAuthService,{
        provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('189708597523-qd75krq60qp9p1viv6hs11n88rgqgh8u.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig,
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table', () =>{
    const table= fixture.debugElement.query(By.css('table')).nativeElement;
    expect(table).toBeTruthy();
  });

  it('should have a Add Candidate Button', () =>{
    const table= fixture.debugElement.query(By.css('#Add-Candidate')).nativeElement;
    expect(table).toBeTruthy();
  });

  it('should Update Candidate Modal ', () =>{
    const table= fixture.debugElement.query(By.css('#updateCandidateModal'));
    expect(table).toBeTruthy();
  });

  it('should Add Candidate Modal', () =>{
    const table= fixture.debugElement.query(By.css('#addCandidateModal'));
    expect(table).toBeTruthy();
  });

  it('should Delete Candidate Modal', () =>{
    const table= fixture.debugElement.query(By.css('#deleteCandidateModal'));
    expect(table).toBeTruthy();
  });

  it('should Show Candidate Info Modal', () =>{
    const table= fixture.debugElement.query(By.css('#viewCandidate'));
    expect(table).toBeTruthy();
  });

  it('should Update Candidate  ', () =>{
    const table= fixture.debugElement.query(By.css('#update'));
    expect(table).toBeTruthy();
  });

  it('should Show Logs button', () =>{
    const table= fixture.debugElement.query(By.css('#log'));
    expect(table).toBeTruthy();
  });

  it('should Show trends button', () =>{
    const table= fixture.debugElement.query(By.css('#trends'));
    expect(table).toBeTruthy();
  });

  it('should Show search bar', () =>{
    const table= fixture.debugElement.query(By.css('#search'));
    expect(table).toBeTruthy();
  });

});
