import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginform !:FormGroup;
  message:any;
  error:any;


  constructor(private fb:FormBuilder,private userService: UserService){
    this.loginform = this.fb.group({
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required]
    })
  }

  ngOnInit(){

  }


  submit() {
    debugger
    // console.log("loginform==>",this.loginform.value)
    const data = {
      email : this.loginform.value.email,
      password : this.loginform.value.password,
    }

    if (this.loginform.valid) {
      this.userService.login(data).subscribe({
        next: (res) => {
          debugger
          // console.log("res==>",res)
          this.message = res.message;
          alert(this.message);
          // this.loginform.reset();
        },
        error: (err) => {
          this.error = err.error.message;
          alert(this.error);
        }
      });
    } else {
      alert('Please fill the fields');
    }
  }

}
