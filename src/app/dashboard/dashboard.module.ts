import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatDialogModule} from '@angular/material/dialog';

import { EditModalComponent } from '../edit-modal/edit-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@NgModule({
  declarations: [DashboardComponent,EditModalComponent],
  entryComponents:[EditModalComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ]
})
export class DashboardModule { }
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}