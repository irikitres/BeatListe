import { Injectable } from '@angular/core';
import { INSTRUMENTAL } from 'src/app/mock-list';
import { Liste } from 'src/app/Liste';
import { Observable,of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  getList(): Observable <Liste[]> {
    const instrumental = of (INSTRUMENTAL);

    return instrumental;
  }

}
