import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { MatDividerModule } from '@angular/material/divider';
import { AboutComponent } from './components/about/about.component';
import { ProjectDialogComponent } from './components/project-dialog/project-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { ExperienceComponent } from './components/experience/experience.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { EducationComponent } from './components/education/education.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: AppComponent },

]



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ProjectDialogComponent,
    ExperienceComponent,
    EducationComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {anchorScrolling:'enabled'}),
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatDividerModule,
    MatDialogModule,
    MatChipsModule,
    MatCardModule,
    MatListModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
