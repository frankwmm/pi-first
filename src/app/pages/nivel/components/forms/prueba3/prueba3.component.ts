import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NbDialogRef} from '@nebular/theme';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { NivelsService } from 'src/providers/nivels/nivels.service';
import { Nivel } from 'src/app/pages/nivel/model/nivels';
import { Grado } from 'src/app/pages/grado/model/grado';

@Component({
  selector: 'app-nivel-grados',
  templateUrl: './prueba3.component.html',
  //styleUrls: ['./nivel-grados.component.css']
})
export class Prueba3Component implements OnInit {

  gradoForm:FormGroup;
  @Input() title: string;
  @Output() onNewData: EventEmitter<Object>=new EventEmitter();
  grados:Grado[];
  error:String;

  constructor( private nivelService:NivelsService) { }

  ngOnInit(): void {

  }

  getGradosOfNivel(id:number):void{
    this.nivelService.getGrados(id).subscribe( response=>{
      this.grados = response.data;
      console.log("recuperacion de niveles");
      console.log(this.grados);
      console.log("fin de recuperación de niveles");
  }, error => {
    this.error = error; 

  });
  for (let g of this.grados){  
    console.log("añslfjasdf");
    console.log(g.nom_grado);
    //this.listaNiveles.push(gg);
      
  }

  }

  

}



