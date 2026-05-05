import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-square-arrow-down-left',
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
      <path d="M16.2279 6.32843C16.6184 5.93791 17.2516 5.93791 17.6421 6.32843C18.0327 6.71895 18.0327 7.35212 17.6421 7.74264L7.74264 17.6421C7.35212 18.0327 6.71895 18.0327 6.32843 17.6421C5.9379 17.2516 5.9379 16.6184 6.32843 16.2279L16.2279 6.32843Z" fill="#141313"/>
<path d="M6.03552 13.2782C6.03552 12.7259 6.48324 12.2782 7.03552 12.2782C7.58781 12.2782 8.03552 12.7259 8.03552 13.2782V16.7782C8.03552 17.0543 7.81166 17.2782 7.53552 17.2782H6.53552C6.25938 17.2782 6.03552 17.0543 6.03552 16.7782V13.2782Z" fill="#141313"/>
<path d="M7.15686 17.8995C6.88072 17.8995 6.65686 17.6756 6.65686 17.3995V16.3995C6.65686 16.1233 6.88072 15.8995 7.15686 15.8995H10.6569C11.2091 15.8995 11.6569 16.3472 11.6569 16.8995C11.6569 17.4518 11.2091 17.8995 10.6569 17.8995H7.15686Z" fill="#141313"/>
<rect x="3" y="3" width="18" height="18" rx="3" stroke="black" stroke-width="2"/>
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
export class SquareArrowDownLeft {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}