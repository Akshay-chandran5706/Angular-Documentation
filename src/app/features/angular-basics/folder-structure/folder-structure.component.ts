import { Component } from '@angular/core';
import { CodeBlockComponent } from '../../../shared/components/codeblock/codeblock.component';

@Component({
  selector: 'app-folder-structure',
  imports: [CodeBlockComponent],
  templateUrl: './folder-structure.component.html',
  styleUrl: './folder-structure.component.scss'
})
export class FolderStructureComponent {
  step1: any = `my-angular-app/
├── src/
│   ├── app/
│   │   ├── core/                  # App-wide singletons & base services
│   │   │   ├── guards/            # Route guards (AuthGuard, RoleGuard, etc.)
│   │   │   ├── interceptors/      # HTTP interceptors
│   │   │   ├── services/          # Core services (auth, token, config)
│   │   │   └── core.module.ts     # Optional (for older apps using NgModules)
│   │   │
│   │   ├── shared/                # Shared, reusable components/pipes/directives
│   │   │   ├── components/        # Shared UI components (button, input, etc.)
│   │   │   ├── pipes/             # Custom pipes
│   │   │   ├── directives/        # Custom directives
│   │   │   └── shared.module.ts   # Optional (if not using standalone)
│   │   │
│   │   ├── features/              # Feature modules / routed pages
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   │   └── home.routes.ts # Standalone route (lazy loaded)
│   │   │   ├── about/
│   │   │   └── contact/
│   │   │
│   │   ├── components/            # Global components used in layout
│   │   │   ├── header/
│   │   │   ├── sidebar/
│   │   │   └── footer/
│   │   │
│   │   ├── layout/                # App layout (wrapper for routed pages)
│   │   │   └── main-layout.component.ts
│   │   │
│   │   ├── models/                # Interfaces, enums, DTOs
│   │   │   ├── user.model.ts
│   │   │   └── product.model.ts
│   │   │
│   │   ├── app.routes.ts          # App-level standalone route definitions
│   │   ├── app.config.ts          # Angular 17+ standalone configuration
│   │   ├── app.component.ts       # Root component
│   │   └── app.component.html
│   │
│   ├── assets/                    # Static assets like images, fonts
│   │   ├── images/
│   │   ├── icons/
│   │   └── i18n/                  # Localization (if using ngx-translate etc.)
│   │
│   ├── environments/              # Environment files
│   │   ├── environment.ts         # Dev config
│   │   └── environment.prod.ts    # Prod config
│   │
│   ├── styles/                    # Global SCSS files
│   │   ├── _variables.scss        # SCSS variables
│   │   ├── _mixins.scss           # SCSS mixins
│   │   ├── _utilities.scss        # Utility classes
│   │   └── main.scss              # Main SCSS entry
│   │
│   ├── index.html                 # Main HTML file
│   ├── main.ts                    # App entry point
│   ├── polyfills.ts               # Browser polyfills
│   └── styles.scss                # Entry point to SCSS (can import styles/main.scss)
│
├── angular.json                   # Angular CLI config
├── package.json                   # Project dependencies
├── tsconfig.app.json              # TypeScript config for app
├── tsconfig.json                  # Root TS config
├── .editorconfig                  # Code style config
├── .gitignore                     # Git ignored files
└── README.md                      # Project readme
`
}
