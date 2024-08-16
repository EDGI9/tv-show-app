import { describe, it, expect, beforeEach } from 'vitest';
import { mount, VueWrapper, DOMWrapper} from '@vue/test-utils';
import { ComponentPublicInstance } from 'vue';
import EpisodeCard from '../EpisodeCard.vue';
import Episode  from "../../__mocks__/episode";

describe('EpisodeCard', () => {

    let wrapper: VueWrapper<ComponentPublicInstance>;
    let component: DOMWrapper<HTMLButtonElement>;

    const props = {
        data: Episode
    }

    beforeEach(() => {
        wrapper = mount(EpisodeCard, {
            props: props,
        });
        component = wrapper.find('[data-testid="qa-episode-card"]');
    });

    it('Renders the component', () => {
        expect(component.exists()).toBeTruthy();
    });

    it('Renders image', () => {
        const image = wrapper.find('[data-testid="qa-episode-card_image"]');
        expect(image.exists()).toBeTruthy();
        expect(image.attributes().src).toBe(props.data.image);
    });
    it('Renders title', () => {
        const title = wrapper.find('[data-testid="qa-episode-card_title"]');
        expect(title.exists()).toBeTruthy();
        expect(title.text()).toBe(props.data.name);
    });
    it('Renders summary', () => {
        const summary = wrapper.find('[data-testid="qa-episode-card_summary"]');
        expect(summary.exists()).toBeTruthy();
        expect(summary.text()).toBe(props.data.summary);
    });
    it('Renders rating', () => {
        const rating = wrapper.find('[data-testid="qa-episode-card_rating"]');
        expect(rating.exists()).toBeTruthy();
        expect(Number(rating.text())).toBe(props.data.rating);
    });
    it('Renders airdate', () => {
        const airdate = wrapper.find('[data-testid="qa-episode-card_airdate"]');
        expect(airdate.exists()).toBeTruthy();
        expect(airdate.text()).toBe(props.data.airdate);
    });
    it('Renders runtime', () => {
        const runtime = wrapper.find('[data-testid="qa-episode-card_runtime"]');
        expect(runtime.exists()).toBeTruthy();
        expect(Number(runtime.text())).toBe(props.data.runtime);
    });

});