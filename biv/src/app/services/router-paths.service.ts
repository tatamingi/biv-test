import { Injectable } from '@angular/core';
import * as _ from 'lodash';
import { NavigationEnd, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterPathsService {
  private _nextPath: string;
  private _prevPath: string;

  constructor(private _router: Router) {
  }

  public get nextPath(): string {
    return this._nextPath;
  }

  public get prevPath(): string {
    return this._prevPath;
  }

  public goBack = (): void => {
    this._router.navigate([this._prevPath]);
  }

  public goForward = (): void => {
    this._router.navigate([this._nextPath]);
  }

  public subscribeRouterEvents = (): void => {
    this._router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this._setSiblingPaths();
        }
      })
  }

  private _setSiblingPaths = () => {
    const routes = this._getRoutePaths();
    const currentIndex = routes.indexOf(this._router.url);
    this._nextPath = (currentIndex <= routes.length - 2) ? routes[currentIndex + 1] : null;
    this._prevPath = (currentIndex > 0) ? routes[currentIndex - 1] : null;
  }

  private _getRoutePaths = (): string[] =>
    this._router.config
      .filter((route: Route): boolean => !_.isEmpty(route.path))
      .map((route: Route): string => '/' + route.path)
}
