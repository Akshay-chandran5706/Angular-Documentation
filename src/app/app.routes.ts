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
                    import('./menus/angular-basics/cli-setup/cli-setup.component').then(m => m.CliSetupComponent)
            }
        ]
    },
    { path: '', component: AppComponent },
    { path: '**', redirectTo: '' }
];

