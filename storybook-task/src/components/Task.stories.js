import React from 'react';

import Task from './Task';

export default {
    component: Task,
    title: 'Task',
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


/**
    Actions help you verify interactions when building UI components in isolation. Oftentimes you won't have access to the functions and state you have in context of the app. Use action() to stub them in.
 */

