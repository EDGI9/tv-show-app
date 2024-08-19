import { describe, it, expect, beforeEach } from 'vitest';
import { mount, VueWrapper, DOMWrapper } from '@vue/test-utils';
import { ComponentPublicInstance } from 'vue';
import ImageFrameComponent from '../ImageFrame.vue';

describe('ImageFrame', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;
  let component: DOMWrapper<HTMLButtonElement>;
  const props = {
    src: 'srcString',
    alt: 'Alternative text',
  };

  beforeEach(() => {
    wrapper = mount(ImageFrameComponent, {
      props: props,
    });
    component = wrapper.find('[data-testid="qa-image-frame"]');
  });

  it('Renders the component', () => {
    expect(component.exists()).toBeTruthy();
  });

  it('Check if image has right attributes', () => {
    expect(component.attributes().src).toBeTruthy();
    expect(component.attributes().alt).toBeTruthy();
    expect(component.attributes().src).toEqual(props.src);
    expect(component.attributes().alt).toEqual(props.alt);
  });
});
