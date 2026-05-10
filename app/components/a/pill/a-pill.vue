<script lang="ts" setup>
import type { UBadge, UButton } from '#components'
import { computed } from 'vue'

// Derived types from Nuxt UI components
export type BadgeSize = InstanceType<typeof UBadge>['$props']['size']
export type BadgeColor = InstanceType<typeof UBadge>['$props']['color']
export type BadgeVariant = InstanceType<typeof UBadge>['$props']['variant']

interface Props {
    /**
     * Avatar image source URL
     */
    src?: string
    /**
     * Text label to display
     */
    label?: string
    /**
     * Color theme of the badge
     */
    color?: BadgeColor
    /**
     * Visual style variant
     */
    variant?: BadgeVariant
    /**
     * Size of the badge
     */
    size?: BadgeSize
    /**
     * Whether to show avatar
     */
    hasAvatar?: boolean
    /**
     * Whether to show close button
     */
    isClosable?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    src: '/media/img/ui-user-unknown.png',
    label: '',
    color: 'neutral',
    variant: 'outline',
    size: 'sm',
    hasAvatar: true,
    isClosable: true,
})

const emit = defineEmits<{
    /**
     * Emitted when the close button is clicked
     */
    (e: 'on-close'): void
}>()

defineSlots<{
    /**
     * The default slot in which all the content
     */
    default(): any
}>()

const trailingIconSize = computed(() => {
    const sizeMap = {
        xs: 'size-3.5 ',
        sm: 'size-3.5 ',
        md: 'size-3.5 ',
        lg: 'size-3.5 ',
        xl: 'size-4 ',
    }
    return sizeMap[props.size] || 'md'
})
const textSize = computed(() => {
    const sizeMap = {
        xs: 'text-xs p-1  gap-1.5',
        sm: 'text-xs p-1  gap-1.5',
        md: 'text-sm p-1  gap-1.5',
        lg: 'text-sm p-1  gap-2',
        xl: 'text-base p-1  gap-2 ',
    }
    return sizeMap[props.size] || 'md'
})
</script>

<template>
    <div class="flex gap-2">
        <UBadge
            :avatar="
                hasAvatar
                    ? {
                          src,
                          size,
                      }
                    : undefined
            "
            :label="label"
            :trailing-icon="isClosable ? 'i-carbon-close' : ''"
            :size="size"
            :ui="{
                base: textSize,
            }"
            :color="color"
            :variant="variant"
            :class="{ 'pl-2': !hasAvatar, 'pr-3': !isClosable }"
            class="rounded-full font-normal"
        >
            <template #trailing>
                <UButton
                    v-if="isClosable"
                    :size="size"
                    :ui="{
                        leadingIcon: trailingIconSize,
                    }"
                    :color="color"
                    :variant="variant === 'solid' ? 'solid' : 'icon'"
                    icon="i-carbon-close"
                    class="rounded-full p-0.5 font-normal"
                    @click="emit('on-close')"
                />
            </template>
        </UBadge>
    </div>
</template>
