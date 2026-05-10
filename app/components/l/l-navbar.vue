<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'
import type { NavbarLinks } from '~/types'

interface Props {
    /**
     * Placeholder text for the search input
     */
    searchPlaceholder?: string
    /**
     * Keyboard shortcut to focus the search input
     */
    searchShortcut?: string
    /**
     * Items to display in the search dropdown
     */
    searchItems?: DropdownMenuItem[]
    /**
     * Navigation links to display in the navbar
     */
    links?: NavbarLinks
    /**
     * User name to display in the avatar dropdown
     */
    menuUserName?: string
    /**
     * User email to display in the avatar dropdown
     */
    menuUserEmail?: string
    /**
     * User avatar source URL
     */
    menuUserAvatarSrc?: string
    /**
     * User profile link
     */
    menuUserTo?: string
    /**
     * Menu items to display in the avatar dropdown
     */
    menuItems?: DropdownMenuItem[][]
    /**
     * Whether to show the search input
     */
    hasSearch?: boolean
    /**
     * Whether to show the notification dot
     */
    hasNotification?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    searchPlaceholder: 'Search...',
    searchItems: () => [],
    searchShortcut: '/',
    links: () => [
        { label: 'Home', icon: 'i-carbon-home', to: '/' },
        { label: 'Projects', icon: 'i-carbon-folder', to: '/projects' },
        { label: 'Team', icon: 'i-carbon-group', to: '/team' },
        { label: 'Settings', icon: 'i-carbon-settings', to: '/settings' },
    ],
    menuUserName: 'John Doe',
    menuUserEmail: 'john.doe@example.com',
    menuUserAvatarSrc: 'https://github.com/vicventum.png',
    menuItems: () => [
        [
            { label: 'My profile', icon: 'i-carbon-user', to: '/profile' },
            { label: 'Settings', icon: 'i-carbon-settings', to: '/settings' },
        ],
        [
            { label: 'Release notes', icon: 'i-carbon-bullhorn' },
            { label: 'Help & Support', icon: 'i-carbon-help' },
        ],
        [{ label: 'Sign out', icon: 'i-carbon-logout' }],
    ],
    hasSearch: true,
    hasNotification: false,
})

const searchTerm = defineModel<string>('searchTerm', {
    default: '',
    required: true,
})

// const isOpen = defineModel<boolean>('searchOpen', {
//     default: false,
//     required: true,
// })

const inputRef = useTemplateRef('inputRef')

defineShortcuts({
    [props.searchShortcut]: () => {
        inputRef.value?.inputRef?.focus()
    },
})

const emit = defineEmits<{
    /**
     * Emitted when the notification button is clicked
     */
    (e: 'on-click-notifications'): void
}>()

defineSlots<{
    /**
     * Slot for custom content to be displayed in the right side of the navbar
     */
    right?: any
}>()
</script>

<template>
    <UDashboardNavbar :ui="{ left: 'gap-8', right: 'gap-3' }">
        <template #left>
            <!-- <UDashboardSidebarCollapse /> -->

            <UInput
                v-if="hasSearch"
                ref="inputRef"
                v-model="searchTerm"
                :placeholder="searchPlaceholder"
                icon="i-carbon-search"
                name="search"
                class="w-60"
                :ui="{ trailing: 'pe-1' }"
            >
                <template v-if="searchTerm?.length" #trailing>
                    <UButton
                        color="neutral"
                        variant="link"
                        size="sm"
                        icon="i-carbon-close-outline"
                        aria-label="Clear input"
                        @click="searchTerm = ''"
                    />
                </template>
                <template #trailing>
                    <UKbd :value="searchShortcut" />
                </template>
            </UInput>
            <!-- <UDashboardSearch v-model:open="isOpen" shortcut="meta_k" size="sm" :color-mode="true"/> -->

            <!-- <ULink v-for="link in links" :key="link.to" :to="link.to" :icon="link.icon" class="text-sm">
                {{ link.label }}
            </ULink> -->
            <UNavigationMenu
                color="neutral"
                variant="link"
                :items="links"
                :ui="{ link: 'px-0', list: 'gap-x-8' }"
            />
        </template>

        <template #right>
            <slot v-if="$slots.right" name="right" />
            <template v-else>
                <UTooltip text="Notifications" :shortcuts="['N']">
                    <UButton
                        color="neutral"
                        variant="ghost"
                        square
                        class="text-muted"
                        @click="emit('on-click-notifications')"
                    >
                        <UChip color="error" :show="hasNotification" inset>
                            <UIcon name="i-carbon-bell" class="size-5 shrink-0" />
                        </UChip>
                    </UButton>
                </UTooltip>
                <BDropdownAvatar
                    :items="menuItems"
                    :user-name="menuUserName"
                    :user-email="menuUserEmail"
                    :user-to="menuUserTo"
                >
                    <span>
                        <AButtonAvatarDropdown :src="menuUserAvatarSrc" />
                    </span>
                </BDropdownAvatar>
            </template>
        </template>
    </UDashboardNavbar>
</template>
