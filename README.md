# ErpVtmsTesting

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

- Run `npm start` default application use config on file `eniroment.dev.ts`
- Run `npm run start:local` for application use config on file `eniroment.local.ts`. connect to local BE and local keycloak

## folder structure

```
├── src
│   ├── app
│   │   ├── directives
│   │   ├── pipes
│   │   ├── core
│   │   │   ├── models
│   │   │   │   ├── index.ts
│   │   │   │   ├── repos.ts
│   │   │   ├── services
│   │   │   │   ├── payment.service.ts
│   │   │   │   ├── index.ts
│   │   │   ├── core.module.ts
│   │   │   ├── index.ts
│   │   ├── home
│   │   │   ├── pages
│   │   │   │   ├── aboutus
│   │   │   │   │   ├── about-us.component.ts
│   │   │   │   ├── contactus
│   │   │   │   │   ├── contact-us.component.ts
│   │   │   │   ├── home
│   │   │   │   │   ├── home-us.component.ts
│   │   │   │   ├── index.ts
│   │   │   ├── components
│   │   │   ├── home-routing.module.ts
│   │   │   ├── home.module.ts
│   │   │   ├── index.ts
│   │   ├── shared
│   │   │   ├── layout
│   │   │   │   ├── footer
│   │   │   │   │   ├── footer.component.ts
│   │   │   │   │   ├── footer.component.html
│   │   │   │   ├── header
│   │   │   │   │   ├── header.component.ts
│   │   │   │   │   ├── header.component.html
│   │   │   ├── index.ts
│   ├── app-routing.module.ts
│   ├── app.component.css
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── not-found.component.ts // optional maybe not needed
```
