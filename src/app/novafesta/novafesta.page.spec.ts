import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NovaFestaPage } from './novafesta.page';

describe('FolderPage', () => {
  let component: NovaFestaPage;
  let fixture: ComponentFixture<NovaFestaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NovaFestaPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaFestaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
