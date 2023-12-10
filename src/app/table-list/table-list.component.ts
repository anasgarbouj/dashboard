import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  users: User[] = [
    { 
      id: 1, 
      name: 'Dakota Rice', 
      email: 'dakota.rice@example.com', 
      number: '123-456-7890', 
      region: 'Mahdia', 
      profession: 'Software Developer', 
      emergencyContact: 'John Doe', 
      status: 'Red',
      gender: 'Female',
      age: 28
    },
    { 
      id: 2, 
      name: 'Minerva Hooper', 
      email: 'minerva.hooper@example.com', 
      number: '234-567-8901', 
      region: 'Tunis', 
      profession: 'Graphic Designer', 
      emergencyContact: 'Jane Smith', 
      status: 'Green',
      gender: 'Female',
      age: 32
    },
    { 
      id: 3, 
      name: 'Sage Rodriguez', 
      email: 'sage.rodriguez@example.com', 
      number: '345-678-9012', 
      region: 'Ariana', 
      profession: 'Project Manager', 
      emergencyContact: 'Alex Johnson', 
      status: 'Yellow',
      gender: 'Male',
      age: 45
    },
    { 
      id: 4, 
      name: 'Philip Chaney', 
      email: 'philip.chaney@example.com', 
      number: '456-789-0123', 
      region: 'Kasserine', 
      profession: 'Accountant', 
      emergencyContact: 'Emily Davis', 
      status: 'Red',
      gender: 'Male',
      age: 37
    },
    {
      id: 5, 
      name: 'Doris Greene', 
      email: 'doris.greene@example.com', 
      number: '567-890-1234', 
      region: 'Nabeul', 
      profession: 'HR Manager', 
      emergencyContact: 'Michael Brown', 
      status: 'Green',
      gender: 'Female',
      age: 29
    }
  ]
  filteredUsers: User[] = [];
  searchText: string = '';

  constructor() {}

  ngOnInit() {
    this.filteredUsers = this.users;
  }

  searchUsers() {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  filterByAge(age: number) {
    this.filteredUsers = this.users.filter(user => user.age === age);
  }

  filterByGender(gender: string) {
    this.filteredUsers = this.users.filter(user => user.gender.toLowerCase() === gender.toLowerCase());
  }

  filterByStatus(status: string) {
    this.filteredUsers = this.users.filter(user => user.status.toLowerCase() === status.toLowerCase());
  }

  filterByRegion(region: string) {
    this.filteredUsers = this.users.filter(user => user.region.toLowerCase() === region.toLowerCase());
  }

 
  resetFilters() {
    this.filteredUsers = this.users;
  }

}
