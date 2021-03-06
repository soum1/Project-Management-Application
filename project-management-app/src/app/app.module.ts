import { TaskService } from './services/task.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { TeamsComponent } from './teams/teams.component';
import { TasksComponent } from './tasks/tasks.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectService } from '././services/project.service';
import { HttpClientModule } from '@angular/common/http';
import { ExploreComponent } from './explore/explore.component';
import { ExploreLocationsComponent } from './explore-locations/explore-locations.component';
import { ExploreProjectsComponent } from './explore-projects/explore-projects.component';
import { ExploreTeamsComponent } from './explore-teams/explore-teams.component';
import { TechnologyComponent } from './technology/technology.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    DashboardComponent,
    ProjectComponent,
    TeamsComponent,
    TasksComponent,
    ExploreComponent,
    ExploreLocationsComponent,
    ExploreProjectsComponent,
    ExploreTeamsComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProjectService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
