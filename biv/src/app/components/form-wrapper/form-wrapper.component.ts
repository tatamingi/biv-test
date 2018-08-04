import { Component, OnInit } from '@angular/core';
import { RouterPathsService } from '../../services/router-paths.service';


@Component({
  selector: 'app-form-wrapper',
  templateUrl: './form-wrapper.component.html',
  styleUrls: ['./form-wrapper.component.scss']
})
export class FormWrapperComponent implements OnInit {
  constructor(
    public routerPathsService: RouterPathsService) {
  }

  ngOnInit() {
    this.routerPathsService.subscribeRouterEvents();
  }
}
