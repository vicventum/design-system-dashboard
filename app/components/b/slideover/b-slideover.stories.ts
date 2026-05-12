import { reactive } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'
import type { SemanticColors } from '#layers/design-system/app/types'
import { fn } from 'storybook/test'
import { semanticColors } from '#layers/design-system/app/utils/util-get-colors-from-css'
import UButton from '@nuxt/ui/components/Button.vue'
import UForm from '@nuxt/ui/components/Form.vue'
import UFormField from '@nuxt/ui/components/FormField.vue'
import UInput from '@nuxt/ui/components/Input.vue'
import BSlideover from './b-slideover.vue'

const meta = {
    title: 'Bases/Slideover/BSlideover',
    component: BSlideover,
    parameters: {
        docs: {
            description: {
                component:
                    'Base slideover component. Its structure consists of a blank body, and a header and footer with a predefined design. It can contain text, any other element in the body, or a form, for which the schema and state can be defined.',
            },
        },
    },
    argTypes: {
        primaryButtonColor: {
            control: 'select',
            options: Object.keys(semanticColors) as SemanticColors[],
        },
        side: {
            control: 'select',
            options: ['left', 'right', 'top', 'bottom'],
        },
        'onOn-click-primary-button': {
            table: { disable: true },
        },
        'onOn-click-secondary-button': {
            table: { disable: true },
        },
        'onOn-submit': {
            table: { disable: true },
        },
        modelValue: {
            control: 'boolean',
            name: 'isOpen',
            description: 'Whether the slideover is open',
            table: {
                category: 'v-model',
            },
        },
    },
    args: {
        'onOn-click-primary-button': fn(),
        'onOn-click-secondary-button': fn(),
        'onOn-submit': fn(),
    },
    render: (args) =>
        ({
            components: { BSlideover, UButton },
            setup() {
                return { args }
            },
            template: `
          <div>
            <UButton label="Open Slideover" @click="args.modelValue = true" />
            <BSlideover v-bind="args" v-model="args.modelValue" />
          </div>
        `,
        }) as any,
} satisfies Meta<typeof BSlideover>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'Slideover Title',
        description: 'This is a description of the slideover.',
        modelValue: false,
        primaryButtonText: 'Save',
        secondaryButtonText: 'Cancel',
        primaryButtonColor: 'primary',
        side: 'right',
    },
}

export const WithTextContent: Story = {
    args: {
        ...Default.args,
        title: 'Text Content',
        description: 'Slideover with simple text content',
        text: 'This is the body text content passed via the "text" prop.',
        modelValue: false,
    },
}

export const WithSlot: Story = {
    args: {
        ...Default.args,
        title: 'With Slot',
        description: 'Slideover with custom content',
        modelValue: false,
    },
    render: (args) =>
        ({
            components: { BSlideover, UButton },
            setup() {
                return { args }
            },
            template: `
          <div>
            <UButton label="Open Slideover" @click="args.modelValue = true" />
            <BSlideover v-bind="args" v-model="args.modelValue">
              <div class="space-y-4">
                <p class="text-sm text-gray-600">
                  This is a custom content area where you can place any elements,
                  such as forms, images, or additional text.
                </p>
                <div class="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <span class="text-blue-700 font-medium">Note:</span>
                  Custom slots allow for maximum flexibility in slideover design.
                </div>
              </div>
            </BSlideover>
          </div>
        `,
        }) as any,
}

export const WithForm: Story = {
    args: {
        ...Default.args,
        title: 'With Form',
        description: 'Slideover with form',
        modelValue: false,
        class: 'w-74',
    },
    render: (args) =>
        ({
            components: {
                BSlideover,
                UButton: UButton as any,
                UForm: UForm as any,
                UFormField: UFormField as any,
                UInput: UInput as any,
            },
            setup() {
                const schema = {
                    email: {
                        type: 'string',
                        required: true,
                        format: 'email',
                    },
                    password: {
                        type: 'string',
                        required: true,
                        format: 'password',
                    },
                }
                const state = reactive({
                    email: '',
                    password: '',
                })
                return { args, schema, state }
            },
            template: `
          <div>
            <UButton label="Open Slideover" @click="args.modelValue = true" />
            <BSlideover v-bind="args" v-model="args.modelValue">
                <UForm :schema="schema" :state="state" class="space-y-4 w-full">
                    <UFormField label="Email" name="email" class="w-full">
                        <UInput v-model="state.email" type="email" />
                    </UFormField>

                    <UFormField label="Password" name="password" class="w-full">
                        <UInput v-model="state.password" type="password" />
                    </UFormField>
                </UForm>
            </BSlideover>
          </div>
        `,
        }) as any,
}

export const NoBlockButtons: Story = {
    args: {
        ...Default.args,
        title: 'No Block Buttons',
        description: 'Buttons are not full width',
        hasButtonsBlock: false,
        modelValue: false,
        text: 'Check the buttons below.',
        class: 'w-2/3 max-w-[1000px]',
    },
}

export const NoFooter: Story = {
    args: {
        ...Default.args,
        title: 'No Footer',
        description: 'This slideover has no footer',
        hasFooter: false,
        modelValue: false,
        text: 'Footer is hidden.',
    },
}

export const DisabledPrimary: Story = {
    args: {
        ...Default.args,
        title: 'Disabled Action',
        description: 'Primary button is disabled',
        isPrimaryButtonDisabled: true,
        modelValue: false,
        text: 'You cannot save right now.',
    },
}

export const LeftSide: Story = {
    args: {
        ...Default.args,
        title: 'Left Side',
        description: 'Slideover opening from the left',
        side: 'left',
        modelValue: false,
        text: 'This slideover opens from the left side instead of right.',
    },
}
