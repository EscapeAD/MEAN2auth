import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../navbar/navbar.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from './register.component';
import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from '../home/home.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule.withRoutes([
          {path:'', component: HomeComponent},
          {path:'register', component: RegisterComponent},
          {path:'login', component: LoginComponent},
          {path:'dashboard', component: DashboardComponent},
          {path:'profile', component: ProfileComponent}
        ])],
        declarations: [ HomeComponent, ProfileComponent,DashboardComponent, LoginComponent, RegisterComponent, NavbarComponent ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
