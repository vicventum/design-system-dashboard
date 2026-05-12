<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'
import BSlideover from '~/components/b/slideover/b-slideover.vue'
import type { NavbarLinks } from '~/types'

const menuItems = [
    [{ label: 'Profile', icon: 'i-carbon-user' }],
    [{ label: 'Settings', icon: 'i-carbon-settings' }],
] satisfies DropdownMenuItem[][]

const sidebarLinks = [
    [
        {
            label: 'General',
            type: 'label',
        },
        {
            label: 'Dashboard',
            icon: 'i-carbon-dashboard',
            to: '/',
            onSelect: (e) => {
                isOpen.value = false
            },
        },
        {
            label: 'Projects',
            icon: 'i-carbon-catalog',
            to: '/projects',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Alerts',
            icon: 'i-carbon-warning',
            to: '/alerts',
            badge: '3',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Calendar',
            icon: 'i-carbon-calendar',
            to: '/calendar',
            defaultOpen: true,
            type: 'trigger',
            children: [
                {
                    label: 'My Schedule',
                    icon: 'i-carbon-calendar',
                    to: '/calendar/my-schedule',
                    onSelect: () => (isOpen.value = false),
                },
                {
                    label: 'All Events',
                    icon: 'i-carbon-group',
                    to: '/calendar/all-events',
                    onSelect: () => (isOpen.value = false),
                },
                {
                    label: 'Requests',
                    icon: 'i-carbon-thumbs-up',
                    to: '/calendar/requests',
                    onSelect: () => (isOpen.value = false),
                },
            ],
        },
        {
            label: 'Tasks',
            icon: 'i-carbon-task',
            to: '/tasks',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Reports',
            icon: 'i-carbon-report',
            to: '/reports',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Messages',
            icon: 'i-carbon-chat',
            to: '/messages',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Finance',
            type: 'label',
        },
        {
            label: 'Invoices',
            icon: 'i-carbon-document',
            to: '/finance/invoices',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Financial Stats',
            icon: 'i-carbon-chart-bar',
            to: '/finance/stats',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Portfolio',
            icon: 'i-carbon-portfolio',
            to: '/finance/portfolio',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Summary',
            icon: 'i-carbon-summary',
            to: '/finance/summary',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Team',
            type: 'label',
        },
        {
            label: 'Members',
            icon: 'i-carbon-group',
            to: '/team/members',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Time Off',
            icon: 'i-carbon-tree',
            to: '/team/time-off',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Contractors',
            icon: 'i-carbon-partnership',
            to: '/team/contractors',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Roles & Permissions',
            icon: 'i-carbon-password',
            to: '/team/roles',
            onSelect: () => (isOpen.value = false),
        },
    ],
    [
        {
            label: 'Changelog',
            icon: 'i-carbon-recently-viewed',
            to: '/changelog',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Settings',
            icon: 'i-carbon-settings',
            to: '/settings',
            onSelect: () => (isOpen.value = false),
        },
    ],
] satisfies NavigationMenuItem[][]

const links = [
    { label: 'Pending tasks', to: '/pending-tasks' },
    { label: 'My schedule', to: '/my-schedule' },
] satisfies NavbarLinks

const isOpen = ref(false)
const isOpenSlideover = ref(false)
const searchTerm = ref('')
</script>

<template>
    <LDashboardContainer>
        <template #sidebar>
            <LSidebar
                v-model:is-open="isOpen"
                logo-default-src="/media/img/ui-logo-placeholder.svg"
                logo-mini-src="/media/img/ui-logo-placeholder.svg"
                :links-body="sidebarLinks.slice(0, 1)"
                :links-body-bottom="sidebarLinks.slice(1)"
                :links-footer="sidebarLinks.slice(1)"
            />
        </template>

        <template #header>
            <LNavbar
                v-model:search-term="searchTerm"
                :links="links"
                :menu-items="menuItems"
                search-placeholder="Search..."
                menu-user-name="Victor"
                menu-user-email="victor@email.com"
            />
        </template>

        <template #body>
            <BCard>
                <template #header>
                    <DCardHeader title="Main Content Body Area" />
                </template>
                <ACardInner>
                    <p class="text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto dicta cupiditate
                        suscipit veniam minus pariatur totam, impedit porro similique at, vero iusto quaerat,
                        ipsam ad aliquid id nulla iure voluptates.
                    </p>

                </ACardInner>
                <ACardInner>
                    <UButton @click="isOpenSlideover = true" label="Open Slideover" color="neutral" variant="subtle" />

                    <BSlideover v-model="isOpenSlideover" title="Slideover with description" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." class="w-1/2 max-w-[800px]">
                        <p>This is the custom body of the slideover.</p>
                    </BSlideover>
                </ACardInner>
            </BCard>
        </template>
    </LDashboardContainer>
</template>
