<script setup lang="ts">
import type { DropdownMenuItem, NavigationMenuItem } from '@nuxt/ui'
import type { NavbarLinks } from '~/types'

const menuItems = [
    [{ label: 'Profile', icon: 'i-carbon-user' }],
    [{ label: 'Settings', icon: 'i-carbon-settings' }],
] satisfies DropdownMenuItem[][]

const sidebarLinks = [
    [
        {
            label: 'Panel General',
            type: 'label',
        },
        {
            label: 'Estadísticas sanitarias',
            icon: 'i-carbon-activity',
            // to: '/estadisticas-sanitarias',
            to: '/',
            onSelect: (e) => {
                console.log(e, isOpen.value, 'Estadísticas sanitarias')
                isOpen.value = false
            },
        },
        {
            label: 'Historias clínicas',
            icon: 'i-carbon-task-tools',
            to: '/historias-clinicas',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Alarmas',
            icon: 'i-carbon-warning',
            to: '/alarmas',
            badge: '0',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Calendario de visitas',
            icon: 'i-carbon-calendar',
            to: '/calendario',
            defaultOpen: true,
            type: 'trigger',
            children: [
                {
                    label: 'Mi agenda',
                    icon: 'i-carbon-calendar',
                    to: '/calendario/mi-agenda',
                    onSelect: () => (isOpen.value = false),
                },
                {
                    label: 'Todas las visitas',
                    icon: 'i-carbon-group',
                    to: '/calendario/todas-las-visitas',
                    onSelect: () => (isOpen.value = false),
                },
                {
                    label: 'Solicitudes de pacientes',
                    icon: 'i-carbon-thumbs-up',
                    to: '/calendario/solicitudes',
                    onSelect: () => (isOpen.value = false),
                },
            ],
        },
        {
            label: 'Rutas de visitas',
            icon: 'i-carbon-map',
            to: '/rutas',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Reportes de alertas',
            icon: 'i-carbon-warning-alt',
            to: '/reportes-alertas',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Mensajería',
            icon: 'i-carbon-chat',
            to: '/mensajeria',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Finanzas',
            type: 'label',
        },
        {
            label: 'Facturación',
            icon: 'i-carbon-document',
            to: '/finanzas/facturacion',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Estadísticas Financieras',
            icon: 'i-carbon-chart-bar',
            to: '/finanzas/estadisticas',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Cartera de Clientes',
            icon: 'i-carbon-portfolio',
            to: '/finanzas/cartera-clientes',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Resumen del Paciente',
            icon: 'i-carbon-user-settings',
            to: '/finanzas/resumen-paciente',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Recursos Humanos',
            type: 'label',
        },
        {
            label: 'Colaboradores',
            icon: 'i-carbon-group',
            to: '/rrhh/colaboradores',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Solicitudes de ausencias',
            icon: 'i-carbon-tree',
            to: '/rrhh/ausencias',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Cuidadores',
            icon: 'i-carbon-partnership',
            to: '/rrhh/cuidadores',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Roles y permisos',
            icon: 'i-carbon-password',
            to: '/rrhh/roles',
            onSelect: () => (isOpen.value = false),
        },
    ],
    [
        {
            label: 'Historia de cambios',
            icon: 'i-carbon-recently-viewed',
            to: '/historia-cambios',
            onSelect: () => (isOpen.value = false),
        },
        {
            label: 'Configuraciones generales',
            icon: 'i-carbon-settings',
            to: '/configuracion',
            onSelect: () => (isOpen.value = false),
        },
    ],
] satisfies NavigationMenuItem[][]

const links = [
    { label: 'Reportes pendientes', to: '/pending-reports' },
    { label: 'Mi agenda', to: '/my-agenda' },
] satisfies NavbarLinks

const isOpen = ref(false)
const searchTerm = ref('')
</script>

<template>
    <LDashboardContainer>
        <template #sidebar>
            <LSidebar
                v-model:is-open="isOpen"
                logo-default-src="/media/img/ui-logo-placeholder.svg"
                logo-mini-src="/media/img/ui-logo-placeholder.svg"
                :links-body="sidebarLinks.slice(0, 1)"
                :links-body-bottom="sidebarLinks.slice(1)"
                :links-footer="sidebarLinks.slice(1)"
            />
        </template>

        <template #header>
            <LNavbar
                v-model:search-term="searchTerm"
                :links="links"
                :menu-items="menuItems"
                search-placeholder="Buscar paciente"
                menu-user-name="Victor"
                menu-user-email="victor@email.com"
            />
        </template>

        <template #body>
            <BCard>
                <template #header>
                    <DCardHeader title="Main Content Body Area" />
                </template>
                <ACardInner>
                    <p class="text-gray-600">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto dicta cupiditate
                        suscipit veniam minus pariatur totam, impedit porro similique at, vero iusto quaerat,
                        ipsam ad aliquid id nulla iure voluptates.
                    </p>
                </ACardInner>
            </BCard>
        </template>
    </LDashboardContainer>
</template>
