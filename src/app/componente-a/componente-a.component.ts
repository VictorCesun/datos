import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ComponenteCComponent } from '../componente-c/componente-c.component';

@Component({
  selector: 'app-componente-a',
  standalone: true,
  imports: [FormsModule, ComponenteCComponent],
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent {
  nombre: string = '';
}