<script lang="ts" setup>
import type { UButton, UAvatar } from '#components'

export type ButtonSize = InstanceType<typeof UButton>['$props']['size']
export type AvatarSize = InstanceType<typeof UAvatar>['$props']['size']

interface Props {
    /**
     * The source (path or URL) of the avatar
     * @type string
     */
    src?: string
    /**
     * The size of the button
     * @type ButtonSize
     */
    buttonSize?: ButtonSize
    /**
     * The size of the avatarSize
     * @type AvatarSize
     */
    avatarSize?: AvatarSize
}

const props = withDefaults(defineProps<Props>(), {
    src: '/media/img/ui-user-unknown.png',
    buttonSize: 'md',
    avatarSize: 'sm',
})

defineSlots<{
    /** Example description for default */
    default(): any
}>()

const emit = defineEmits<{
    /**
     * Emitted when the button is clicked
     */
    (e: 'on-click'): void
}>()
</script>

<template>
    <!-- <UButton
        class="bg-color-primary-100 flex items-center gap-2 rounded-full py-1 pr-2 pl-1 text-neutral-800 hover:text-neutral-50"
    >
        <UAvatar :src="src" size="sm" />
        <UIcon name="i-carbon-chevron-down" class="size-5" />
    </UButton> -->
    <UButton
        :avatar="{
            src,
            size: avatarSize,
        }"
        :size="buttonSize"
        trailing-icon="i-carbon-chevron-down"
        color="primary"
        variant="ghost"
        class="rounded-full"
        @click="emit('on-click')"
    >
        <slot />
    </UButton>
</template>
