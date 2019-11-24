import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionPlaygroundComponent } from './accordion-playground/accordion-playground.component';
import { AccordionDocsRoutingModule } from './accordion-docs.routing.module';

@NgModule({
  declarations: [AccordionPlaygroundComponent],
  imports: [
    CommonModule,
    AccordionDocsRoutingModule,
  ],
  exports: [AccordionPlaygroundComponent]
})
export class AccordionDocsModule { }
