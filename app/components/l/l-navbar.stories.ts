import type { Meta, StoryObj } from '@storybook/vue3'
import type { NavbarLinks } from '#layers/design-system/app/types'
import type { DropdownMenuItem } from '@nuxt/ui'

import UButton from '@nuxt/ui/components/Button.vue'
import { fn } from 'storybook/test'
import LNavbar from './l-navbar.vue'

/**
 * Main navigation bar for the application.
 * Includes a search input, navigation links, notification toggle, and a user profile dropdown.
 * Built with `UDashboardNavbar` from `@nuxt/ui`.
 */
const meta = {
    title: 'Layouts/LNavbar',
    component: LNavbar,
    parameters: {
        docs: {
            description: {
                component:
                    'Main navigation bar for the application. Includes a search input, navigation links, notification toggle, and a user profile dropdown. Intended to be used with the [LDashboardContainer](?path=/docs/layouts-ldashboardcontainer--docs) component that wraps it.',
            },
        },
    },
    argTypes: {
        'onOn-click-notifications': {
            table: { disable: true },
        },
        searchTerm: {
            control: 'text',
            name: 'searchTerm',
            description: 'The search term for the search input (v-model).',
            table: {
                category: 'v-model',
            },
        },
    },
    args: {
        searchTerm: '',
        'onOn-click-notifications': fn(),
    },
} satisfies Meta<typeof LNavbar>

export default meta
type Story = StoryObj<typeof meta>

const mockLinks = [
    { label: 'Home', icon: 'i-carbon-home', to: '/' },
    { label: 'Projects', icon: 'i-carbon-folder', to: '/projects' },
    { label: 'Team', icon: 'i-carbon-group', to: '/team' },
    { label: 'Settings', icon: 'i-carbon-settings', to: '/settings' },
] satisfies NavbarLinks

const mockMenuItems = [
    [
        { label: 'My profile', icon: 'i-carbon-user', to: '/profile' },
        { label: 'Settings', icon: 'i-carbon-settings', to: '/settings' },
    ],
    [
        { label: 'Release notes', icon: 'i-carbon-bullhorn' },
        { label: 'Help & Support', icon: 'i-carbon-help' },
    ],
    [{ label: 'Sign out', icon: 'i-carbon-logout' }],
] satisfies DropdownMenuItem[][]

export const Default: Story = {
    args: {
        links: mockLinks,
        menuUserName: 'John Doe',
        menuUserEmail: 'john.doe@example.com',
        menuUserAvatarSrc: 'https://github.com/vicventum.png',
        menuItems: mockMenuItems,
        hasSearch: true,
        hasNotification: false,
    },
}

export const WithNotifications: Story = {
    args: {
        ...Default.args,
        hasNotification: true,
    },
}

export const WithoutSearch: Story = {
    args: {
        ...Default.args,
        hasSearch: false,
    },
}

export const CustomSearch: Story = {
    args: {
        ...Default.args,
        searchPlaceholder: 'Search components...',
        searchShortcut: 'K',
    },
}

export const WithRightSlot: Story = {
    args: {
        ...Default.args,
    },
    render: (args) => ({
        components: { LNavbar, UButton },
        setup() {
            return { args }
        },
        template: `
            <LNavbar v-bind="args">
                <template #right>
                    <div class="flex items-center gap-4">
                        <UButton color="accent" variant="outline" size="sm">
                            Upgrade Plan
                        </UButton>
                    </div>
                </template>
            </LNavbar>
            `,
    }),
}
