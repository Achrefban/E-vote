import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { LogComponent } from './Vote space/log.component';
import { ElectionTypeComponent } from './election-type/election-type.component';
import { UpdateCandidatComponent } from './update-candidat/update-candidat.component';
import { ElecteurAuthComponent } from './electeur-auth/electeur-auth.component';
import { FingerPrintComponent } from './finger-print/finger-print.component';
import { UpdateUserComponent } from './update-user/update-user.component';

import { EnregistrementComponent } from './enregistrement/enregistrement.component';
import { EmpreinteEnComponent } from './empreinte-en/empreinte-en.component';
import { ElecteursComponent } from './electeurs/electeurs.component';
import { RespElecteurComponent } from './resp-electeur/resp-electeur.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { BrowserModule } from '@angular/platform-browser';
import { ElecteursStatsComponent } from './electeurs-stats/electeurs-stats.component';
import { ChartsModule } from 'ng2-charts';
import { ElecteurUpdateComponent } from './electeur-update/electeur-update.component';
import { ElecteurRecentComponent } from './electeur-recent/electeur-recent.component';
import { ElecteurUpdateRecentComponent } from './electeur-update-recent/electeur-update-recent.component';
import { ElectionsessionComponent } from './electionsession/electionsession.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown-angular7';
import { ListElectionsessionComponent } from './list-electionsession/list-electionsession.component';




@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        NgbModule,
        ToastrModule.forRoot(),
        ReactiveFormsModule,
        BrowserModule,
        FormsModule,
        Ng2SearchPipeModule,
        ChartsModule,
        NgMultiSelectDropDownModule.forRoot()


    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    UserLayoutComponent,
    LogComponent,
    ElectionTypeComponent,
    UpdateCandidatComponent,
    ElecteurAuthComponent,
    FingerPrintComponent,
    UpdateUserComponent,
    ElecteurAuthComponent,
    EnregistrementComponent,
    EmpreinteEnComponent,
    ElecteursComponent,
    RespElecteurComponent,
    UploadFileComponent,
    JwPaginationComponent,
    ElecteursStatsComponent,
    ElecteurUpdateComponent,
    ElecteurRecentComponent,
    ElecteurUpdateRecentComponent,
    ElectionsessionComponent,
    ListElectionsessionComponent
   


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
