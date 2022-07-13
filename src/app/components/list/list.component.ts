import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/services/list.service';
import { Liste } from 'src/app/Liste';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  inst: Liste[] = [];

  constructor(private listService : ListService) { }

  ngOnInit(): void {
    this.listService.getList().subscribe((liste) => this.inst = liste);
  }

  deleteListe(liste: Liste) {
    this.listService.deleteListe(liste).subscribe(() =>(this.inst = this.inst.filter(l => l.numero !== liste.numero)));
  }

}
