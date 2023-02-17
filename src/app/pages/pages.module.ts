import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { StoryComponent } from './story/story.component';
import { PagesComponent } from './pages.component';
import { NavBarComponent } from '../layout/nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    StoryComponent,
    PagesComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  exports: [
  ]
})
export class PagesModule { }
