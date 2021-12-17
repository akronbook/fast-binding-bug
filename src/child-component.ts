

import {
  FASTElement, customElement, html, css,
  attr, slotted, observable
} from '@microsoft/fast-element';
import { fromEvent, Subscription } from 'rxjs';

const template = html<ChildComponent>`
  <div>
  <slot ${slotted('slottedNodes')} @slotchange="${x => x.onSlotChanged()}"></slot>
  </div>

 `;

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
  @observable
  slottedNodes: Node[];

  @attr
  status: string = '';

  private contextMenuSubscription: Subscription;

  onSlotChanged() {
    const parentElement = this.parentElement as HTMLElement;
    this.contextMenuSubscription = fromEvent<MouseEvent>(parentElement, 'contextmenu')
      .subscribe(event => {
        event.preventDefault();
        event.stopPropagation();
        this.open(event);
      });
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.contextMenuSubscription) {
      this.contextMenuSubscription.unsubscribe();
    }
  }

  public open(event: MouseEvent | PointerEvent) {
    this.style.left = event.offsetX + 'px';
    this.style.top = event.offsetY + 'px';
    this.style.bottom = `auto`;
    this.style.right = `auto`;
    this.status = 'open';
  }
}