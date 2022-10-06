import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  marginLeft: string = '80px';
  @ViewChild('footer') footer: ElementRef | any;
  constructor(private ren2: Renderer2) {}

  ngOnInit(): void {}

  @Input() set buttonSide(value: boolean) {
    if (value == true) {
      this.footer.nativeElement.style.marginLeft = this.marginLeft;
    } else {
      if (value == false) {
        // console.log(this.footer);
        this.ren2.removeAttribute(this.footer.nativeElement, 'style');
      }
    }
  }
}
