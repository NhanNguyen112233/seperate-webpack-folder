import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminElementService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  rotate(element: HTMLElement, degrees: number): void {
    this.renderer.setStyle(element, 'transform', `rotate(${degrees}deg)`);
  }
}
