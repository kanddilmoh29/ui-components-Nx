import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocsRootComponent } from './docs/docs-root/docs-root.component';


const routes: Routes = [
  { path: '', redirectTo: 'docs', pathMatch: 'full' },
  { path: '**', component: DocsRootComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
