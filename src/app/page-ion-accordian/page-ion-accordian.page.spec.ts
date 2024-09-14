import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageIonAccordianPage } from './page-ion-accordian.page';

describe('PageIonAccordianPage', () => {
  let component: PageIonAccordianPage;
  let fixture: ComponentFixture<PageIonAccordianPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIonAccordianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
