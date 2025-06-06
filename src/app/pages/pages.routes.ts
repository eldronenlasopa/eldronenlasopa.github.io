import { Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { BlogComponent } from "./blog/blog.component";

export default [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'blog/:slug',
        component: BlogComponent
    },

] as Routes;
