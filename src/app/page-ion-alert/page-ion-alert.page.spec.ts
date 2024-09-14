import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageIonAlertPage } from './page-ion-alert.page';

describe('PageIonAlertPage', () => {
  let component: PageIonAlertPage;
  let fixture: ComponentFixture<PageIonAlertPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIonAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
