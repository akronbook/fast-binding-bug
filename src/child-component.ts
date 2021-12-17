

import { FASTElement, customElement, html, css, attr } from '@microsoft/fast-element';

const template = html<ChildComponent>`
   <div>
        Status = ${(x)=>x.status}
   </div>
 `;

 const styles = css`
 `;

@customElement({
    name: 'child-component',
    template,
    styles
  })
  export class ChildComponent extends FASTElement {

    @attr
    status: string = 'Status 1';
  }