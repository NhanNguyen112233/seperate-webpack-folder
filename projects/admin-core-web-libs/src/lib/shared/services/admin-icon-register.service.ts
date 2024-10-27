import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ICONS } from '../constant/icon';

@Injectable({
  providedIn: 'root',
})
export class AdminIconRegisterService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private snttitizer: DomSanitizer
  ) {
    this.registerIcon();
  }

  private registerIcon() {
    Object.keys(ICONS).forEach((iconName) => {
      this.iconRegistry.addSvgIconLiteral(
        `admin-${iconName}`,
        this.snttitizer.bypassSecurityTrustHtml(
          ICONS[iconName as keyof typeof ICONS]
        )
      );
    });
  }
}
