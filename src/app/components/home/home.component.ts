import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PROJECTS } from 'src/app/data';
import { Project } from 'src/app/types/project';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects = PROJECTS

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openProject(project: Project) {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {data: project});
  }

}
