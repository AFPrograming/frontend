import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Person } from 'src/app/interfaces/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-add-edit-persons',
  templateUrl: './add-edit-persons.component.html',
  styleUrls: ['./add-edit-persons.component.css']
})
export class AddEditPersonsComponent implements OnInit {
    form: FormGroup;
    id: number;
    operacion: string = 'Agregar ';

    constructor(private fb: FormBuilder,
      private _personService: PersonService,
      private router: Router,
      private aRouter: ActivatedRoute) {
      this.form = this.fb.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        phone: ['', Validators.required],
        email: ['', Validators.required],
      })
      this.id = Number(aRouter.snapshot.paramMap.get('id'));
    }
    
    ngOnInit(): void {
      if (this.id != 0) {
        // Editar
        this.operacion = 'Editar ';
        this.getPerson(this.id);
      }
    }
  
    
    getPerson(id: number) {
        this._personService.getPerson(id).subscribe((data: Person) => {
        this.form.setValue({
          name: data.name,
          address: data.address,
          phone: data.phone,
          email: data.email
        })
      })
    }
  
    addPerson() {
      const person: Person = {
        name: this.form.value.name,
        address: this.form.value.address,
        phone: this.form.value.phone,
        email: this.form.value.email
      }
 
      if (this.id !== 0) {
        // Es editar 
        person.id = this.id;
        this._personService.updatePerson(this.id, person).subscribe(() => { 
          this.router.navigate(['/']);
        })
  
      } else {
        // Es agregagar
        this._personService.savePerson(person).subscribe(() => {
        this.router.navigate(['/']);
        })
      }
    }
  
  }
  