import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-customfilteration',
  templateUrl: './customfilteration.component.html',
  styleUrls: ['./customfilteration.component.scss']
})
export class CustomfilterationComponent {
  @Output() filtersearch=new EventEmitter<any>();
  @Output() filterpage=new EventEmitter<any>();
  @Output() filterlimit=new EventEmitter<any>();
  

  filtersearchFn(_t6: HTMLInputElement) {
    this.filtersearch.emit(_t6)
  }
  filterpageFn(_t18: HTMLInputElement) {
    this.filterpage.emit(_t18)
  }
  filterlimitFn(_t10: HTMLSelectElement) {
    this.filterlimit.emit(_t10)
  }




// filterpageFn(_t18: HTMLInputElement) {
//   this.filtersearch.emit()
// }
// filterlimitFn(_t10: HTMLSelectElement) {
// throw new Error('Method not implemented.');
// }

}
