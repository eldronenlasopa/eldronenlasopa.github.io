import { Routes } from "@angular/router";
import { LayoutComponent } from "./layout.component";
import { MainPageComponent } from "../pages/main-page/main-page.component";
import { BlogComponent } from "../pages/blog/blog.component";

export default [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: MainPageComponent
            },
            {
                path: 'landing-page',
                component: MainPageComponent
            },
            {
                path: 'blog',
                component: BlogComponent
            },
        ]
    }
] as Routes;
