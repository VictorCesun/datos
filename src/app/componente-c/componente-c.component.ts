import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-componente-c',
  standalone: true,
  templateUrl: './componente-c.component.html',
  styleUrls: ['./componente-c.component.css']
})
export class ComponenteCComponent {
  @Input() nombre: string = '';
}