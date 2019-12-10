import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../Food';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class foodFormComponent implements OnChanges
{

  @Input() food: Food
  public model: Food
  @Output() onSubmit = new EventEmitter<Food>();

  constructor() { }

  ngOnChanges(): void
  {
    this.model = Object.assign({}, this.food);
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
