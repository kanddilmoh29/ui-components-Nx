import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'ui-accordion', 
  template: `
    <h1>Hello from Accordion</h1>
    `,
  styleUrls: ['./accordion.component.scss'],
  // tslint:disable-next-line: no-host-metadata-property
  host: { class: 'ui-accordion' }
})
export class AccordionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
