import { Component, OnInit } from '@angular/core';
import { Usuario } from './../modelo/usuario';

@Component({
    selector: 'app-cabecera',
    templateUrl: '../vista/cabecera.html',
    styleUrls: ['../../assets/css/app.component.css']
})
export class CabeceraComponent implements OnInit {

    public usuario: Usuario;
    public nick: String;

    constructor() {

    }

    ngOnInit() {
        this.getUsuario();
    }

    getUsuario() {
        this.usuario = new Usuario(1, 'LuisMi', 'Luis Miguel', 'Rubio', '123');
        this.nick = this.usuario.nick;
    }
}
