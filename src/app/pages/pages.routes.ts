import { Routes } from "@angular/router";
import { MainPageComponent } from "./main-page/main-page.component";
import { BlogComponent } from "./blog/blog.component";
import { CoursesComponent } from "./courses/courses.component";

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
        path: 'blog/:type',
        component: BlogComponent
    },
    {
        path: 'courses',
        component: CoursesComponent
    },
    {
        path: 'courses/:type',
        component: CoursesComponent
    },

] as Routes;
