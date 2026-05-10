<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'

interface Props {
    /**
     * Logo source URL when the sidebar is not collapsed
     */
    logoDefaultSrc?: string
    /**
     * Logo source URL when the sidebar is collapsed
     */
    logoMiniSrc?: string
    /**
     * Logo link URL
     */
    logoLink?: string
    /**
     * Navigation links to display in the body of the sidebar
     */
    linksBody?: NavigationMenuItem[][]
    /**
     * Navigation links to display in the bottom of the sidebar
     */
    linksBodyBottom?: NavigationMenuItem[][]
    /**
     * Navigation links to display in the footer of the sidebar
     */
    linksFooter?: NavigationMenuItem[][]
    /**
     * Default size of the sidebar
     */
    defaultSize?: number
    /**
     * Minimum size of the sidebar
     */
    minSize?: number
    /**
     * Maximum size of the sidebar
     */
    maxSize?: number
}

const props = withDefaults(defineProps<Props>(), {
    logoDefaultSrc: '/media/img/ui-logo-placeholder.svg',
    logoLink: '/',
    linksBody: () => [],
    linksBodyBottom: () => [],
    linksFooter: () => [],
    defaultSize: 15,
    minSize: 10,
    maxSize: 20,
})

const isOpen = defineModel<boolean>('isOpen', { default: false })

function getLogo(collapsed?: boolean): string {
    if (!props.logoMiniSrc) return props.logoDefaultSrc
    return collapsed ? props.logoMiniSrc : props.logoDefaultSrc
}

defineSlots<{
    /**
     * Slot for custom content to be displayed in the header of the sidebar
     */
    header?: (props: { collapsed?: boolean }) => any
    /**
     * Slot for custom content to be displayed in the body of the sidebar
     */
    body?: (props: { collapsed?: boolean }) => any
    /**
     * Slot for custom content to be displayed in the footer of the sidebar
     */
    footer?: (props: { collapsed?: boolean }) => any
}>()
</script>

<template>
    <UDashboardSidebar
        id="default"
        v-model:open="isOpen"
        collapsible
        resizable
        class="bg-elevated/25 relative transition-[width]"
        :ui="{ header: 'h-[120px]', footer: 'lg:border-t lg:border-default' }"
    >
        <template #header="{ collapsed }">
            <slot v-if="$slots.header" name="header" :collapsed="collapsed" />
            <div v-else class="flex h-full w-full items-start justify-center pt-4">
                <NuxtLink :to="props.logoLink">
                    <img :src="getLogo(collapsed)" height="72" class="max-h-18" />
                </NuxtLink>
            </div>
        </template>

        <template #default="{ collapsed }">
            <UDashboardSidebarCollapse
                color="primary"
                variant="solid"
                class="absolute top-[90px] right-[-16px] z-100"
            />

            <slot v-if="$slots.body" name="body" :collapsed="collapsed" />
            <template v-else>
                <UNavigationMenu
                    :collapsed="collapsed"
                    :items="linksBody || []"
                    orientation="vertical"
                    tooltip
                    popover
                    :ui="{
                        list: 'space-y-2',
                        childList: 'space-y-2',
                    }"
                />
                <UNavigationMenu
                    v-if="linksBodyBottom.length"
                    :collapsed="collapsed"
                    :items="linksBodyBottom || []"
                    orientation="vertical"
                    tooltip
                    class="mt-auto"
                    :ui="{
                        list: 'space-y-2',
                        childList: 'space-y-2',
                    }"
                />
            </template>
        </template>

        <template v-if="$slots.footer || linksFooter.length" #footer="{ collapsed }">
            <slot v-if="$slots.footer" name="footer" :collapsed="collapsed" />
            <UNavigationMenu
                v-else
                :collapsed="collapsed"
                :items="linksFooter"
                orientation="vertical"
                tooltip
                class="mt-auto w-full"
                :ui="{
                    list: 'space-y-2',
                    childList: 'space-y-2',
                }"
            />
        </template>
    </UDashboardSidebar>
</template>
