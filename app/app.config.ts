import * as components from '#layers/design-system/app/assets/css/themes'

export default defineAppConfig({
    ui: {
        ...components,
        colors: {
            primary: 'brand-black',
            secondary: 'brand-grey',
            accent: 'brand-grey',
            success: 'brand-green',
            warning: 'brand-orange',
            error: 'brand-red',
            info: 'brand-grey',
            neutral: 'brand-grey',
        },
        icons: {
            panelOpen: 'i-carbon-chevron-right',
            panelClose: 'i-carbon-chevron-left',
        },
    },
})
