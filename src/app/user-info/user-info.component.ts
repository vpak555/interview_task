import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { UserWithLicenses } from '../models';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  userWithLicenses$!: Observable<UserWithLicenses>;

  constructor(
    public dialogRef: MatDialogRef<UserInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.userWithLicenses$ = this.userService.getUserWithLicenses(this.data);
  }
}
