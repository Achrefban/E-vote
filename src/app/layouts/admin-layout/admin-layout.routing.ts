import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../candidat/user-profile.component';
import { TableListComponent } from '../../candidat-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../utilisateur/icons.component';
import { MapsComponent } from '../../user-list/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {ElectionTypeComponent} from '../../election-type/election-type.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'candidat',   component: UserProfileComponent },
    { path: 'candidat-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'utilisateur',    component: IconsComponent },
    { path: 'user-list',           component: MapsComponent },
    { path: 'electionType',  component: NotificationsComponent },




];
