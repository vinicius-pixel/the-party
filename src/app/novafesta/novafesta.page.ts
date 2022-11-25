import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/compat/database';



@Component({
  selector: 'app-novafesta',
  templateUrl: './novafesta.page.html',
  styleUrls: ['./novafesta.page.scss'],
})
export class NovaFestaPage implements OnInit {

  festaForm!: FormGroup
  numeroPessoaNumber: any;
  a: any;
  constructor(
    public formbuilder:FormBuilder,
    public db: AngularFireDatabase ) {
    
   }

  ngOnInit() {
    this.buildForm();
    
    
  }
  buildForm(){
    this.festaForm = this.formbuilder.group({
      nome:[null, [Validators.required]],
      tipo:[null, [Validators.required]],
      numeroPessoa:[null, [Validators.required]],
      qtdLugares: [null, [Validators.required]],
      convidados: this.formbuilder.array([]),

    })
    console.log('aqui',this.festaForm.get('convidados'))
  }
  cadastraFesta(){
    console.log(this.festaForm.value)

   this.db.database.ref('/festas').push(this.festaForm.value)
   .then(()=>{
    console.log('salvou')
   })
  }

  addConvidado(){
    const piece = this.formbuilder.group({
      nome: [],
      email: []
    });
    this.getConvidadoArray.push(piece);

  }

  removeConvidado(i: any) {
    const remove = this.festaForm.get('convidados') as FormArray;
    remove.removeAt(i)
  }
  getControls() {
    return (this.festaForm.get('convidados') as FormArray).controls;
  }
  get getConvidadoArray() {
    return (<FormArray>this.festaForm.get('convidados'));
  }

  deleteConvidado(i: any) {
    this.getConvidadoArray.removeAt(i);
  }

 
}
