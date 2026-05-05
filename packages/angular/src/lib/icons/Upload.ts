import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-upload',
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
      <g clip-path="url(#clip0_3339_48)">
<path d="M3 22C2.44772 22 2 21.5523 2 21C2 20.4477 2.44772 20 3 20L21 20C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22L3 22Z" fill="#141313"/>
<path d="M20 15C20 14.4477 20.4477 14 21 14C21.5523 14 22 14.4477 22 15V21C22 21.5523 21.5523 22 21 22C20.4477 22 20 21.5523 20 21V15Z" fill="#141313"/>
<path d="M2 15C2 14.4477 2.44772 14 3 14C3.55228 14 4 14.4477 4 15V21C4 21.5523 3.55228 22 3 22C2.44772 22 2 21.5523 2 21V15Z" fill="#141313"/>
<path d="M12.9498 17C12.9498 17.5523 12.502 18 11.9498 18C11.3975 18 10.9498 17.5523 10.9498 17L10.9498 3C10.9498 2.44771 11.3975 2 11.9498 2C12.502 2 12.9498 2.44771 12.9498 3L12.9498 17Z" fill="#141313"/>
<path d="M15.2426 4.87868C15.6332 5.2692 15.6332 5.90237 15.2426 6.29289C14.8521 6.68342 14.219 6.68342 13.8284 6.29289L11.3536 3.81802C11.1583 3.62276 11.1583 3.30617 11.3536 3.11091L12.0607 2.4038C12.2559 2.20854 12.5725 2.20854 12.7678 2.4038L15.2426 4.87868Z" fill="#141313"/>
<path d="M11.182 2.40381C11.3772 2.20855 11.6938 2.20855 11.8891 2.40381L12.5962 3.11091C12.7915 3.30618 12.7915 3.62276 12.5962 3.81802L10.1213 6.2929C9.7308 6.68342 9.09763 6.68342 8.70711 6.2929C8.31659 5.90237 8.31659 5.26921 8.70711 4.87868L11.182 2.40381Z" fill="#141313"/>
</g>
<defs>
<clipPath id="clip0_3339_48">
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
export class Upload {
  @Input() size: number | string = 24;
  @Input() color: string = 'currentColor';
  @Input() strokeWidth: number | string = 2;
}