import { describe, it, expect, beforeEach } from 'vitest';
import { mount, VueWrapper, DOMWrapper } from '@vue/test-utils';
import { ComponentPublicInstance } from 'vue';
import DescriptionComponent from '../Description.vue';

describe('Description', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>;
  let component: DOMWrapper<HTMLButtonElement>;
  const props = {
    text: 'My Description',
  };

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
