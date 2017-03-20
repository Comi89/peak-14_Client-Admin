import { Component, OnInit } from '@angular/core';
import { GetAllClientsService } from '../../services/http/get-all-clients.service'
import { LoadingIndicatorService } from '../../services/shared/loading-indicator.service'

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private _getAllClients: GetAllClientsService, private _loadingIndicatorService: LoadingIndicatorService) {}
  clientsArray;
  ngOnInit() {
    this._loadingIndicatorService.setLoader(true);
    this._getAllClients.getAllClients().subscribe((clients) => {
      clients.sort(function(a,b) {
          return b - a;
      });
       this.clientsArray = clients;
       this._loadingIndicatorService.setLoader(false);
     }, (err) => {
       console.error(err);
     });
  }

  sortTable(){
    this.clientsArray.sort(function(a,b) {
        return b - a;
    });
  }

}
