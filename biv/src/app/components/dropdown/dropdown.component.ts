import { Component, Input, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { Country } from '../../model/country';
import { FullDataService } from '../../services/full-data.service';
import { FormControl, Validators } from '@angular/forms';
import {MessageService} from "../../services/message.service";


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    if (this.visible && event.target !== this.toggleButton.nativeElement) {
      this.visible = false;
    }
  }

  @ViewChild('toggleButton') public toggleButton: ElementRef;

  @Input() public placeholder: string;
  public visible: boolean;

  public country = new FormControl('');

  public countries = [
    {name: 'Russia', code: 'RU'},
    {name: 'Russia', code: 'RU'},
    {name: 'Russia', code: 'RU'},
    {name: 'Russia', code: 'RU'},
    {name: 'Russia', code: 'RU'},
    {name: 'Russia', code: 'RU'}
  ]

  constructor(
    public fullDataService: FullDataService,
    public messageService: MessageService
  ) { }

  ngOnInit() {
    this.country = new FormControl(this.fullDataService.getPropValue('country'));
    this.fullDataService.setPropValue(this.country, 'country');
  }

  public toggle = (): void => {
    this.visible = this.visible ? false : true;
  }

  public select = (country: Country): void => {
    this.country.setValue(country.name + ' ' + country.code);
    this.fullDataService.setPropValue(this.country, 'country');
  }
}
