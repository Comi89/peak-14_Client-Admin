import { Component, NgModule } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { menuEventsService } from './services/shared/menuEvents.service';
import { MenuItemsService } from './services/resources/menu-items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports: [ButtonsModule.forRoot()]
})

export class AppComponent {

  // config object for right side components - naming -> html name of menu item lowercase and without whitespace
  mainView = {};

  constructor(private translate: TranslateService, private _menuEventsService: menuEventsService, private _menuItems: MenuItemsService) {
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('de');
    translate.use('en');

    // get manu items and put it to main view object with key name modification
    let menuItemsArray = this._menuItems.getMenuItems();
    menuItemsArray.map((item) => {
      item.menuItems.map((menuItem) => {
        let menuItemText = menuItem.text.toLowerCase().split(' ').join('');
        // set users property to true - users menu item is active on page load
        menuItemText === 'users' ? this.mainView[menuItemText] = true : this.mainView[menuItemText] = false;
      });
    });
    // subscribe to change active component event
    this._menuEventsService.activeMenuItem$.subscribe(
      data => {
        let activeComponent = data.toLowerCase().replace(" ", "");
        // set all active items to false
        for(var key in this.mainView){
          if(this.mainView.hasOwnProperty(key)){
            this.mainView[key] = false;
          }
        }
        // set clicked item to be active
        this.mainView[activeComponent] = true;
      }
    )

  }



}
