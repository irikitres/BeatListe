import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Liste } from 'src/app/Liste';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

 @Input () liste: Liste;
 @Output () onDeleteliste: EventEmitter<Liste> = new EventEmitter()


 faTimes = faTimes; 

  constructor() { 
    
   }

  ngOnInit(): void {
  }
 
  onDelete(liste){
    this.onDeleteliste.emit(liste);
  }
}
