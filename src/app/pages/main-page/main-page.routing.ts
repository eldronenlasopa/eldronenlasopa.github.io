import { Routes } from "@angular/router";
import { MainPageComponent } from "./main-page.component";

export default [
    {
      path: '',
      children: [
        {
          path: ':slug',
          children: [
            {
              path: ':type',
              component: MainPageComponent
            }, {
              path: '',
              component: MainPageComponent
            }
          ]
        }, {
          path: '',
          component: MainPageComponent
        }
      ]
    }
] as Routes;
