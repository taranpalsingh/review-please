import { EventEmitter, Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private loader = new EventEmitter<boolean>();
  private loading: boolean = false;

  constructor(
    private snackBar: MatSnackBar
  ) { }
  
  public getLoader(): EventEmitter<boolean> {
    return this.loader;
  }

  public showLoader() {
    this.loading = true;
    this.loader.emit(true);
  }

  public hideLoader() {
    this.loading = false;
    this.loader.emit(false);
  }

  public isLoading(): boolean {
    return this.loading;
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, '');
    setTimeout(() => {
      this.snackBar.dismiss()
    }, 3000);
  }
}
