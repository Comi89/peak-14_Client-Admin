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
import { MenuItemsService } from './services/resources/menu-items.service';
import { UsersComponent } from './components/users/users.component';
import { GroupsComponent } from './components/groups/groups.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    MenuItemComponent,
    HeaderComponentComponent,
    UsersComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    TranslateModule.forRoot()
  ],
  providers: [menuEventsService, MenuItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
