import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class menuEventsService {

  constructor() { }

  // Observable string sources
  private activeMenuItem = new Subject<string>();

  // Observable string streams
  activeMenuItem$ = this.activeMenuItem.asObservable();

  // Service message commands
  setActiveMenuComponent(data: string) {
    this.activeMenuItem.next(data);
  }

}
