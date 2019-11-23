import { AccordionPlaygroundComponent } from './accordion-docs/accordion-playground/accordion-playground.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuredContentDocsRoutingModule } from './structured-content-docs-routing.module';


@NgModule({
  declarations: [AccordionPlaygroundComponent],
  imports: [
    CommonModule,
    StructuredContentDocsRoutingModule
  ],
  exports: [AccordionPlaygroundComponent]
})
export class StructuredContentDocsModule { }
