import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/service/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  isLoading = this.spinnerService.show();

  constructor(private spinnerService: SpinnerService) {}

  ngOnInit(): void {}
}
