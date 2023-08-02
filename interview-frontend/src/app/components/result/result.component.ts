import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { City } from '../cities/city.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  @Input()
  cities: City[] = [];
}
