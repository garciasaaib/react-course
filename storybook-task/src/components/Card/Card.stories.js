import React from 'react'

import Card from './Card'

export default {
    component: Card,
    title: 'Workshop/Card'
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})
