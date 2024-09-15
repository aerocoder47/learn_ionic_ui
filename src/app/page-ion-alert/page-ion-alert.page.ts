import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-page-ion-alert',
  templateUrl: './page-ion-alert.page.html',
  styleUrls: ['./page-ion-alert.page.scss'],
})
export class PageIonAlertPage implements OnInit {
  // alertButtons = ["Accept", "Reject"];
  isAlertOpen = false;
  
  constructor(private alertController: AlertController) { }

  ngOnInit() {
    console.log("Ion-Alert");
  }

  alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: ()=> {
        console.log('Alert Canceled')
      }
    },
    {
      text: 'Ok',
      role: 'confirm',
      handler: (value: any)=> {
      console.log(`Alert confirmed: ${value}`)
      }
    },
    

  ]

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen
  }


  setResult(event: any){
    console.log(event.detail)
    console.log(`Dismissed with role: ${event.detail.role}`);
  }

  async presentAlert() {
    const alert = await this.alertController.create(
      {
        header: "A short Title is best",
        subHeader: "A sub header is optional",
        message: "A message should be short, complete sentence.",
        buttons: ['Action', 'Rejection']
      }
    )

    await alert.present()
  }

  

  // Alert with inputs
  public alertButtons2 = [
    {
      text: 'Ok',
      role: 'confirm',
      handler: (value: any) => {
        console.log(`Ok Clicked -> ${JSON.stringify(value)}`)
      }
    }
  ]

  public alertInputs = [
    {
      placeholder: 'Name'
    },
    {
      placeholder: 'NickName (max 8 characters)',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: "Age",
      min: 1,
      max: 100
    },
    {
      type: 'textarea',
      placeholder: 'A little about yourself'
    }
  ]

  public infoInAlertDismiss(value: any) {
    console.log(`InfoIN-Alert Dismiss ${JSON.stringify(value)}`)
  }


  // Alert with Radio input
  public radioAlertButtons = [
    {
      text: 'Ok',
      role: 'confirm',
      handler: (value: any) => {
        console.log("Radio Buttons "+JSON.stringify(value))
      }
    }

  ]
  public radioAlertInputs = [
    {
      label: 'Red',
      type: 'radio',
      value: 'red'
    },
    {
      label: 'blue',
      type: 'radio',
      value: 'red'
    },
    {
      label: 'Red',
      type: 'radio',
      value: 'blue'
    }
  ]

  public radioGroupDismiss(value: any){
    console.log(`RadioGroup Dismiss ${JSON.stringify(value)}`)
  }


  // logout alert
  public logoutAlertButtons=[
    {
      text: 'No',
      cssClass: "alert-button-cancel"
    },
    {
      text: 'Yes',
      cssClass : "alert-button-confirm"
    }
  ]
  
  public notiCount = 1;
  public notificatinCounter(){
      this.notiCount += 1
  }

  // BreadCrumbs
  maxBreadCrumbs = 4;
  public expandBreadCrumbs() {
    this.maxBreadCrumbs = 10
  }
  @ViewChild('popover') popover: any;
  isOpen = false;
  collapsedBreadcrumbs: HTMLIonBreadcrumbsElement[] = [];
  async presentPopOver(e: any) {
    this.collapsedBreadcrumbs = (e as CustomEvent).detail.collapsedBreadcrumbs;
    this.popover.event = e;
    this.isOpen = true
  }
}
