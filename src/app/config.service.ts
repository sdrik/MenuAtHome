import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _firebase = {};

  constructor() { }

  private async loadFirebaseAutoConfig(): Promise<void> {
    const response = await fetch('/__/firebase/init.json');
    if (!response.ok) {
      throw new Error('Bad status: ' + response.status);
    }
    this._firebase = await response.json();
  }

  public async load(): Promise<boolean> {
    try {
      await this.loadFirebaseAutoConfig();
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  public get firebase() {
    return this._firebase;
  }
}
