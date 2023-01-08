import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Images } from '../app-assets.constants';
import { NavigationService } from '../navigation.service';
import { Constants } from './pre-auth.constants';

@Component({
  selector: 'pre-auth',
  templateUrl: './pre-auth.component.html',
  styleUrls: ['./pre-auth.component.scss']
})
export class PreAuthComponent implements OnInit {

  constants = Constants;
  images = Images;
  
  form: FormGroup;
  submitted = false;
  response;
  apiHasBeenHit: boolean = false;
  merchantNameSelected = null;
  paymentChannelSelected = null;

  keysToDisplay = ['status', 'rrn'];
  paymentChannelOptions = this.constants.paymentChannelOptions;
  merchantNameOptions = this.constants.merchantNameOptions;
  ParameterNameMap = this.constants.ParameterNameMap;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private navigator: NavigationService
  ) { }

  ngOnInit(): void {    
    this.form = this.formBuilder.group(
      {
        cardId: [
          '', 
          [
            Validators.required, 
            Validators.minLength(36),
            Validators.maxLength(36)
          ]
        ],
        merchantName: [null, Validators.required],
        paymentChannel: [null, Validators.required],
        amount: [
          '',
          [
            Validators.required,
          ]
        ]
      }
    );

    // todo: remove this 
    // this.form.get('paymentChannel').setValue('11');
    // this.form.get('merchantName').setValue('111');
    // this.form.get('cardId').setValue('11111111');
    // this.form.get('amount').setValue('111');
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      console.log(this.form.value);
      return;
    }
    this.apiHasBeenHit = true;
    console.log(JSON.stringify(this.form.value, null, 2));
    
    const body = {
      cardId: this.form.get('cardId').value,
      merchantName: this.merchantNameSelected['name'],
      mcc: this.merchantNameSelected['mcc'],
      merchantId: this.merchantNameSelected['value'],
      paymentChannel: this.paymentChannelSelected['name'],
      amount: this.form.get('amount').value
    }

    this.navigator.showLoader();

    this.api.preAuth(body)
    .subscribe(response => {    
      this.response = response;
      this.navigator.hideLoader();
    }, error => {
      this.response = {};
      this.navigator.showSnackBar('Server issues, Please try again later');
      this.navigator.hideLoader();
    });
    // this.response = {
    //   "status":"05",
    //   "rrn":"223454043123"
    // };  
  }

  paymentChannelUpdated(channel) {
    this.paymentChannelSelected = channel;
    this.form.get('paymentChannel').setValue(channel.value);
  }

  merchantNameUpdated(merchant) {
    this.merchantNameSelected = merchant;
    this.form.get('merchantName').setValue(merchant.value);
  }
}
