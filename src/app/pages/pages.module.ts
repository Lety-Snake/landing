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
import { AboutUsComponent } from './about-us/about-us.component';
import { DevTeamComponent } from './dev-team/dev-team.component';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { RatingService } from '../services/rating.service';
import { DocumentsComponent } from './documents/documents.component';


@NgModule({
  declarations: [
    StoryComponent,
    PagesComponent,
    GameplayComponent,
    NavBarComponent,
    DownloadComponent,
    VotingComponent,
    AboutUsComponent,
    DevTeamComponent,
    DocumentsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    RatingService // Declare your service here
  ]
})
export class PagesModule { }
