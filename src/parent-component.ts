import { FASTElement, customElement, html, css, attr, observable } from '@microsoft/fast-element';

const template = html<ParentComponent>`
  <div>
    <fast-button @click="${(x)=>x.updateStatus1()}">Status 1</fast-button>
    <fast-button @click="${(x)=>x.updateStatus2()}">Status 2</fast-button>
    <child-component :status=${(x) => x.parentStatus}>
      <fast-menu>
      <fast-menu-item @click="${(x, c) => x.closeMenu()}">Close Menu</fast-menu-item>
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
  parentStatus: string = 'Status 1';

  public updateStatus1() {
    this.parentStatus = 'Status 1';
  }

  public updateStatus2() {
    this.parentStatus = 'Status 2';   
  }

  public closeMenu() {
    this.parentStatus = 'none';   
  }
}