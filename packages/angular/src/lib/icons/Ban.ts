import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-ban',
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
      <g clip-path="url(#clip0_3404_57)">
<circle cx="12" cy="12" r="9" stroke="black" stroke-width="2"/>
<path d="M18.435 7.12132C18.8256 6.7308 18.8256 6.09763 18.435 5.70711V5.70711C18.0445 5.31658 17.4114 5.31658 17.0208 5.70711L5.70712 17.0208C5.3166 17.4113 5.3166 18.0445 5.70712 18.435V18.435C6.09765 18.8256 6.73081 18.8256 7.12134 18.435L18.435 7.12132Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_3404_57">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>
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
export class Ban {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}