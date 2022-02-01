import { DBserviceService } from './dbservice.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Test4';
  empform: FormGroup = new FormGroup({});
  data: any;

  constructor(private fb: FormBuilder, private service: DBserviceService) {}

  ngOnInit() {
    this.empform = this.fb.group({
      id: this.fb.control(''),
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      email: this.fb.control(''),
    });
    this.getAllEmployees();
  }

  submit() {
    this.service.saveEmployee(this.empform.value).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

  getAllEmployees() {
    this.service.getEmployees().subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }

  deleteEmp(id: any) {
    this.service.deleteEmployee(id).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

  update() {
    this.service.updateEmployee(this.empform.value).subscribe((res) => {
      console.log(res);
      this.ngOnInit();
    });
  }

  editEmp(id: any) {
    this.service.editEmployee(id).subscribe((res) => {
      this.empform.setValue(res);
      console.log(res);
      // this.ngOnInit();
    });
  }
}
