import type { Meta, StoryObj } from '@storybook/vue3'
import type { DropdownMenuItem } from '@nuxt/ui'
import type { NavbarLinks } from '#layers/design-system/app/types'

import LDashboardContainer, { type Props } from './l-dashboard-container.vue'
import LSidebar from './l-sidebar.vue'
import LNavbar from './l-navbar.vue'

/**
 * High-level layout container for building dashboards.
 * It provides a structure with a sidebar area and a main panel (header + body).
 * Built with `UDashboardGroup` and `UDashboardPanel` from `@nuxt/ui`.
 */
const meta = {
    title: 'Layouts/LDashboardContainer',
    component: LDashboardContainer,
    decorators: [
        () => ({
            template: `
                <div class="h-[600px]">
                    <story />
                </div>
            `,
        }),
    ],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component:
                    'High-level layout container for building dashboards. It provides a structure with a sidebar area and a main panel (header + body).',
            },
        },
    },
    argTypes: {
        id: {
            control: 'text',
            description: 'ID for the main dashboard panel.',
            table: {
                category: 'props',
            },
        },
        unit: {
            control: 'select',
            options: ['rem', 'px', '%'] satisfies Props['unit'][],
            description: 'The unit used for sizing sub-components.',
            table: {
                category: 'props',
            },
        },
        as: {
            control: 'text',
            description: 'The HTML tag to use for the dashboard group.',
            table: {
                category: 'props',
            },
        },
        storage: {
            control: 'select',
            options: ['cookie', 'local'] satisfies Props['storage'][],
            description: 'The storage type to use for the dashboard group.',
            table: {
                category: 'props',
            },
        },
        storageKey: {
            control: 'text',
            description: 'The storage key to use for the dashboard group.',
            table: {
                category: 'props',
            },
        },
        persistent: {
            control: 'boolean',
            description: 'Whether the dashboard group should be persistent.',
            table: {
                category: 'props',
            },
        },
    },
    args: {
        unit: 'rem',
        id: 'dashboard-main',
    },
} satisfies Meta<typeof LDashboardContainer>

export default meta
type Story = StoryObj<typeof meta>

const mockLinks = [
    { label: 'Home', icon: 'i-carbon-home', to: '/' },
    { label: 'Projects', icon: 'i-carbon-folder', to: '/projects' },
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

const linksBody = [
    [
        { label: 'Dashboard', icon: 'i-carbon-dashboard', to: '/' },
        { label: 'Analytics', icon: 'i-carbon-chart-bar', to: '/analytics' },
        { label: 'Users', icon: 'i-carbon-group', to: '/users' },
    ],
] satisfies DropdownMenuItem[][]

export const Default: Story = {
    render: (args) => ({
        components: { LDashboardContainer, LNavbar, LSidebar },
        setup() {
            return { args, mockLinks, mockMenuItems, linksBody }
        },
        template: `
                <LDashboardContainer v-bind="args">
                    <template #header>
                        <LNavbar :links="mockLinks" :menu-items="mockMenuItems" menuUserAvatarSrc="https://placehold.co/50x50" :defaultSize="17" />
                    </template>
                    <template #sidebar>
                        <LSidebar :links-body="linksBody" logo-default-src="https://placehold.co/100x100" />
                    </template>
                    <template #body>
                        <div class="h-full bg-gray-50 dark:bg-gray-950">
                            <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm h-64 flex items-center justify-center">
                                <span class="text-subtle italic">Main Content Body Area</span>
                            </div>
                        </div>
                    </template>
                </LDashboardContainer>
        `,
    }),
}

export const JustNavbar: Story = {
    render: (args) => ({
        components: { LDashboardContainer, LNavbar, LSidebar },
        setup() {
            return { args, mockMenuItems }
        },
        template: `
                <LDashboardContainer v-bind="args">
                    <template #header>
                        <LNavbar :links="mockLinks" :menu-items="mockMenuItems" menuUserAvatarSrc="https://placehold.co/50x50" :defaultSize="17" />
                    </template>
                    <template #body>
                        <div class="h-full bg-gray-50 dark:bg-gray-950">
                            <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm h-64 flex items-center justify-center">
                                <span class="text-subtle italic">Main Content Body Area</span>
                            </div>
                        </div>
                    </template>
                </LDashboardContainer>
        `,
    }),
}

export const JustSidebar: Story = {
    render: (args) => ({
        components: { LDashboardContainer, LNavbar, LSidebar },
        setup() {
            return { args, linksBody }
        },
        template: `
                <LDashboardContainer v-bind="args">
                    <template #sidebar>
                        <LSidebar :links-body="linksBody" logo-default-src="https://placehold.co/100x100" />
                    </template>
                    <template #body>
                        <div class="h-full bg-gray-50 dark:bg-gray-950">
                            <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm h-64 flex items-center justify-center">
                                <span class="text-subtle italic">Main Content Body Area</span>
                            </div>
                        </div>
                    </template>
                </LDashboardContainer>
        `,
    }),
}
