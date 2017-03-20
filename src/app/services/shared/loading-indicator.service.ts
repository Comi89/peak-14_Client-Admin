import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class LoadingIndicatorService {

  constructor() { }

  // Observable string sources
  private loader = new Subject<boolean>();

  // Observable string streams
  loader$ = this.loader.asObservable();

  // Service message commands
  setLoader(data: boolean) {
    this.loader.next(data);
  }

}
