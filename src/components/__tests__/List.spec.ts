import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import ListComponent from '../List.vue';

describe('List', () => {

    let wrapper; 
    let component;
    const props = {
        text: '<h1 id="element">Custom Content</h1>',
    }

    beforeEach(() => {
        wrapper = mount(ListComponent, {
            slots: {
                default: props.text,
            },
        });
        component = wrapper.find('[data-testid="qa-list"]');
    });

    it('Renders the component', () => {
        expect(component.exists()).toBeTruthy();
    });

    it('Element is rendered inside slot', () => {
        expect(component.find('#element').exists()).toBe(true);
    });

});