export default /* ui */ {
    slots: {
        header: 'min-h-auto',
        title: 'text-xl',
        close: 'text-default',
    },
    variants: {
        fullscreen: {
            false: {
                content: 'max-w-auto',
            },
        },
    },
}
