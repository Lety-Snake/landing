import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './rating/rating.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfRenderComponent } from './pdf-render/pdf-render.component';



@NgModule({
  declarations: [
    RatingComponent,
    PdfRenderComponent,

  ],
  imports: [
    CommonModule,
    PdfViewerModule
  ], exports: [RatingComponent, PdfRenderComponent]
})
export class SharedModule { }
