import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import TitleComponent from '../Title.vue';

describe('Title', () => {

    let wrapper; 
    let component;
    const props = {
        text: 'My Title',
        type: 'h1'
    }

    beforeEach(() => {
        wrapper = mount(TitleComponent, {
            props: props,
        });
        component = wrapper.find('[data-testid="qa-title"]');
    });

    it('Renders the component', () => {
        expect(component.exists()).toBeTruthy();
    });

    it('Renders the text prop correctly', () => {
        expect(component.text()).toBe(props.text);
    });

    it('Checks if it is of the correct element type', () => {
        expect(component.element.tagName).toBe(props.type.toUpperCase());
    });

});