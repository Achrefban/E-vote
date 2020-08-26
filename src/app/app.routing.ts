import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LogComponent} from './Vote space/log.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {UpdateCandidatComponent} from './update-candidat/update-candidat.component';
import {ElectionTypeComponent} from './election-type/election-type.component';
import {ElecteurAuthComponent} from './electeur-auth/electeur-auth.component';
import {FingerPrintComponent} from './finger-print/finger-print.component';
import {UpdateUserComponent} from './update-user/update-user.component';
import { EnregistrementComponent } from './enregistrement/enregistrement.component';
import { EmpreinteEnComponent } from './empreinte-en/empreinte-en.component';
import {ElecteursComponent}  from './electeurs/electeurs.component';
import {RespElecteurComponent} from './resp-electeur/resp-electeur.component';
import {UploadFileComponent} from './upload-file/upload-file.component';
import {ElecteursStatsComponent} from './electeurs-stats/electeurs-stats.component';
import {ElecteurUpdateComponent} from './electeur-update/electeur-update.component';
import { ElecteurRecentComponent } from './electeur-recent/electeur-recent.component';
import { ElecteurUpdateRecentComponent } from './electeur-update-recent/electeur-update-recent.component';
import {ElectionsessionComponent} from './electionsession/electionsession.component';
import {ListElectionsessionComponent} from './list-electionsession/list-electionsession.component';

const routes: Routes = [
  {
    path: 'user',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/user-layout/user-layout.module#UserLayoutModule'
      }
    ]
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }
    ]
  }, {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
      }
    ]
  },
  {
    path: 'electeur/auth/fingerPrint/voting',
    component: LogComponent
  },
  {
    path: 'candidat/update/:id',
    component: UpdateCandidatComponent
  },
  {
    path: 'electionType',
    component: ElectionTypeComponent
  },  {
    path: 'electeur/auth',
    component: ElecteurAuthComponent
  }, {
    path: 'electeur/auth/fingerPrint',
    component: FingerPrintComponent
  },
  {
    path: 'utilisateur/update/:id',
    component: UpdateUserComponent
  },
  {
    path: 'enregistrement',
    component: EnregistrementComponent
  },
  {
    path: 'empreinte',
    component: EmpreinteEnComponent
  },
  {
    path: 'electeurs',
    component: ElecteursComponent
  },
  {
    path: 'resp',
    component: RespElecteurComponent
  },
  {
    path: 'file',
    component: UploadFileComponent
  },
  {
    path: 'stats',
    component: ElecteursStatsComponent
  },
  {
    path: 'electeurs/update/:id',
    component: ElecteurUpdateComponent
  },  
  {
    path: 'electeur/recent', 
    component: ElecteurRecentComponent
  },
  {
    path: 'electeur/recent/update/:id',
    component: ElecteurUpdateRecentComponent
  },
  {
    path: 'electionType/electionSession',
    component: ElectionsessionComponent
  },
  {
    path: 'electionSession/list',
    component: ListElectionsessionComponent
  },


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
