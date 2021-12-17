import { FASTElement, customElement, html, css, attr, observable } from '@microsoft/fast-element';

const template = html<ParentComponent>`
  <div>
    <fast-button @click="${(x)=>x.updateStatus1()}">Status 1</fast-button>
    <fast-button @click="${(x)=>x.updateStatus2()}">Status 2</fast-button>
    <child-component :status=${(x) => x.parentStatus}></child-component>
  </div>
 `;

const styles = css`
 `;

@customElement({
  name: 'parent-component',
  template,
  styles
})
export class ParentComponent extends FASTElement {

  @observable
  parentStatus: string = 'Parent Status';

  public updateStatus1() {
    this.parentStatus = 'Status 1';
  }

  public updateStatus2() {
    this.parentStatus = 'Status 2';   
  }
}