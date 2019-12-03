import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public async load(): Promise<boolean> {
    return true;
  }
}
