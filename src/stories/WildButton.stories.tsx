// WildButton.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import {WildButton} from './WildButton';

//👇 This default export determines where your story goes in the story list
export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'WildButton',
    component: WildButton,
} as ComponentMeta<typeof WildButton>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof WildButton> = (args) => <WildButton {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
    label: 'Wild Button'
    /*👇 The args you need here will depend on your component */
};
