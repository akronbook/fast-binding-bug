export { ChildComponent } from './child-component';
export { ParentComponent } from './parent-component';
import {
    provideFASTDesignSystem,
    fastButton,
    fastMenu,
    fastMenuItem
} from '@microsoft/fast-components';
provideFASTDesignSystem()
    .register(
        fastButton(),
        fastMenu(),
        fastMenuItem()
    );