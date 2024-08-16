import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import DescriptionComponent from '../Description.vue';

describe('Description', () => {

    let wrapper; 
    let component;
    const props = {
        text: 'My Description',
    }

    beforeEach(() => {
        wrapper = mount(DescriptionComponent, {
            props: props,
        });
        component = wrapper.find('[data-testid="qa-description"]');
    });

    it('Renders the component', () => {
        expect(component.exists()).toBeTruthy();
    });

    it('Renders the text prop correctly', () => {
        expect(component.text()).toBe(props.text);
    });

});