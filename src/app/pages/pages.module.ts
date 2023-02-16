import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { StoryComponent } from './story/story.component';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    StoryComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ],
  exports: [
  ]
})
export class PagesModule { }
