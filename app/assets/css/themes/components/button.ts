export default /*ui*/ {
    slots: {
        base: [
            'rounded-md font-medium inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75',
            'transition-colors',
        ],
        label: 'truncate',
        leadingIcon: 'shrink-0',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailingIcon: 'shrink-0',
    },
    variants: {
        fieldGroup: {
            horizontal:
                'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-[1]',
            vertical:
                'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-[1]',
        },
        color: {
            primary: '',
            secondary: '',
            success: '',
            info: '',
            warning: '',
            error: '',
            neutral: '',
        },
        variant: {
            solid: '',
            outline: '',
            soft: '',
            subtle: '',
            ghost: '',
            link: '',
            icon: 'p-2 rounded-sm inline-flex items-center justify-center bg-transparent',
        },
        size: {
            xs: {
                base: 'px-2 py-1 text-xs gap-1 rounded-sm',
                leadingIcon: 'size-4',
                leadingAvatarSize: '3xs',
                trailingIcon: 'size-4',
            },
            sm: {
                base: 'px-2.5 py-1.5 text-xs gap-1.5 rounded-sm',
                leadingIcon: 'size-4',
                leadingAvatarSize: '3xs',
                trailingIcon: 'size-4',
            },
            md: {
                base: 'px-2.5 py-1.5 text-sm gap-1.5 rounded-sm',
                leadingIcon: 'size-5',
                leadingAvatarSize: '2xs',
                trailingIcon: 'size-5',
            },
            lg: {
                base: 'px-3 py-2 text-sm gap-2 rounded-sm',
                leadingIcon: 'size-5',
                leadingAvatarSize: '2xs',
                trailingIcon: 'size-5',
            },
            xl: {
                base: 'px-3 py-2 text-base gap-2 rounded-sm',
                leadingIcon: 'size-6',
                leadingAvatarSize: 'xs',
                trailingIcon: 'size-6',
            },
        },
        block: {
            true: {
                base: 'w-full justify-center',
                trailingIcon: 'ms-auto',
            },
        },
        square: {
            true: '',
        },
        leading: {
            true: '',
        },
        trailing: {
            true: '',
        },
        loading: {
            true: '',
        },
        active: {
            true: {
                base: '',
            },
            false: {
                base: '',
            },
        },
    },
    compoundVariants: [
        {
            color: 'primary',
            variant: 'solid',
            class: 'text-inverted bg-primary hover:bg-primary/75 active:bg-primary/75 disabled:bg-primary aria-disabled:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
        },
        {
            color: 'primary',
            variant: 'outline',
            class: 'ring ring-inset ring-primary/50 text-primary hover:bg-primary/10 active:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        },
        {
            color: 'primary',
            variant: 'soft',
            class: 'text-primary bg-primary/10 hover:bg-primary/15 active:bg-primary/15 focus:outline-none focus-visible:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10',
        },
        {
            color: 'primary',
            variant: 'subtle',
            class: 'text-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 active:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        },
        {
            color: 'primary',
            variant: 'ghost',
            class: 'text-primary hover:bg-primary/10 active:bg-primary/10 focus:outline-none focus-visible:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent',
        },
        {
            color: 'primary',
            variant: 'link',
            class: 'text-primary hover:text-primary/75 active:text-primary/75 disabled:text-primary aria-disabled:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary',
        },
        {
            color: 'neutral',
            variant: 'solid',
            class: 'text-inverted bg-inverted hover:bg-inverted/90 active:bg-inverted/90 disabled:bg-inverted aria-disabled:bg-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted',
        },
        {
            color: 'neutral',
            variant: 'outline',
            class: 'ring ring-inset ring-accented text-default bg-default hover:bg-elevated active:bg-elevated disabled:bg-default aria-disabled:bg-default focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted',
        },
        {
            color: 'neutral',
            variant: 'soft',
            class: 'text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 focus:outline-none focus-visible:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated',
        },
        {
            color: 'neutral',
            variant: 'subtle',
            class: 'ring ring-inset ring-accented text-default bg-elevated hover:bg-accented/75 active:bg-accented/75 disabled:bg-elevated aria-disabled:bg-elevated focus:outline-none focus-visible:ring-2 focus-visible:ring-inverted',
        },
        {
            color: 'neutral',
            variant: 'ghost',
            class: 'text-default hover:bg-elevated active:bg-elevated focus:outline-none focus-visible:bg-elevated hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent',
        },
        {
            color: 'neutral',
            variant: 'link',
            class: 'text-muted hover:text-default active:text-default disabled:text-muted aria-disabled:text-muted focus:outline-none focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-inverted',
        },
        {
            size: 'xs',
            square: true,
            class: 'p-1',
        },
        {
            size: 'sm',
            square: true,
            class: 'p-1.5',
        },
        {
            size: 'md',
            square: true,
            class: 'p-1.5',
        },
        {
            size: 'lg',
            square: true,
            class: 'p-2',
        },
        {
            size: 'xl',
            square: true,
            class: 'p-2',
        },
        {
            loading: true,
            leading: true,
            class: {
                leadingIcon: 'animate-spin',
            },
        },
        {
            loading: true,
            leading: false,
            trailing: true,
            class: {
                trailingIcon: 'animate-spin',
            },
        },
        {
            variant: 'icon',
            color: 'neutral',
            class: 'text-neutral-700 hover:bg-neutral-100 active:text-neutral/75 disabled:text-neutral aria-disabled:text-neutral focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral',
        },
        {
            variant: 'icon',
            color: 'primary',
            class: 'text-primary hover:bg-primary-100 active:text-primary/75 disabled:text-primary aria-disabled:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary',
        },
        {
            variant: 'icon',
            color: 'secondary',
            class: 'text-secondary hover:bg-secondary-100 active:text-secondary/75 disabled:text-secondary aria-disabled:text-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary',
        },
        {
            variant: 'icon',
            color: 'success',
            class: 'text-success hover:bg-success-100 active:text-success/75 disabled:text-success aria-disabled:text-success focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success',
        },
        {
            variant: 'icon',
            color: 'info',
            class: 'text-info hover:bg-info-100 active:text-info/75 disabled:text-info aria-disabled:text-info focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info',
        },
        {
            variant: 'icon',
            color: 'warning',
            class: 'text-warning hover:bg-warning-100 active:text-warning/75 disabled:text-warning aria-disabled:text-warning focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning',
        },
        {
            variant: 'icon',
            color: 'error',
            class: 'text-error hover:bg-error-100 active:text-error/75 disabled:text-error aria-disabled:text-error focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error',
        },
    ],
    defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md',
    },
}
