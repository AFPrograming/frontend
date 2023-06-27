import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-list-persons',
  templateUrl: './list-persons.component.html',
  styleUrls: ['./list-persons.component.css']
})
export class ListPersonsComponent implements OnInit{
  listPersons: Person[] = []
  constructor(private _personService: PersonService) { }

  ngOnInit(): void {
    this.getListPersons();
  }

  getListPersons() {
    this._personService.getListPersons().subscribe((data: Person[]) => {
    this.listPersons = data;
    })
  }

  deletePerson(id: number) {
    this._personService.deletePerson(id).subscribe(() => {
      this.getListPersons();
    })
  }
}
