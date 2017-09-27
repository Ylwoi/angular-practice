import {
  Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //this is the default but it can be None or Native (Shadow DOM)
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string };
  @Input() name: string;

  constructor() {
    console.log('constructor')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes)
  }

  ngOnInit() {
    console.log('ngOnInit')
  }

  ngDoCheck() {
    console.log('ngDOCheck')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentINIt')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewINIt')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }

}
