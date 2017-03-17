import { Component, OnInit, NgModule } from '@angular/core';
import { MenuItemComponent } from '../menu-item/menu-item.component';
import { MenuItemsService } from '../../services/resources/menu-items.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})

@NgModule({
  declarations: [MenuItemComponent]
})
export class LeftMenuComponent implements OnInit {

  ngOnInit() {
  }

  // menu confgi object with menu items
  menuItems = [];
  constructor(private _MenuItemsService : MenuItemsService) {
    // get menu items from resource service
    this.menuItems = _MenuItemsService.getMenuItems();
  }


}
