import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Drink } from '../Drink';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'drink-form',
  templateUrl: './drink-form.component.html',
  styleUrls: ['./drink-form.component.css']
})
export class drinkFormComponent implements OnChanges
{

  @Input() drink: Drink
  public model: Drink
  @Output() onSubmit = new EventEmitter<Drink>();

  constructor() { }

  ngOnChanges(): void
  {
    this.model = Object.assign({}, this.drink);
  }

  submit(form: NgForm): void
  {
    if (!form.valid)
    {
      return;
    }
    this.onSubmit.emit(this.model);
  }

}
