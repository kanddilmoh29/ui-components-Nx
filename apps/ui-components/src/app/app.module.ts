import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '@workshop/material';
import { AppComponent } from './app.component';
import { FormDocsModule } from './form-docs/form-docs.module';
import { NavigationDocsModule } from './navigation-docs/navigation-docs.module';
import { StructuredContentDocsModule } from './structured-content-docs/structured-content-docs.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    StructuredContentDocsModule,
    NavigationDocsModule,
    FormDocsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
