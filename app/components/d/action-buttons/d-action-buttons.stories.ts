import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from 'storybook/test'
import { semanticColors } from '#layers/design-system/app/utils/util-get-colors-from-css'
import DActionButtons from './d-action-buttons.vue'
import type { SemanticColors } from '#layers/design-system/app/types'

const meta = {
    title: 'Design/ActionButtons',
    component: DActionButtons,
    parameters: {
        docs: {
            description: {
                component:
                    'Primary and secondary action buttons with layout variations. Generally used in sections that require a primary and/or secondary button, such as in the [DCardHeader](/docs/design-card-header--docs) section, or in the footer of modals like [BModal](/docs/bases-modal-bmodal--docs).',
            },
        },
    },
    argTypes: {
        primaryButtonColor: {
            control: 'select',
            options: Object.keys(semanticColors) as SemanticColors[],
        },
        'onOn-click-primary-button': {
            table: { disable: true },
        },
        'onOn-click-secondary-button': {
            table: { disable: true },
        },
    },
    args: {
        'onOn-click-primary-button': fn(),
        'onOn-click-secondary-button': fn(),
    },
} satisfies Meta<typeof DActionButtons>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        primaryButtonText: 'Confirm',
        secondaryButtonText: 'Cancel',
    },
}

export const WithIcon: Story = {
    args: {
        ...Default.args,
        primaryButtonText: 'Add',
        primaryButtonIcon: 'i-carbon-add',
    },
}

export const WithTrailingIcon: Story = {
    args: {
        primaryButtonText: 'Next',
        primaryButtonTrailingIcon: 'i-carbon-arrow-right',
        secondaryButtonText: 'Back',
    },
}

export const Block: Story = {
    args: {
        ...Default.args,
        hasButtonsBlock: true,
    },
}

export const Reverse: Story = {
    args: {
        primaryButtonText: 'Next',
        secondaryButtonText: 'Back',
        isReverse: true,
    },
}

export const DisabledPrimary: Story = {
    args: {
        ...Default.args,
        isPrimaryButtonDisabled: true,
    },
}

export const OnlyPrimaryAndUrl: Story = {
    args: {
        primaryButtonText: 'Go to home',
        primaryButtonTo: '/',
    },
}
