import { Component } from '@angular/core';
import { ComponenteAComponent } from './componente-a/componente-a.component';
import { ComponenteBComponent } from './componente-b/componente-b.component';
import { ComponenteCComponent } from './componente-c/componente-c.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponenteAComponent, ComponenteBComponent, ComponenteCComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}