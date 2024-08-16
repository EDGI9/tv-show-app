import { describe, it, expect, beforeEach, vi } from 'vitest';
import { mount, VueWrapper, DOMWrapper} from '@vue/test-utils';
import { ComponentPublicInstance } from 'vue';
import ListComponent from '../List.vue';

import List  from "../../__mocks__/list";

describe('List', () => {

    let wrapper: VueWrapper<ComponentPublicInstance>;
    let component: DOMWrapper<HTMLButtonElement>;
    const props = {
       items: List,
       callback: vi.fn(),
    }

    beforeEach(() => {
        wrapper = mount(ListComponent, {
            props: props,
        });
         component = wrapper.find('[data-testid="qa-list"]');
    });

    it('Renders the component', () => {
        expect(component.exists()).toBeTruthy();
    });

    it('Element is rendered inside slot', () => {
        const options = component.findAll('option');
        expect(options).toHaveLength(props.items.length);
        options.forEach((option, index) => {
            expect(option.text()).toBe(props.items[index].text);
            expect(option.element.value).toBe(props.items[index].id);
        });
    });

    it('Callback functino is triggered', async () => {
        await component.trigger('change');
        expect(props.callback).toHaveBeenCalled();
    });


});