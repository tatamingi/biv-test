import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, Router, Route, NavigationEnd} from '@angular/router';
import { FullDataService } from '../../services/full-data.service';
import { MessageService } from '../../services/message.service';
import * as _ from 'lodash';


@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent implements OnInit {
  public nextPath: string;
  public prevPath: string;

  private _routes: string[];

  constructor(
    private _router: Router,
    private _location: Location,
    private _activatedRoute: ActivatedRoute,
    private _fullDataService: FullDataService,
    private _messageService: MessageService
  ) {
  }

  ngOnInit() {
    this._routes = this._router.config
      .filter((route: Route): boolean => !_.isEmpty(route.path))
      .map((route: Route): string => '/' + route.path);
    this._router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this._setSiblingPaths();
        }
      })
  }

  public goBack = (): void => {
    this._router.navigate([this.prevPath]);
  }

  public goForward = (): void => {
    this._router.navigate([this.nextPath]);
  }

  private _setSiblingPaths = () => {
    const currentIndex = this._routes.indexOf(this._router.url);
    this.nextPath = (currentIndex <= this._routes.length - 2) ? this._routes[currentIndex + 1] : null;
    this.prevPath = (currentIndex > 0) ? this._routes[currentIndex - 1] : null;
  }
}
