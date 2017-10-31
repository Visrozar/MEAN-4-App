import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class VclistService {

  constructor(public http: Http) { }

  getVclist() {
    return this.http.get("../assets/csv.json")
      .map((res: Response) => res.json());
  }

}
