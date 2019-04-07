import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../users.component';
import {CommonService} from '../../shared/common.service';
import { MatSnackBar } from "@angular/material";
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  users: User[] = [];
  constructor(public snackBar: MatSnackBar,private commonService:CommonService,
    public dialogRef: MatDialogRef<ViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.users = this.data;
  }
  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  submitUserList(data) {
 
    if(data == undefined && !data){
      this.openSnackBar('Please Select Atleast One of the checkbox','false');
    }
    this.submitList(data);
  }

  submitList(data){
    this.commonService.submitUserList(data).subscribe((response) => {
      this.openSnackBar('succesfully updated','true');
      console.log('response', response);
    }, err => {
      this.openSnackBar('error occured','false');
      throw err;
  });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 1000,
    });
 } 

}
