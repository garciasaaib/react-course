import React from 'react';

import Task from './Task';

export default {
    component: Task,
    title: 'Workshop/Task',
};

/***     
    Arguments or args for short, allow us to live-edit our components with the controls addon without restarting Storybook. Once an args value changes, so does the component.

    Template is just convenient to set several variations
 */
const Template = args => <Task {...args} />;

/**
    Template.bind({}) is a standard JavaScript technique for making a copy of a function.
 */
export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
};


const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;
export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString,
  },
};
/**
    Actions help you verify interactions when building UI components in isolation. Oftentimes you won't have access to the functions and state you have in context of the app. Use action() to stub them in.
 */

