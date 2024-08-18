import { describe, it, expect, beforeEach } from 'vitest';
import { mount, VueWrapper, DOMWrapper} from '@vue/test-utils';
import { ComponentPublicInstance } from 'vue';
import ShowCard from '../ShowCard.vue';
import Show  from "../../__mocks__/show";

describe('ShowCard', () => {

    let wrapper: VueWrapper<ComponentPublicInstance>;
    let component: DOMWrapper<HTMLButtonElement>;

    const props = {
        data: Show
    }

    beforeEach(() => {
        wrapper = mount(ShowCard, {
            props: props,
        });
        component = wrapper.find('[data-testid="qa-show-card"]');
    });

    it('Renders the component', () => {
        expect(component.exists()).toBeTruthy();
    });

    it('Renders image', () => {
        const image = wrapper.find('[data-testid="qa-show-card_image"]');
        expect(image.exists()).toBeTruthy();
        expect(image.attributes().src).toBe(props.data.image);
    });
    it('Renders title', () => {
        const title = wrapper.find('[data-testid="qa-show-card_title"]');
        expect(title.exists()).toBeTruthy();
        expect(title.text()).toBe(props.data.name);
    });
    it('Renders summary', () => {
        const summary = wrapper.find('[data-testid="qa-show-card_summary"]');
        expect(summary.exists()).toBeTruthy();
        expect(summary.text()).toBe(props.data.summary);
    });
    it('Renders rating', () => {
        const rating = wrapper.find('[data-testid="qa-show-card_rating"]');
        expect(rating.exists()).toBeTruthy();
        expect(Number(rating.text())).toBe(props.data.rating);
    });

});