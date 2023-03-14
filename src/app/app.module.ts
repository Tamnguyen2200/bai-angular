import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { LeftbarsideComponent } from './leftbarside/leftbarside.component';
import { MenubarComponent } from './menubar/menubar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { TableComponent } from './table/table.component';
import { DialogComponent } from './dialog/dialog.component';
import { FilterPipe } from './pipe/filter.pipe';
import { AppRoutingModule } from './Route/app-routing.module';
import { ImportPageComponent } from './import-page/import-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { ExportEXlsComponent } from './export-exls/export-exls.component';
import { ImportEXlsComponent } from './import-exls/import-exls.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftbarsideComponent,
    MenubarComponent,
    SearchbarComponent,
    TableComponent,
    DialogComponent,
    FilterPipe,
    ImportPageComponent,
    ReportPageComponent,
    ExportEXlsComponent,
    ImportEXlsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    MatIconModule,
    FormsModule,
    MatRadioModule,
    MatDialogModule,
    AppRoutingModule,
    // DialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
