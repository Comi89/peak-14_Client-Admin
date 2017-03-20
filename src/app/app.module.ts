import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import {TranslateModule} from "ng2-translate";
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { menuEventsService } from './services/shared/menuEvents.service';
import { LoadingIndicatorService } from './services/shared/loading-indicator.service';
import { MenuItemsService } from './services/resources/menu-items.service';
import { GetAllClientsService } from './services/http/get-all-clients.service';
import { UsersComponent } from './components/users/users.component';
import { GroupsComponent } from './components/groups/groups.component';
import { ClientsComponent } from './components/clients/clients.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    MenuItemComponent,
    HeaderComponentComponent,
    UsersComponent,
    GroupsComponent,
    ClientsComponent,
    FooterComponent,
    LoadingIndicatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot()
  ],
  providers: [menuEventsService, MenuItemsService, GetAllClientsService, LoadingIndicatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
