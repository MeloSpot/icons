import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-rectangle',
  standalone: true,
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      [attr.stroke]="color"
      [attr.stroke-width]="strokeWidth"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="melospot-icon"
    >
      <mask id="path-1-inside-1_3404_63" fill="white">
<rect x="2" y="6" width="20" height="12" rx="1"/>
</mask>
<rect x="2" y="6" width="20" height="12" rx="1" stroke="black" stroke-width="4" mask="url(#path-1-inside-1_3404_63)"/>
    </svg>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class Rectangle {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}