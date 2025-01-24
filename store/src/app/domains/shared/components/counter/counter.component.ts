import { Component, Input, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input({required: true}) duration: number = 0;
  @Input({required: true}) message: string = '';
  counter = signal(0);
  counterRef: number | undefined;

  constructor() {
    // No async
    // antes de renderizado
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // Se ejecuta antes y durante el render
    console.log('ngOnChanges');
    console.log('.'.repeat(0));
    console.log(changes);
    const duration = changes['duration'];
    console.log(duration);
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething()
    }
  }

  ngOnInit() {
    // Se ejecuta antes del render y solo una vez
    // async, then, subs
    console.log('ngOnInit')
    console.log('-'.repeat(10));
    console.log('duration => ', this.duration);
    console.log('message => ', this.message);

    this.counterRef = window.setInterval(() => {
      console.log('interval')
      this.counter.update(statePrev => statePrev + 1);
    }, 1000);
  }

  ngAfterViewInit() {
    // Se ejecuta despues del render
    // Se usa para ver si los hijos ya fueron renderizados
    console.log('ngAfterViewInit')
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
    console.log('-'.repeat(10));
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('change duration')
  }
}
