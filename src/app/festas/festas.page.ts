import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FolderPage } from '../folder/folder.page';

@Component({
  selector: 'app-festas',
  templateUrl: './festas.page.html',
  styleUrls: ['./festas.page.scss'],
})
export class FestasPage implements OnInit {


  constructor(public router: Router) { }

  ngOnInit() {
   
  }
  openSobre(){
    this.router.navigateByUrl('/novafesta/novafesta');    
  }

}
