import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImportPageComponent } from '../import-page/import-page.component';
import { Routes, RouterModule } from '@angular/router';
import { ReportPageComponent } from '../report-page/report-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/reportPage', pathMatch: 'full' },
  { path: 'importPage', component: ImportPageComponent },
  { path: 'reportPage', component: ReportPageComponent }
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
