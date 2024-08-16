import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount, VueWrapper, DOMWrapper} from '@vue/test-utils';
import { ComponentPublicInstance } from 'vue';

import ButtonComponent from '../Button.vue';

describe('Button', () => {

    let wrapper: VueWrapper<ComponentPublicInstance>;
    let component: DOMWrapper<HTMLButtonElement>;
    const props = {
        text: 'Click Me',
        onClick: vi.fn()
    }

    beforeEach(() => {
        wrapper = mount(ButtonComponent, {
            props: props,
        });
        component = wrapper.find('[data-testid="qa-button"]');
    });

    it('Renders the component', () => {
        expect(component.exists()).toBeTruthy();
    });

    it('Renders the text prop correctly', () => {
        expect(component.text()).toBe(props.text);
    });

});