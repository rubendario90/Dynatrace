# Dynatrace Layout Components

Estructura reutilizable de componentes de layout para tu aplicación Dynatrace.

## 📁 Estructura del Proyecto

```
src/
├── components/
│   └── layouts/
│       ├── AppHeader/
│       │   └── AppHeader.tsx          # Componente header reutilizable
│       ├── PageLayout/
│       │   └── PageLayout.tsx         # Layout principal de página
│       ├── TitleBar/
│       │   └── TitleBar.tsx           # Barra de título configurables
│       └── index.ts                   # Exporta todos los componentes
├── pages/
│   ├── DashboardPage.tsx              # Ejemplo: Dashboard
│   ├── AnalyticsPage.tsx              # Ejemplo: Analytics
│   └── SettingsPage.tsx               # Ejemplo: Settings
```

## 🚀 Componentes Disponibles

### AppHeader
Componente de encabezado reutilizable con navegación y menús.

**Props:**
- `appName`: Nombre de la aplicación
- `navigationItems`: Array de items de navegación
- `onSettingsClick`: Callback para botón de configuración
- `helpMenuConfig`: Configuración del menú de ayuda

**Ejemplo:**
```tsx
import { AppHeader } from '@/components/layouts';

<AppHeader
  appName="Mi App"
  navigationItems={[
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  ]}
  onSettingsClick={() => console.log('Settings')}
/>
```

### PageLayout
Layout completo de página con header, sidebar, contenido principal y detalle.

**Props:**
- `appName`: Nombre de la aplicación
- `navigationItems`: Items de navegación
- `mainTitle`: Título del contenido principal
- `mainSubtitle`: Subtítulo del contenido principal
- `mainContent`: Contenido del área principal
- `sidebarContent`: Contenido de la barra lateral
- `detailViewContent`: Contenido del panel de detalle
- `onSettingsClick`: Callback de settings
- `onMainMenuClick`: Callback del menú principal
- `onSidebarToggle`: Callback para toggle del sidebar

**Ejemplo:**
```tsx
import { PageLayout } from '@/components/layouts';

<PageLayout
  appName="Dynatrace"
  mainTitle="Dashboard"
  mainSubtitle="Welcome"
  mainContent={<div>Mi contenido</div>}
  sidebarContent={<nav>Navegación</nav>}
/>
```

### TitleBar
Barra de título flexible con soporte para breadcrumbs, prefijos y botones de acción.

**Props:**
- `title`: Título principal
- `subtitle`: Subtítulo (opcional)
- `breadcrumbs`: Array de breadcrumbs
- `hasPrefix`: Mostrar botón de prefix
- `actionButtons`: Array de botones de acción
- `hasAction`: Mostrar botón de acción

**Ejemplo:**
```tsx
import { TitleBar } from '@/components/layouts';

<TitleBar
  title="Mi Página"
  subtitle="Descripción"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Mi Página' },
  ]}
  actionButtons={[
    {
      icon: <RefreshIcon />,
      label: 'Refresh',
      onClick: () => handleRefresh(),
    },
  ]}
/>
```

## 📖 Páginas de Ejemplo

El proyecto incluye 3 páginas de ejemplo que demuestran cómo usar los componentes:

1. **DashboardPage** - Layout completo con todos los paneles
2. **AnalyticsPage** - Con breadcrumbs y botones de acción
3. **SettingsPage** - Con formularios y navegación sidebar

## 🔧 Cómo Usar

### 1. Importar componentes
```tsx
import { PageLayout, TitleBar, AppHeader } from '@/components/layouts';
```

### 2. Usar en tu página
```tsx
const MiPagina = () => {
  return (
    <PageLayout
      appName="Mi App"
      mainTitle="Título Principal"
      mainContent={<div>Contenido</div>}
    />
  );
};
```

### 3. Personalizar estilos
Todos los componentes soportan inline styles y className props.

## 🎨 Características

✅ Componentes completamente reutilizables  
✅ TypeScript con tipos completos  
✅ Props configurables  
✅ Integración con Dynatrace Strato Components  
✅ Responsive design  
✅ Ejemplos de uso incluidos  

## 📝 Notas

- Los componentes usan Dynatrace Strato Components como base
- Todos los componentes aceptan props adicionales como `style`, `className`, etc.
- Los callbacks son opcionales y pueden no ser necesarios en todos los casos

## 🔄 Próximas Mejoras

- [ ] Agregar tests unitarios
- [ ] Documentación de Storybook
- [ ] Temas personalizables
- [ ] Componentes adicionales (Modal, Drawer, etc.)
