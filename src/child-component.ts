

import {FASTElement, customElement, html, css, attr } from '@microsoft/fast-element';
import { fromEvent, Subscription } from 'rxjs';

const template = html<ChildComponent>`
  <div>
  <slot @slotchange="${x => x.onSlotChanged()}"></slot>
  </div>

 `;

 /**
  * The menu will be opened only if the status is set to "open".
  * By default, the menu will be hidden.
  */
const styles = css`
  :host {
    position: absolute;
    display: none;
  }

  :host([status='open']) {
    display: block;
  }
 `;

@customElement({
  name: 'child-component',
  template,
  styles
})
export class ChildComponent extends FASTElement {
  @attr
  status: string = '';

  private contextMenuSubscription: Subscription;

  onSlotChanged() {
    const parentElement = this.parentElement as HTMLElement;
    this.contextMenuSubscription = fromEvent<MouseEvent>(parentElement, 'contextmenu')
      .subscribe(event => {
        event.preventDefault();
        this.open(event);
      });
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.contextMenuSubscription) {
      this.contextMenuSubscription.unsubscribe();
    }
  }

  /**
   * Display the menu by setting the status attribute to "open"
   * @param event 
   */
  public open(event: MouseEvent | PointerEvent) {
    this.style.left = event.offsetX + 'px';
    this.style.top = event.offsetY + 'px';
    this.style.bottom = `auto`;
    this.style.right = `auto`;
    this.$emit('change', `open`);
  }
}