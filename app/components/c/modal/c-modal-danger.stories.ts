import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from 'storybook/test'
import CModalDanger from './c-modal-danger.vue'
import UButton from '@nuxt/ui/components/Button.vue'

const meta = {
    title: 'Composites/Modal/CModalDanger',
    component: CModalDanger,
    parameters: {
        docs: {
            description: {
                component:
                    'Modal component variant of [BModal](/docs/bases-modal-bmodal--docs), specifically for displaying a danger modal. It displays the footer buttons in block mode by default, and the main action button in "error" color.',
            },
        },
    },
    argTypes: {
        'onOn-click-primary-button': {
            table: { disable: true },
        },
        'onOn-click-secondary-button': {
            table: { disable: true },
        },
        modelValue: {
            control: 'boolean',
            name: 'isOpen',
            description: 'Whether the modal is open',
        },
    },
    args: {
        'onOn-click-primary-button': fn(),
        'onOn-click-secondary-button': fn(),
    },
    render: (args) =>
        ({
            components: { CModalDanger, UButton },
            setup() {
                return { args }
            },
            template: `
          <div>
            <UButton label="Open Danger Modal" color="error" @click="args.modelValue=true" icon="i-carbon-trash-can" />

            <CModalDanger v-bind="args" v-model="args.modelValue" />
          </div>
        `,
        }) as any,
} satisfies Meta<typeof CModalDanger>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'Delete Item',
        description: 'Are you sure you want to delete this item?',
        modelValue: false,
        text: 'This action is irreversible and cannot be undone.',
    },
}

export const CustomButtonsLabels: Story = {
    args: {
        ...Default.args,
        title: 'Destructive Action',
        description: 'Proceed with caution',
        modelValue: false,
        primaryButtonText: 'Destroy',
        secondaryButtonText: 'Abort',
        text: 'Custom button labels example.',
    },
}

export const WithSlot: Story = {
    args: {
        title: 'Custom Content',
        description: 'Modal with custom slot content',
        modelValue: false,
    },
    render: (args) =>
        ({
            components: { CModalDanger, UButton },
            setup() {
                return { args }
            },
            template: `
          <div>
            <UButton label="Open Danger Slot Modal" color="error" @click="args.modelValue=true" icon="i-carbon-trash-can" />

            <CModalDanger v-bind="args" v-model="args.modelValue">
                <div class="space-y-4">
                    <div class="p-4 bg-red-50 border border-red-200 rounded-lg">
                        <h4 class="text-red-800 font-semibold mb-2">Warning Details</h4>
                        <ul class="text-sm text-red-700 space-y-1">
                            <li>• All associated data will be permanently deleted</li>
                            <li>• This action cannot be reversed</li>
                            <li>• Other users may be affected</li>
                        </ul>
                    </div>
                    <div class="flex items-center space-x-2">
                        <input type="checkbox" id="confirm" class="rounded">
                        <label for="confirm" class="text-sm text-gray-600">
                            I understand the consequences
                        </label>
                    </div>
                </div>
            </CModalDanger>
          </div>
        `,
        }) as any,
}
