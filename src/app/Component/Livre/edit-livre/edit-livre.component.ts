import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {LivreService} from "../../../Service/Livre/livre.service";
import {Livre} from "../../../Model/Livre/livre.model";
import {Exposant} from "../../../Model/Exposant/exposant.model";
import {ExposantService} from "../../../Service/Exposant/exposant.service";

@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.css']
})
export class EditLivreComponent implements OnInit {

  livreId!: number;
  livreFormGroup! : FormGroup;
  exposants: Exposant[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private livreService: LivreService,
              private fb : FormBuilder,
              private exposantService: ExposantService) {
  }

  ngOnInit(): void {
    this.livreId = this.activatedRoute.snapshot.params['livreId'];
    this.livreService.getLivreById(this.livreId).subscribe({
      next : (livre)=>{
        this.livreFormGroup = this.fb.group({
          livreId : this.fb.control(livre.livreId),
          titre :this.fb.control(livre.titre),
          auteur:this.fb.control(livre.auteur),
          editeur:this.fb.control(livre.editeur),
          date_edition:this.fb.control(livre.dateEdition),
          prix:this.fb.control(livre.prix),
          isbn:this.fb.control(livre.isbn),
          exposant:this.fb.control(livre.exposant.exposantId),
        });
      },
      error : error =>{
        console.log(error);
      }
    });
    this.getExposants();
  }

  getExposants() {
    this.exposantService.getExposants().subscribe({
      next: data => {
        this.exposants = data; // Assigner les exposants à la propriété exposants
      },
      error: err => {
        console.log(err);
      }
    });
  }

  updateLivre() {
    console.log(this.livreFormGroup.value); // Vérifier les données du livre avant l'envoi au backend
    let livre: Livre = this.livreFormGroup.value;
    this.livreService.updateLivre(livre).subscribe({
      next: data => {
        console.log(data); // Vérifier la réponse du backend
        alert("Livre mis à jour avec succès!");
      },
      error: (error) => {
        console.log(error);
        alert("Une erreur s'est produite lors de la mise à jour du livre: " + error.error.text);
      }
    });
  }
}
