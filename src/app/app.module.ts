import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './Components/baner/baner.component';
import { PersonalInformationComponent } from './Components/personal-information/personal-information.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { ContactComponent } from './Components/contact/contact.component';
import { EducationComponent } from './Components/education/education.component';
import { WorkExperienceComponent } from './Components/work-experience/work-experience.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BreakpointObserver,LayoutModule } from '@angular/cdk/layout';
import { ResponsiveDirective } from './directives/responsive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    PersonalInformationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    EducationComponent,
    WorkExperienceComponent,
    [ResponsiveDirective],
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
