import { Injectable } from '@angular/core';
import { Http, Response }   from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GetAllClientsService {

  constructor(private http: Http) { }
  url = 'http://staging.cavok.pro/wrapper'
  sessionID = '77453d38be466e8665d51562e67a0388'
  parameters =
    {
      'sessionID': this.sessionID,
  };
  data = {
    call: "getAllClients",
    param: this.parameters
  }
  getAllClients(){
     return this.http.post(this.url, this.data)
      .map(this.fetchClients)
      // .catch(this.errorFetchClients);
  }

fetchClients(res:Response){
  let clients = res.json();
  return clients.clients || [];
}

errorFetchClients(error: Response | any){
  console.log('Error')
}

}
