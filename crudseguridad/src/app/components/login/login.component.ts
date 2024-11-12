import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServicedepartamentosService } from '../../services/servicedepartamentos.service';
import { Router } from '@angular/router';
import { Login } from '../../models/login';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild("cajauser") cajaUsuario!: ElementRef;
  @ViewChild("cajapass") cajaPass!: ElementRef;
  public login!:  Login;
  public status!: boolean;

  constructor(
    private _service: ServicedepartamentosService,
    private _router: Router
  ){}

  loginUsuario():void{
    let usuario = this.cajaUsuario.nativeElement.value;
    let pass = this.cajaPass.nativeElement.value;
    this.login = new Login(usuario, pass);
    this.status = false;
    this._service.postLogin(this.login).subscribe(response => {
        environment.token = response.response;
        console.log(response);
        this._router.navigate(["/perfil"]);
        this.status = true;
    });
  }

}
