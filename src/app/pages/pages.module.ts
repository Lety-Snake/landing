import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { StoryComponent } from './story/story.component';
import { PagesComponent } from './pages.component';
import { NavBarComponent } from '../layout/nav-bar/nav-bar.component';
import { GameplayComponent } from './gameplay/gameplay.component';
import { DownloadComponent } from './download/download.component';
import { VotingComponent } from './voting/voting.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    StoryComponent,
    PagesComponent,
    GameplayComponent,
    NavBarComponent,
    DownloadComponent,
    VotingComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ],
  exports: [
  ]
})
export class PagesModule { }
