import { Component } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: true,
    imports: [
        HeaderComponent,
        FooterComponent,
        RouterOutlet
    ]
})
export class LayoutComponent {
    menuData = {
        "data": {
          "navigation_menu": [
              {
                  "meta": {
                      "id": 174688
                  },
                  "name": "Main menu",
                  "menu_items": [
                      {
                          "meta": {
                              "id": 174682
                          },
                          "label": "Inicio",
                          "url": "#home"
                      },
                      {
                          "meta": {
                              "id": 174683
                          },
                          "label": "Nosotros",
                          "url": "#about"
                      },
                      {
                          "meta": {
                              "id": 174684
                          },
                          "label": "Productos",
                          "url": "#features"
                      },
                      /*{
                          "meta": {
                              "id": 174685
                          },
                          "label": "Try It",
                          "url": "#tryit"
                      },*/
                      {
                          "meta": {
                              "id": 174686
                          },
                          "label": "Testimonios",
                          "url": "#testimonials"
                      },
                      {
                          "meta": {
                              "id": 174687
                          },
                          "label": "Blog",
                          "url": "#blog"
                      }
                  ]
              }
          ]
      }
    }

    constructor() {
        // Inicialización si es necesario
    }
}
