import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Input() placeholder: string = '';

  @Output() onValue: EventEmitter<string> = new EventEmitter();



  onSubmit( id: string){
    this.onValue.emit(id)
  }
}
