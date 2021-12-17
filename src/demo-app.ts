

import { FASTElement, customElement, html, css, observable, slotted, volatile, attr } from '@microsoft/fast-element';

const template = html<DemoApp>`
   <div>
        Hello world!
   </div>
 `;

 const styles = css`
 `;

@customElement({
    name: 'demo-app',
    template,
    styles
  })
  export class DemoApp extends FASTElement {
  }