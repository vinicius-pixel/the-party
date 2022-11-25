import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FestasPage } from './festas.page';



describe('FolderPage', () => {
  let component: FestasPage;
  let fixture: ComponentFixture<FestasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FestasPage],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(FestasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
