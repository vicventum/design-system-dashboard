<script lang="ts" setup>
import { resolveComponent, computed, type Ref } from 'vue'
import { twMerge, type ClassNameValue } from 'tailwind-merge'
import type { SemanticColors } from '#layers/design-system/app/types'

const UFormComponent = resolveComponent('UForm')

interface Props {
    /**
     * The state object for form management
     */
    state?: Record<string, any> | null
    /**
     * The schema for form validation
     */
    schema?: Record<string, any> | null
    /**
     * The title of the slideover
     */
    title?: string
    /**
     * The description of the slideover
     */
    description?: string
    /**
     * Text for the main content when it is not necessary to use the slot with more complex markup
     */
    text?: string
    /**
     * Text for the primary button
     */
    primaryButtonText?: string
    /**
     * Color variant for the primary button
     */
    primaryButtonColor?: SemanticColors
    /**
     * Text for the secondary button
     */
    secondaryButtonText?: string
    /**
     * Whether the slideover has a footer
     */
    hasFooter?: boolean
    /**
     * Whether the primary button is disabled
     */
    isPrimaryButtonDisabled?: boolean
    /**
     * Whether buttons should be displayed as blocks
     */
    hasButtonsBlock?: boolean
    /**
     * Whether to reverse the button order
     */
    isReverseButtons?: boolean
    /**
     * Additional CSS classes for buttons
     */
    classButtons?: ClassNameValue
    /**
     * The side from which the slideover opens
     */
    side?: 'left' | 'right' | 'top' | 'bottom'
    /**
     * Additional CSS classes for the slideover
     */
    class?: ClassNameValue
}

const props = withDefaults(defineProps<Props>(), {
    state: null,
    schema: null,
    title: '',
    description: '',
    text: '',
    primaryButtonText: 'Guardar',
    primaryButtonColor: 'primary',
    secondaryButtonText: 'Cancelar',
    hasFooter: true,
    isPrimaryButtonDisabled: false,
    hasButtonsBlock: true,
    isReverseButtons: true,
    classButtons: '',
    side: 'right',
    class: '',
})

const emit = defineEmits<{
    /**
     * Emitted when the primary button is clicked
     */
    (e: 'on-click-primary-button'): void
    /**
     * Emitted when the secondary button is clicked
     */
    (e: 'on-click-secondary-button'): void
    /**
     * Emitted when the form is submitted
     */
    (e: 'on-submit'): void
}>()

defineSlots<{
    /**
     * Custom header content
     */
    header?(): any
    /**
     * Default body content when no text is provided
     */
    default?(): any
    /**
     * Custom footer content
     */
    footer?(): any
}>()

// Model

const isOpen = defineModel<boolean>({
    default: false,
    required: true,
})
const formRef = defineModel<Ref<any>>('formRef', {
    default: () => ({}) as any,
    required: false,
})

// Computed

const formProps = computed(() => {
    return props.state ? { ref: 'formRef', state: props.state, schema: props.schema } : {}
})

const computedIsReverseButtons = computed(() => {
    return props.side === 'left' ? false : props.isReverseButtons
})


// Methods

function handleSubmit(): void {
    emit('on-submit')
}
function handleClickPrimaryButton(): void {
    emit('on-click-primary-button')
}
function handleClickSecondaryButton(): void {
    isOpen.value = false
    emit('on-click-secondary-button')
}
</script>

<template>
    <USlideover
        v-model:open="isOpen"
        :title="title"
        :description="description"
        :side="side"
        :class="twMerge('', props.class)"
    >
        <template #header>
            <slot v-if="$slots.header" name="header" />
            <!-- <DCardHeader
                v-else
                :title="title"
                :subtitle="description"
                left-button-icon="heroicons:x-mark"
                has-left-button-icon
                @on-click-left-button-icon="isOpen = false"
            /> -->
        </template>

        <template #body>
            <component
                :is="props.state ? UFormComponent : 'section'"
                v-bind="formProps"
                @submit="handleSubmit"
            >
                <p v-if="text">
                    {{ text }}
                </p>
                <slot v-else />
            </component>
        </template>

        <template v-if="hasFooter" #footer>
            <slot v-if="$slots.footer" name="footer" />
            <DActionButtons
                v-else
                :primary-button-color="primaryButtonColor"
                :primary-button-text="primaryButtonText"
                :secondary-button-text="secondaryButtonText"
                :has-buttons-block="hasButtonsBlock"
                :is-primary-button-disabled="isPrimaryButtonDisabled"
                :is-reverse="computedIsReverseButtons"
                :class="twMerge('flex w-full justify-end gap-x-2', props.classButtons)"
                class-buttons="w-40"
                @on-click-primary-button="handleClickPrimaryButton"
                @on-click-secondary-button="handleClickSecondaryButton"
            />
        </template>
    </USlideover>
</template>
