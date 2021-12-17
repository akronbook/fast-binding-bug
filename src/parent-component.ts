import { FASTElement, customElement, html, css, attr, observable } from '@microsoft/fast-element';

const template = html<ParentComponent>`
  <div>
     <child-component :status=${(x) => x.parentStatus}>
      <fast-menu>
      <fast-menu-item @click="${(x) => x.closeMenu()}">Close Menu</fast-menu-item>
      </fast-menu>
    </child-component>
    <div>Status = ${(x) => x.parentStatus}</div>
  </div>
 `;

const styles = css`
  :host {
    position: relative;
    height: 100%;
    display: block;
  }
 `;

@customElement({
  name: 'parent-component',
  template,
  styles,
  shadowOptions: null
})
export class ParentComponent extends FASTElement {

  @observable
  parentStatus: string = 'none';

  public closeMenu() {
    this.parentStatus = 'none';
  }
}