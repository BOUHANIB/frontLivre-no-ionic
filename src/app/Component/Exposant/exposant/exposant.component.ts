import {Component, OnInit} from '@angular/core';
import {ExposantService} from "../../../Service/Exposant/exposant.service";
import {Exposant} from "../../../Model/Exposant/exposant.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-exposant',
  templateUrl: './exposant.component.html',
  styleUrls: ['./exposant.component.css']
})
export class ExposantComponent implements OnInit {


  exposants: Array<Exposant> = [] ;
  public keyword : string="";

  constructor(private exposantService:ExposantService ,
              private router:Router) {
  }

  ngOnInit(): void {
    this.getExposants();
  }

  getExposants() {

      this.exposantService.getExposants()
      .subscribe({
        next :  data => {
          console.log(data);
          this.exposants = data;
        },
        error: err => {
      console.log(err);
    }
      }
    )
  }

  handelDelete(exposant: Exposant) {
    if(confirm("Etes vous sûre ?"))
    this.exposantService.deleteExposant(exposant).subscribe({
      next:value => {
        this.exposants = this.exposants.filter(e=>e.exposantId! = exposant.exposantId);
        this.getExposants();
      },
      error: err => {
        console.log(err);
      }
    })
  }


  searchExposant() {
  this.exposantService.searchExposant(this.keyword).subscribe({
    next:value => {
      console.log(value);
      this.exposants=value;
    },
    error: err => {
      console.log(err);
    }
  })
  }

  handelEdit(exposant: Exposant) {
    this.router.navigateByUrl(`/editExposant/${exposant.exposantId}`)
  }

  navigateToNewExposant() {
    this.router.navigate(['/newExposant']);
  }

}

