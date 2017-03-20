import { Component, OnInit } from '@angular/core';
import { LoadingIndicatorService } from '../../services/shared/loading-indicator.service';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.css']
})
export class LoadingIndicatorComponent implements OnInit {

  ngOnInit() {
  }

  showLoader = false;
  constructor(private _LoadingIndicatorService: LoadingIndicatorService) {
    this._LoadingIndicatorService.loader$.subscribe(
      data => {
        this.showLoader = data;
      }
    )
  }




}
