import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

/**
 * @title Stepper with customized states
 */
@Component({
  selector: 'stepper-states-example',
  templateUrl: 'stepper-states-example.html',
  styleUrls: ['stepper-states-example.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class StepperStatesExample {
  private _mobile = new BehaviorSubject<boolean>(false)
  mobile$ = this._mobile.asObservable()

  constructor(
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.HandsetPortrait,
      Breakpoints.HandsetLandscape
    ]).pipe(
        first()
      ).subscribe(result => {
        this._mobile.next(result.matches)
      })
  }
}


/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */