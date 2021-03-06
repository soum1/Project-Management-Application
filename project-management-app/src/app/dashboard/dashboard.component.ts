import { TeamService } from './../services/team.service';
import { TaskService } from './../services/task.service';
import { ProjectService } from './../services/project.service';

import { Component, OnInit } from '@angular/core';
import { Project } from './../models/project';
import { Task } from './../models/task';
import { Team } from './../models/team';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects: Project[];
  tasks: Task[];
  teamMembers: Team[];
  constructor(private projectService: ProjectService, private taskService: TaskService, private teamService: TeamService) {
  }

  ngOnInit() {
    this.getProjects();
    this.getTasks();
    this.getMembers();
  }
  getProjects() {
    this.projectService.getAllProjects()
    .subscribe(projects => this.projects = projects);
  }
  getTasks() {
    this.taskService.getAllTasks()
    .subscribe(tasks => this.tasks = tasks);
  }
  getMembers() {
    this.teamService.getAllMembers()
    .subscribe(members => this.teamMembers = members);
  }



}
