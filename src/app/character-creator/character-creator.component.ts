import { Component, OnInit } from '@angular/core';
import { first, map, tap } from 'rxjs/operators';
import { combineLatest, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'de-character-creator',
  templateUrl: './character-creator.component.html',
  styleUrls: ['./character-creator.component.scss']
})
export class CharacterCreatorComponent implements OnInit {
  completeness = of(50);

  constructor(private router: Router) {}

  ngOnInit() {
    if (this.router.url === '/attributes') {
      this.isStepEnabled('attributes')
        .pipe(
          first(),
          tap(enabled => {
            if (!enabled) {
              this.router.navigateByUrl('/');
            }
          })
        )
        .subscribe();
    } else if (this.router.url === '/skills') {
      this.isStepEnabled('skills')
        .pipe(
          first(),
          tap(enabled => {
            if (!enabled) {
              this.router.navigateByUrl('/');
            }
          })
        )
        .subscribe();
    }
  }

  isStepEnabled(step: 'attributes' | 'skills'): Observable<boolean> {
    return of(false);
  }

  redirectTo(path: string) {
    this.router.navigateByUrl(`/${path}`);
  }
}
