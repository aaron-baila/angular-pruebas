import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from "./components/pokemon/pokemon.component";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, PokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-pruebas';
}
