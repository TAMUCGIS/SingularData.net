import { Router } from '@angular/router';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'search-main',
  templateUrl: './search-main.component.html',
  styleUrls: [
    '../../styles/main.less',
    './search-main.component.less'
  ],
})
export class SearchMainComponent implements AfterViewInit {

  keywords: string;

  constructor(private router: Router) {
  }

  ngAfterViewInit() {

    /**
     * The pure CSS solution doesn't seem to work and it has to be done in TS.
     */

    let placeholder = document.getElementsByClassName('mat-input-placeholder')[0] as HTMLElement;
    placeholder.style.color = 'white';
    placeholder.style.textAlign = 'center';

    let underline = document.getElementsByClassName('mat-input-ripple')[0] as HTMLElement;
    underline.style.visibility = 'visible';
    underline.style.backgroundColor = 'white';
  }

  search(keywords: string): void {
    if (!keywords) {
      return;
    }

    this.router.navigateByUrl('search?q=' + encodeURIComponent(keywords));
  }

  openURL(url) {
    window.open(url, '_blank');
  }
}
