import { Component, OnInit, Input } from '@angular/core';
import { menuEventsService } from '../../services/shared/menuEvents.service';
import { MenuItemsService } from '../../services/resources/menu-items.service';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {


  ngOnInit() {
  }


  constructor(private _menuEventsService: menuEventsService, private _menuItems: MenuItemsService) {

  }
  @Input() menuitems:Array<string>;

  clickOnMenuItem(item, allMenuItems){
    console.log(item);
    allMenuItems.map((item) => {
      item.menuItems.map((menu) => {
        menu.highlighted = false;
      })
    });
    item.highlighted = true;
    this._menuEventsService.setActiveMenuComponent(item.text);
    // set new state of manu items highlight property in service
    this._menuItems.setMenuItems(allMenuItems);
  }

}
