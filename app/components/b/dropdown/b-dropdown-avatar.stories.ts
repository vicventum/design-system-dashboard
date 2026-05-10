import type { Meta, StoryObj } from '@storybook/vue3'
import type { DropdownMenuItem } from '@nuxt/ui'
import BDropdownAvatar from './b-dropdown-avatar.vue'
import UButton from '@nuxt/ui/components/Button.vue'
import UAvatar from '@nuxt/ui/components/Avatar.vue'
import AButtonAvatarDropdown from '#layers/design-system/app/components/a/button/a-button-avatar-dropdown.vue'

const meta = {
    title: 'Bases/Dropdown/BDropdownAvatar',
    component: BDropdownAvatar,
    parameters: {
        docs: {
            description: {
                component:
                    'A specialized dropdown menu for displaying user information. Typically used in conjunction with the [AButtonAvatarDropdown](?path=/docs/bases-button-abuttonavatardropdown--docs) component.',
            },
        },
    },
    render: (args) => ({
        components: { BDropdownAvatar, UButton, UAvatar, AButtonAvatarDropdown },
        setup() {
            return { args }
        },
        template: `
        <BDropdownAvatar v-bind="args">
            <UButton icon="i-carbon-menu" color="neutral" variant="outline" />
        </BDropdownAvatar>
    `,
    }),
    argTypes: {
        userName: {
            control: 'text',
        },
        userEmail: {
            control: 'text',
        },
        userTo: {
            control: 'text',
        },
        items: {
            control: 'object',
        },
    },
} satisfies Meta<typeof BDropdownAvatar>

export default meta

type Story = StoryObj<typeof meta>

const items = [
    [{ label: 'Profile', icon: 'i-carbon-user' }],
    [{ label: 'Settings', icon: 'i-carbon-settings' }],
] satisfies DropdownMenuItem[][]

export const Default: Story = {
    args: {
        userName: 'John Doe',
        userEmail: 'john@example.com',
        items,
    },
}

export const WithAButtonAvatarDropdownComponent: Story = {
    name: 'With AButtonAvatarDropdown Component',
    render: (args) => ({
        components: { BDropdownAvatar, AButtonAvatarDropdown },
        setup() {
            return { args }
        },
        template: `
        <BDropdownAvatar v-bind="args">
            <span>
                <AButtonAvatarDropdown
                    label="Custom Trigger"
                    color="success"
                    trailing-icon="i-carbon-chevron-down"
                    src="https://avatars.githubusercontent.com/u/739984?v=4"
                />
            </span>
        </BDropdownAvatar>
    `,
    }),
    args: {
        userName: 'Admin',
        userEmail: 'admin@sys.com',
        userTo: '/profile',
        items: [
            ...items,
            [
                {
                    label: 'Logout',
                    icon: 'i-carbon-logout',
                    color: 'error',
                    trailingIcon: 'i-carbon-logout',
                },
            ],
        ],
    },
}

export const Minimal: Story = {
    args: {
        userName: 'Jane',
        items: [[{ label: 'Logout', icon: 'i-carbon-logout' }]],
    },
}

export const WithNavigation: Story = {
    args: {
        userName: 'Admin user',
        userEmail: 'admin@system.com',
        userTo: '/profile',
        items,
    },
}

export const CustomTrigger: Story = {
    render: (args) => ({
        components: { BDropdownAvatar, UButton },
        setup() {
            return { args }
        },
        template: `
        <BDropdownAvatar v-bind="args">
            <UButton label="Custom Trigger" color="primary" trailing-icon="i-carbon-chevron-down" />
        </BDropdownAvatar>
    `,
    }),
    args: {
        userName: 'Custom User',
        items,
    },
}

export const CustomUserSlot: Story = {
    render: (args) => ({
        components: { BDropdownAvatar, UAvatar },
        setup() {
            return { args }
        },
        template: `
        <BDropdownAvatar v-bind="args">
            <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" size="sm" />
            <template #user="{ item }">
            <div class="flex items-center gap-2 p-1">
                <UAvatar :src="'https://ui.nuxt.com/avatars/' + item.userName + '.png'" size="xs" />
                <div class="text-start">
                <p class="text-sm font-bold text-primary-600">Admin: {{ item.userName }}</p>
                <p class="text-xs text-gray-500">{{ item.userEmail }}</p>
                </div>
            </div>
            </template>
        </BDropdownAvatar>
    `,
    }),
    args: {
        userName: 'benjamincanac',
        userEmail: 'ben@nuxt.com',
        items,
    },
}
