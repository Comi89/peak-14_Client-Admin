import { Component, OnInit } from '@angular/core';
import { menuEventsService } from '../../services/shared/menuEvents.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  clientsFooter = '';
  constructor(private _menuEventsService: menuEventsService) {
    this._menuEventsService.activeMenuItem$.subscribe(
      data => {
        this.clientsFooter = data.toLowerCase().split(' ').join('');
      }
    )
  }

  ngOnInit() {
  }

}
