import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  text: string;
  Date: Date;
  number: number;
  genre: string


  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() {
    if (!this.text) {
      alert('Add some text Bono');
      return;
    }

    const newBeat = {
     
      text: this.text,
      date: this.Date,
      number: this.number,
      genre: this.genre
    } 

    this.text = '',
    this.genre= '',
    this.Date= new Date(0),
    this.number= 0
 }
}
