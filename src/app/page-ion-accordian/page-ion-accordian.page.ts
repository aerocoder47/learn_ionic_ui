import { Component, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-page-ion-accordian',
  templateUrl: './page-ion-accordian.page.html',
  styleUrls: ['./page-ion-accordian.page.scss'],
})
export class PageIonAccordianPage implements OnInit {
  constructor() { }
  private vlaues: string[] = ['first', 'second', 'third'];
  // @ViewChild('accordiongroup', { static: false }) accordionGroup: IonAccordionGroup;

  ngOnInit() {
    console.log("PageIonAccordion Init");   
  }

  accordionGroupChange = (ev: any) => {
    const collapsedItems = this.vlaues.filter((value) => value !== ev.detail.value)
    const selectedValue = ev.detail.value;

    console.log(
      `Expanded: ${selectedValue === undefined ? 'None' : ev.detail.value} | Collapsed: ${collapsedItems.join(', ')}`
    )
  }


  toggleAccordion = () => {
    // const nativeE1 = this.accordionGroup;
    // if(nativeE1.value === 'second'){-
    //   nativeE1.value = undefined;
    // } else {
    //   nativeE1.value = 'second';
    // }
  }
}
