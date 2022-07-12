import { Component, OnInit, Input } from '@angular/core';
import { Liste } from 'src/app/Liste';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

 @Input () liste: Liste;
 faTimes = faTimes; 

  constructor() { 
    
   }

  ngOnInit(): void {
  }

}
