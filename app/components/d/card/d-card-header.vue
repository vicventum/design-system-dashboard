<script lang="ts" setup>
import { twMerge } from 'tailwind-merge'

interface Props {
    /**
     * The main title text
     */
    title: string
    /**
     * The subtitle text displayed below the title
     */
    subtitle?: string
    /**
     * The visual variant of the header
     */
    variant?: 'main' | 'secondary'
    /**
     * The icon to use for the left button
     */
    leftButtonIcon?: string
    /**
     * The navigation target for the left button
     */
    leftButtonIconTo?: string
    /**
     * Whether to show a left button icon
     */
    hasLeftButtonIcon?: boolean
    /**
     * Additional CSS classes for the title element
     */
    classTitle?: string
}

const props = withDefaults(defineProps<Props>(), {
    subtitle: '',
    variant: 'main',
    leftButtonIcon: 'i-carbon-arrow-left',
    leftButtonIconTo: '',
    hasLeftButtonIcon: false,
    classTitle: '',
})

const emit = defineEmits<{
    /**
     * Emitted when the left button icon is clicked
     */
    (e: 'on-click-left-button-icon'): void
}>()

defineSlots<{
    /**
     * Slot for action buttons or elements
     */
    actions(): any
    /**
     * Default slot content (not used in this component)
     */
    default?(): any
}>()

const headingTag = computed(() => {
    const tags = {
        main: 'h2',
        secondary: 'h3',
    }
    return tags[props.variant] ?? tags.main
})

function handleClickLeftButtonIcon() {
    emit('on-click-left-button-icon')
}
</script>

<template>
    <ACardInner
        :class="[
            'text-default flex items-center justify-between',
            variant === 'secondary' && 'bg-muted border-y border-neutral-200',
        ]"
    >
        <div class="space-y-1">
            <div class="flex items-center gap-x-3">
                <AButtonNavigation
                    v-if="hasLeftButtonIcon"
                    :icon="leftButtonIcon"
                    :to="leftButtonIconTo"
                    :is-back-action="leftButtonIconTo"
                    @on-click="handleClickLeftButtonIcon"
                />
                <Component
                    :is="headingTag"
                    :class="
                        twMerge([
                            'font-bold',
                            variant === 'main' && 'text-xl',
                            variant === 'secondary' && 'text-lg',
                            classTitle,
                        ])
                    "
                >
                    {{ title }}
                </Component>
            </div>
            <p
                v-if="subtitle"
                class="text-sm font-medium"
                :class="{
                    'text-dimmed': variant === 'secondary',
                }"
            >
                {{ subtitle }}
            </p>
        </div>

        <div v-if="$slots.actions" class="p-0">
            <slot name="actions" />
        </div>
    </ACardInner>
</template>
