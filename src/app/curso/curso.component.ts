import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  //URL Base
  url = "http://localhost/api/php/";

  //Vetor de cursos
  vetor:Curso = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }

  cadastrar(){
    alert("Cadastrar")
  }

  selecionar(){
    alert("Selecionar")
  }

  alterar(){
    alert("Alterar")
  }

  remover(){
    alert("Remover")
  }
}
