import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  locationTitle: string = ''; // Variable pour stocker le titre entré par l'utilisateur
  markerX: number = 0; // Coordonnée X du marqueur
  markerY: number = 0; // Coordonnée Y du marqueur
  markerVisible: boolean = false; // Initialiser à false

  constructor() {
    this.markerVisible = false;
  }

  searchLocation(): void {
    const areaElements = Array.from(document.querySelectorAll('area')) as HTMLAreaElement[];

    console.log('Titre recherché:', this.locationTitle);

    this.markerVisible = false; // Réinitialiser la visibilité du marqueur

    for (const areaElement of areaElements) {
      const title = areaElement.getAttribute('title');
      console.log('Titre de la zone:', title);
      if (title && title.toLowerCase() === this.locationTitle.toLowerCase()) {
        const coords = areaElement.getAttribute('coords')!.split(',');
        const x = parseInt(coords[0]);
        const y = parseInt(coords[1]);

        this.markerX = x;
        this.markerY = y;
        this.markerVisible = true; // Afficher le marqueur
        console.log('Marqueur positionné à:', x, y);
        break;
      }
    }
  }

}
