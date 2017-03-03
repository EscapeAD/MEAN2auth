import { async, ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../navbar/navbar.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

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
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });
  it('should be named `HomeComponent`', () => {
    expect(HomeComponent['name']).toBe('HomeComponent');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Mean Auth App!'`, async(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('MEAN Authentication App');
  }));
});
