import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openProject() {
    const dialogRef = this.dialog.open(ProjectDialogComponent);
  }

}
