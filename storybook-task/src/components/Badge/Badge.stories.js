import React from 'react'

import Badge from './Badge'

export default {
    component: Badge,
    title: 'Workshop/Badge',
    argTypes: {
        label: { control: 'text'}
    },
    args: {
        label: "Badge",
        
    }
}

const Template = args => <Badge {...args} />

export const Default = Template.bind({})
