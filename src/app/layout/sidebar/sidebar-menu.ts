export const SIDEBAR_MENU = [
    {
        label: 'Angular Basics',
        key: 'basics',
        subItems: [
            { label: 'CLI & Setup', route: '/basics/cli' },
            { label: 'File Structure & Modules', route: '/basics/structure' },
            { label: 'Components & Decorators', route: '/basics/components' },
            { label: 'Bindings & Interpolation', route: '/basics/binding' },
            { label: 'Directives & Pipes', route: '/basics/directives' },
            { label: 'Event Binding & Template Refs', route: '/basics/events' },
            { label: 'Template-driven Forms', route: '/basics/forms' }
        ]
    },
    {
        label: 'Routing & Navigation',
        key: 'routing',
        subItems: [
            { label: 'Router Setup', route: '/routing/setup' },
            { label: 'Params & Child Routes', route: '/routing/params' },
            { label: 'Guards & Lazy Loading', route: '/routing/guards' }
        ]
    },
    {
        label: 'Services & DI',
        key: 'services',
        subItems: [
            { label: 'Injectable & Singleton', route: '/services/injectable' },
            { label: 'Data Sharing', route: '/services/data-sharing' }
        ]
    },
    {
        label: 'HTTP & APIs',
        key: 'http',
        subItems: [
            { label: 'HttpClient & Requests', route: '/http/requests' },
            { label: 'Observables & Errors', route: '/http/observables' }
        ]
    },
    {
        label: 'Reactive Forms',
        key: 'forms',
        subItems: [
            { label: 'FormGroup & Controls', route: '/forms/group' },
            { label: 'Validation', route: '/forms/validation' },
            { label: 'Dynamic Forms', route: '/forms/dynamic' }
        ]
    },
    {
        label: 'State Management',
        key: 'state',
        subItems: [
            { label: 'RxJS & Operators', route: '/state/rxjs' },
            { label: 'BehaviorSubject', route: '/state/behavior' },
            { label: 'NgRx / Signals', route: '/state/ngrx' }
        ]
    },
    {
        label: 'Reusable UI Libraries',
        key: 'ui',
        subItems: [
            { label: 'Material / Bootstrap', route: '/ui/libs' },
            { label: 'Dialogs / Tables / Tabs', route: '/ui/components' }
        ]
    },
    {
        label: 'Advanced Concepts',
        key: 'advanced',
        subItems: [
            { label: 'Custom Pipes / Directives', route: '/advanced/pipes' },
            { label: 'Content Projection', route: '/advanced/ngcontent' },
            { label: 'Lifecycle Hooks', route: '/advanced/hooks' },
            { label: 'Change Detection', route: '/advanced/change' },
            { label: 'Standalone & Signals', route: '/advanced/signals' },
            { label: 'Angular Animations', route: '/advanced/animations' }
        ]
    }
];
