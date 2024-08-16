import { describe, it, expect, beforeEach } from 'vitest';
import { mount, VueWrapper, DOMWrapper} from '@vue/test-utils';
import { ComponentPublicInstance } from 'vue';
import NavComponent from '../Nav.vue';

import Nav  from "../../__mocks__/nav";

describe('Description', () => {

    let wrapper: VueWrapper<ComponentPublicInstance>;
    let component: DOMWrapper<HTMLButtonElement>;
    const props = {
        items: Nav
    }

    beforeEach(() => {
        wrapper = mount(NavComponent, {
            props: props,
        });
        component = wrapper.find('[data-testid="qa-nav"]');
    });

    it('Renders the component', () => {
        expect(component.exists()).toBeTruthy();
    });

    it('Renders all li items', () => {

        const listItems = component.findAll('li');
        
        expect(listItems).toHaveLength(props.items.length);

        listItems.forEach((li, index) => {
            const item = props.items[index];
            expect(li.text()).toContain(item.text);
            expect(li.find('a').attributes('href')).toBe(item.href);
        });
    });

});