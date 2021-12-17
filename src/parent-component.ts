import { FASTElement, customElement, html, css, attr, observable } from '@microsoft/fast-element';

const template = html<ParentComponent>`
  <div>
     <child-component :status=${(x) => x.parentStatus}>
      <fast-menu>
      <fast-menu-item @click="${(x) => x.closeMenu()}">Close Menu</fast-menu-item>
      </fast-menu>
    </child-component>
    <div>Please right click the text to show popup menu. Status = ${(x) => x.parentStatus}</div>
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
  styles
})
export class ParentComponent extends FASTElement {

  @observable
  parentStatus: string = 'test'; // Default attribute value

  public closeMenu() {
    this.parentStatus = 'none'; // The status will be passed to the child element (i.e. a menu), forcing the menu to be closed.
  }
}