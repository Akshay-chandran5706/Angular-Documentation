import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('./menus/landing-page/landing-page.component').then(m => m.LandingPageComponent)
    },
    {
        path: 'angular-basics',
        loadComponent: () =>
            import('./menus/angular-basics/angular-basics.component').then(m => m.AngularBasicsComponent),
        children: [
            {
                path: 'cli',
                loadComponent: () =>
                    import('./menus/angular-basics/cli-setup/cli-setup.component').then(m => m.CliSetupComponent),
                data: { title: 'Angular CLI Setup' }
            },
            {
                path: 'structure',
                loadComponent: () =>
                    import('./menus/angular-basics/folder-structure/folder-structure.component').then(m => m.FolderStructureComponent),
                data: { title: 'Folder Structure' }
            }
        ]
    },
    { path: '', component: AppComponent },
    { path: '**', redirectTo: '' }
];

