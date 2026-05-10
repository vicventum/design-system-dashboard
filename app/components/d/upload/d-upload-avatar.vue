<script lang="ts" setup>
import type { UButton } from '#components'

// Types
export type ButtonSize = InstanceType<typeof UButton>['$props']['size']
export type ButtonColor = InstanceType<typeof UButton>['$props']['color']

interface Props {
    /**
     * The source URL of the previously uploaded avatar image before uploading a new one
     */
    src?: string
    /**
     * The size of the upload button
     */
    buttonSize?: ButtonSize
    /**
     * The color of the upload button
     */
    buttonColor?: ButtonColor
}

interface Emits {
    /**
     * Emitted when an image is uploaded
     */
    (e: 'on-upload-image', file: File): void
}

const props = withDefaults(defineProps<Props>(), {
    src: '',
    buttonSize: 'sm',
    buttonColor: 'neutral',
})

const emit = defineEmits<Emits>()

// Data

const fileName = ref<File | null>(null)
const inputFileRef = ref<HTMLInputElement | null>(null)

// Computed

const getImage = computed(() => {
    if (fileName.value) {
        const imgUrl = globalThis.URL.createObjectURL(fileName.value)
        return imgUrl
    } else if (props.src) {
        return props.src
    }

    return null
})

// Methods

// Proposed change in handleUploadImage function
function handleUploadImage(event: Event): void {
    const target = event.target as HTMLInputElement
    const files = target.files || (event as DragEvent).dataTransfer?.files

    // Capture the first file and check for its existence
    const file = files?.[0]
    if (file) {
        fileName.value = file
        emit('on-upload-image', file)
    }
}
</script>

<template>
    <div class="flex items-end gap-x-6">
        <div>
            <input
                ref="inputFileRef"
                type="file"
                accept="image/*"
                class="sr-only"
                @change="handleUploadImage"
            />
            <img v-if="getImage" :src="getImage" alt="User image" class="size-20 rounded-md object-cover" />
            <div
                v-else
                class="bg-primary-50 grid size-20 place-items-center rounded-md"
                @click="inputFileRef?.click()"
            >
                <UIcon name="i-carbon-image" class="size-6 text-neutral-900" />
            </div>
        </div>
        <UButton :color="buttonColor" variant="outline" @click="inputFileRef?.click()" :size="buttonSize">
            {{ 'Cambiar' }}
        </UButton>
    </div>
</template>
