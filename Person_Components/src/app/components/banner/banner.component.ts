import { Component, OnInit } from '@angular/core';
import { ConstantsService } from 'src/app/services/constants.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public OPTIONS:any;

  constructor(private constantsService: ConstantsService) {
    this.OPTIONS = constantsService.OPTIONS_MENU;
   }

  ngOnInit(): void {
  }

}
