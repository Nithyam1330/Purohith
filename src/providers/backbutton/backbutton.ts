import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable()
export class BackbuttonProvider {
  isOnLandingPage: BehaviorSubject<boolean> = new BehaviorSubject(true);
constructor() {
  }

  setIsOnLandingPage(input: boolean) {
    this.isOnLandingPage.next(input);
  }

  getIsOnLandingPage() {
    return this.isOnLandingPage.asObservable();
  }
}
