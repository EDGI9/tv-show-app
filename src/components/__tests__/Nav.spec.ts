import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import NavComponent from '../Nav.vue';

describe('Description', () => {

    let wrapper; 
    let component;
    const props = {
        items: [
                {
                    text:'Item 1', 
                    href: "href 1"
                },
                {
                    text:'Item 2', 
                    href: "href 2"
                },
            ],
    }

    beforeEach(() => {
        wrapper = mount(NavComponent, {
            props: {
                items: props.items,
            },
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