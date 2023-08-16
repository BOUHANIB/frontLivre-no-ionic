import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ExposantService} from "../../../Service/Exposant/exposant.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Exposant} from "../../../Model/Exposant/exposant.model";

@Component({
  selector: 'app-edit-exposant',
  templateUrl: './edit-exposant.component.html',
  styleUrls: ['./edit-exposant.component.css']
})
export class EditExposantComponent implements OnInit {

  exposantId!: number;
  exposantFormGroup! : FormGroup;

  constructor(private activatedRoute: ActivatedRoute,
              private exposantService: ExposantService,
              private fb : FormBuilder) {
  }

  ngOnInit(): void {
    this.exposantId = this.activatedRoute.snapshot.params['exposantId'];
    this.exposantService.getExposantById(this.exposantId).subscribe({
      next : (exposant)=>{
        this.exposantFormGroup = this.fb.group({
          exposantId : this.fb.control(exposant.exposantId),
          nom : this.fb.control(exposant.nom),
          pays : this.fb.control(exposant.pays),
          e_mail : this.fb.control(exposant.mail),
          password : this.fb.control(exposant.password),
          telephone : this.fb.control(exposant.telephone),
          site_Web : this.fb.control(exposant.siteWeb),
          adresse : this.fb.control(exposant.adresse),
          responsable_Salle : this.fb.control(exposant.responsableSalle),
          responsable : this.fb.control(exposant.responsable),
          specialite : this.fb.control(exposant.specialite),
          localisation : this.fb.control(exposant.localisation),
        });
      },
      error : error =>{
        console.log(error);
      }
    });
  }


  updateExposant() {
    let exposant : Exposant = this.exposantFormGroup.value;
    this.exposantService.updateExposant(exposant).subscribe({
      next : data => {
        alert(JSON.stringify(data));
      },
    });
  }
}
