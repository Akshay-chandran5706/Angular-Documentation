import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./features/landing-page/landing-page.component').then(m => m.LandingPageComponent)
    },
    {
        path: 'angular-basics',
        loadComponent: () =>
            import('./features/angular-basics/angular-basics.component').then(m => m.AngularBasicsComponent),
        children: [
            {
                path: 'cli',
                loadComponent: () =>
                    import('./features/angular-basics/cli-setup/cli-setup.component').then(m => m.CliSetupComponent),
                data: { title: 'Angular CLI Setup' }
            },
            {
                path: 'structure',
                loadComponent: () =>
                    import('./features/angular-basics/folder-structure/folder-structure.component').then(m => m.FolderStructureComponent),
                data: { title: 'Folder Structure' }
            }
        ]
    },
    { path: '', component: AppComponent },
    { path: '**', redirectTo: '' }
];

