export { ChildComponent } from './child-component';
export { ParentComponent } from './parent-component';
import {
    provideFASTDesignSystem,
    fastButton
} from '@microsoft/fast-components';
provideFASTDesignSystem()
    .register(
        fastButton()
    );