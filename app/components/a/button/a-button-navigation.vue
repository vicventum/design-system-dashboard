<script lang="ts" setup>
import type { UButton } from '#components'

export type ButtonSize = InstanceType<typeof UButton>['$props']['size']

interface Props {
    /**
     * Icon to display in the button
     * @default 'i-carbon-arrow-left'
     */
    icon?: string
    /**
     * Route to navigate to
     * @default ''
     */
    to?: string
    /**
     * Whether to perform a back action and go to the previous route
     * @default false
     */
    hasBackAction?: boolean
    /**
     * The size of the button
     * @type ButtonSize
     */
    size?: ButtonSize
}

const props = withDefaults(defineProps<Props>(), {
    icon: 'i-carbon-arrow-left',
    to: '',
    hasBackAction: false,
    size: 'md',
})

const emit = defineEmits<{
    /**
     * Emitted when the button is clicked regardless of whether the route is changed or not
     */
    (e: 'on-click'): void
}>()

const router = useRouter()

function handleClickLeftButtonIcon(): void {
    if (props.to) {
        router.push(props.to)
    } else if (props.hasBackAction) {
        router.back()
    }
    emit('on-click')
}
</script>

<template>
    <UButton :icon="icon" :size="size" variant="icon" color="neutral" @click="handleClickLeftButtonIcon" />
</template>
