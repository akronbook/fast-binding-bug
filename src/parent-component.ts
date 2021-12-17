import { FASTElement, customElement, html, css, attr } from '@microsoft/fast-element';

const template = html<ParentComponent>`
   <div>
        <child-component></child-component>
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

    @attr
    status: string = '';
  }