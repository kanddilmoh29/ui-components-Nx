import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsRootComponent } from './docs-root/docs-root.component';



@NgModule({
  declarations: [DocsRootComponent], 
  imports: [
    CommonModule,
  ],
  exports: [DocsRootComponent]
})
export class DocsModule { } 
