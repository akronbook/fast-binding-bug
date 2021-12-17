import {
    provideFASTDesignSystem,
    fastHorizontalScroll,
    fastButton,
    fastFlipper
} from '@microsoft/fast-components';
provideFASTDesignSystem()
    .register(
        fastHorizontalScroll(),
        fastButton(),
        fastFlipper()
    );