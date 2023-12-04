import { Component, Input } from "@angular/core"

@Component({
  selector: "app-square",
  template: `
    <button nbButton *ngIf="!value" (click)="onButtonClick($event)">{{ value }}</button>
    <button nbButton hero status="success" *ngIf="value === 'X'" (click)="onButtonClick($event)">
      {{ value }}
    </button>
    <button nbButton hero status="info" *ngIf="value === 'O'" (click)="onButtonClick($event)">
      {{ value }}
    </button>
  `,
  styles: [
    `
      button[nbButton] {
        width: 100%;
        height: 100%;
        font-size: 6rem !important;
      }
    `,
  ],
})
export class SquareComponent {
  @Input()
  value: Players | null = null

  onButtonClick(event: Event) {
    const target = event.target as HTMLElement

    target.blur()
  }
}
