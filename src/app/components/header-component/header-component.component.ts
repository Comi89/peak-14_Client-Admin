import { Component, OnInit, NgModule } from '@angular/core';
import { DropdownModule } from 'ng2-bootstrap';
import { TranslateService } from 'ng2-translate';
import { menuEventsService } from '../../services/shared/menuEvents.service';
import { MenuItemsService } from '../../services/resources/menu-items.service';
@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})

@NgModule({
  imports: [DropdownModule.forRoot()]
})

export class HeaderComponentComponent implements OnInit {

  ngOnInit() {
  }

  disableLangBtns = {
    en: true,
    de: false
  }

  activeMenuItem = "Users";
  searchSelectBox = true;
  clientSelectBox = true;
  searchInput = true;

  constructor(private translate: TranslateService, private _menuEventsService: menuEventsService, private _menuItemsService: MenuItemsService) {
      this._menuEventsService.activeMenuItem$.subscribe(
        data => {
          this.activeMenuItem = data;
          let headerConfig = _menuItemsService.getActiveMenuItem();
          this.searchSelectBox = headerConfig.header.searchSelectBox;
          this.clientSelectBox = headerConfig.header.clientSelectBox;
          this.searchInput = headerConfig.header.searchInput;
        }
      )
   }



  changeLang(lang){
    this.disableLangBtns.en = !this.disableLangBtns.en;
    this.disableLangBtns.de = !this.disableLangBtns.de;
    this.translate.use(lang);
  }

}
