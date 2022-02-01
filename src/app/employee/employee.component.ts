import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeModel } from './employee.model';
('@angular/forms');

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  formvalue!: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formvalue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      salary: [''],
    });
  }
  postEmployeeDetails() {
    this.employeeModelObj.firstName = this.formvalue.value.firstName;
    this.employeeModelObj.lastName = this.formvalue.value.lastName;
    this.employeeModelObj.email = this.formvalue.value.email;
    this.employeeModelObj.salary = this.formvalue.value.salary;

    this.api.postEmployeeDetails(this.employeeModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Employee Added');
      },
      (error) => {
        alert('error occured');
      }
    );
  }
}
