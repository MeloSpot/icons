import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-menu-bar',
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
      <path d="M21 6C21.5523 6 22 6.44772 22 7V7C22 7.55228 21.5523 8 21 8L3 8C2.44772 8 2 7.55228 2 7V7C2 6.44772 2.44772 6 3 6L21 6Z" fill="#141313"/>
<path d="M21 11C21.5523 11 22 11.4477 22 12V12C22 12.5523 21.5523 13 21 13L3 13C2.44772 13 2 12.5523 2 12V12C2 11.4477 2.44772 11 3 11L21 11Z" fill="#141313"/>
<path d="M21 16C21.5523 16 22 16.4477 22 17V17C22 17.5523 21.5523 18 21 18L3 18C2.44772 18 2 17.5523 2 17V17C2 16.4477 2.44772 16 3 16L21 16Z" fill="#141313"/>
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
export class MenuBar {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}