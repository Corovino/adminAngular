import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public loginForm : FormGroup;
    private  dataLogin :any;

    constructor(private formbuilder : FormBuilder, private router : Router, private activate : ActivatedRoute ) { }

    ngOnInit()
    {

        this.loginForm = this.formbuilder.group({
            user_name : ['', [Validators.required] ],
            password :['', [Validators.required, Validators.minLength(2)]  ],
        });
    }

    onSubmit()
    {
        this.dataLogin = {
            user_name : this.loginForm.get('user_name').value,
            password  : this.loginForm.get('password').value
        }

        console.log(this.dataLogin.password);

        /*if( this.dataLogin.password == 'admin' ){
          console.log('admin');
          this.router.navigate(['/admin/dashboardAdmin']);
        }else{
          console.log('user');
          this.router.navigate(['/user/dashboardUser']);
        }*/
    }


}
