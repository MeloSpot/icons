import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-collection',
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
      <mask id="path-1-inside-1_3404_72" fill="white">
<rect x="2" y="9" width="20" height="12" rx="1"/>
</mask>
<rect x="2" y="9" width="20" height="12" rx="1" stroke="black" stroke-width="4" mask="url(#path-1-inside-1_3404_72)"/>
<rect x="20" y="6" width="2" height="16" rx="0.5" transform="rotate(90 20 6)" fill="#141313"/>
<rect x="18" y="3" width="2" height="12" rx="0.5" transform="rotate(90 18 3)" fill="#141313"/>
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
export class Collection {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}