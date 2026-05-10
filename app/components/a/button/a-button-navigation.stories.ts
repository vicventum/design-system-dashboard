import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from 'storybook/test'
import AButtonNavigation, { type ButtonSize } from './a-button-navigation.vue'

const meta = {
    title: 'Atoms/Button/AButtonNavigation',
    component: AButtonNavigation,
    parameters: {
        docs: {
            description: {
                component: 'Navigation button with icon, useful for moving between pages or triggering an action. Generally used in the header of main sections alongside the [DCardHeader](?path=/docs/design-card-header--docs) component.',
            },
        },
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl'] satisfies ButtonSize[],
        },
        'onOn-click': {
            table: {
                disable: true,
            },
        },
    },
    args: {
        'onOn-click': fn(),
    },
} satisfies Meta<typeof AButtonNavigation>

type Story = StoryObj<typeof meta>

export default meta

export const Default: Story = {
    args: {
        icon: 'i-carbon-arrow-left',
        to: '',
        hasBackAction: false,
    },
}

export const CustomIconWithCustomRoute: Story = {
    args: {
        icon: 'i-carbon-home',
        to: '/',
        hasBackAction: false,
    },
}

export const HasBackAction: Story = {
    args: {
        icon: 'i-carbon-arrow-left',
        to: '',
        hasBackAction: true,
    },
}

export const LargeButton: Story = {
    args: {
        icon: 'i-carbon-arrow-left',
        to: '',
        hasBackAction: true,
        size: 'xl',
    },
}
