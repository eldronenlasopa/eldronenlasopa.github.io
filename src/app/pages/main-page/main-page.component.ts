import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { DataMain, PageFields } from "../../core/interfaces/iMain";
import { CommonModule } from "@angular/common";
import { DataBlog } from "../../core/interfaces/iBlog";
import { HeroComponent } from "./components/hero/hero.component";
import { TwoColumnWithImageComponent } from "./components/two-column-with-image/two-column-with-image.component";
import { FeaturesComponent } from "./components/features/features.component";
import { BlogSectionComponent } from "./components/blog-section/blog-section.component";
import { TestimonialsComponent } from "./components/testimonials/testimonials.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { DataCourse } from "../../core/interfaces/iCourse";

@Component({
    selector: 'main-page',
    standalone: true,
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
    imports: [
    CommonModule,
    HeroComponent,
    TwoColumnWithImageComponent,
    FeaturesComponent,
    BlogSectionComponent,
    TestimonialsComponent,
    CoursesComponent
]
})

export class MainPageComponent implements OnInit {

    dataMain: DataMain = {
        data: {
            slug: "landing-page-with-components",
            name: "Landing Page with Components",
            published: "2021-11-08T13:34:20.117149Z",
            updated: "2022-01-26T15:49:51.353051Z",
            scheduled: null,
            status: "published",
            page_type: "landing-page",
            fields: {
                seo: {
                    title: "El dron en la sopa",
                    description: "La tecnología al alcance de todos",
                },
                body: [
                    {
                      type: "hero",
                      fields: {
                        headline: "Los mejores cursos de tecnología al alcance de todos",
                        subheadline:
                          "Aprende a automatizar, programar, crear aplicaciones web, a diseñar y sobre todo a encontrar tu camino en el mundo de la tecnología.",
                        image: "assets/images/hero/hero-image.svg",
                        button_label: "Descubrir más cursos",
                        button_url: "https://buttercms.com/pages/",
                        scroll_anchor_id: "home",
                      },
                    },
                    {
                      type: "two_column_with_image",
                      fields: {
                        headline: "!Mozo! Hay un dron en mi sopa",
                        subheadline:
                          "A medida que la tecnología avanza, también lo hacen las oportunidades de aprendizaje. El Dron en la Sopa, no es más que un juego de palabras que representa como nuestro día a día convive con estos avances. Es entonces que ofrecemos una amplia gama de cursos diseñados para ayudarte a dominar las habilidades más demandadas en el mundo digital.",
                        image: "assets/images/about/about-image.svg",
                        image_position: "left",
                        button_label: "Conoce mas sobre nosotros",
                        button_url: "/",
                        scroll_anchor_id: "about",
                      },
                    },
                    {
                      type: "features",
                      fields: {
                        headline: "¿Qué tipos de cursos ofrecemos?",
                        subheadline:
                          "<p>Ofrecemos una amplia gama de cursos diseñados para ayudarte a dominar las habilidades más demandadas en el mundo digital. Desde programación y desarrollo web hasta diseño gráfico y marketing digital, nuestros cursos están diseñados para adaptarse a tus necesidades y nivel de experiencia.</p>",
                        scroll_anchor_id: "features",
                        features: [
                          {
                            headline: "Ofimática",
                            description:
                              "Aprende a utilizar herramientas de ofimática como Microsoft Office, Google Workspace y más. Domina el arte de crear documentos, hojas de cálculo y presentaciones profesionales.",
                            icon: "https://cdn.buttercms.com/hWC1eXQLyYZKE4h03CLQ",
                          },
                          {
                            headline: "Diseño y Desarrollo",
                            description:
                              "Explora el mundo del diseño y desarrollo web. Aprende a crear sitios web atractivos y funcionales utilizando HTML, CSS, JavaScript y frameworks populares como React y Angular.",
                            icon: "https://cdn.buttercms.com/zwL5xPiR8yFbSYYG6kgr",
                          },
                          {
                            headline: "Aplicaciones Móviles",
                            description:
                              "Desarrolla aplicaciones móviles para iOS y Android. Aprende a utilizar herramientas como Flutter y React Native para crear aplicaciones multiplataforma de alta calidad.",
                            icon: "https://cdn.buttercms.com/UrvV7047TridMZx0RpOc",
                          },
                          {
                            headline: "Business Intelligence",
                            description:
                              "Domina el análisis de datos y la visualización con herramientas de Business Intelligence como Power BI y Tableau. Aprende a transformar datos en información valiosa para la toma de decisiones empresariales.",
                            icon: "https://cdn.buttercms.com/epLAKeLUSv6xJekCA3NT",
                          },
                        ],
                      },
                    },
                    {
                      type: "testimonials",
                      fields: {
                        headline: "¿Que opinan de nosotros?",
                        scroll_anchor_id: "testimonials",
                        testimonial: [
                          {
                            quote:
                              "Tenía problemas para aprender a programar en Macros, pero la metodología de los docentes hizo que fuera divertido aprender.",
                            name: "Daniel Contreras",
                            title: "Ingeniero de Software",
                          },
                          {
                            quote:
                              "Necesitaba aprender a elaborar Dashboards en Power Bi para un trabajo, y en un par de clases ya dejó de asustarme el software.",
                            name: "Bryan Cajahuanca",
                            title: "Practicante de Telecomunicaciones",
                          },
                          {
                            quote:
                              "Desarrollé una aplicación en VBA que me redujo la carga laboral de dos semanas en apenas un click, he recibido buenas referencias en mi trabajo gracias a ello.",
                            name: "Jessica Vega",
                            title: "Practicante de Derecho",
                          },
                        ],
                      },
                    },
                ],
            },
        },
    };
    dataBlog: DataBlog = {
        meta: {
            next_page: 2,
            previous_page: null,
            count: 3
        },
        data: [
            {
                status: "published",
                created: "2021-11-24T15:41:25.327471Z",
                updated: "2021-12-15T07:49:28.292665Z",
                published: "2021-11-24T15:40:00Z",
                title: "Third Sample Post With Featured",
                slug: "third-sample-post-with-featured",
                body: "<p>orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. Nullam fringilla ullamcorper mi ac efficitur. Nam congue, erat in elementum fermentum, eros libero sodales enim, tincidunt facilisis purus metus vitae urna.</p>\n<p>Vestibulum vel consectetur libero. Fusce pharetra nisi ac efficitur efficitur. Suspendisse justo erat, mollis vitae lectus quis, tempor congue justo. Cras in egestas enim. Vivamus fringilla libero nisl, vitae vehicula orci posuere eu. Donec lacus arcu, sollicitudin in maximus quis, dignissim id velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada, orci sodales viverra scelerisque, enim orci congue urna, in mollis tellus nulla aliquam tellus. Mauris sodales pellentesque mollis. Donec facilisis eu lacus id ornare. Aliquam euismod felis tellus, a elementum odio tincidunt luctus. Phasellus lacus sem, blandit at eros et, fringilla porta lacus. Maecenas blandit, tellus scelerisque ultricies pharetra, est nibh ullamcorper lectus, sit amet bibendum velit nisi vitae ex. Nullam nec laoreet augue. Aliquam erat volutpat. Aenean accumsan ipsum at laoreet auctor.</p>\n<p>Ut ut dolor dapibus, placerat lorem in, ultrices nulla. Etiam commodo porttitor volutpat. Suspendisse a lectus vel nisl porta sollicitudin. Morbi id imperdiet tellus, eget mollis tortor. Ut malesuada ex non consequat auctor. Ut consectetur diam eu nibh accumsan, et imperdiet nunc blandit. Duis pulvinar enim vel sodales dictum. Praesent eget pretium metus. Cras pharetra accumsan venenatis. Praesent vel iaculis ex, sed accumsan ligula. Aliquam ac commodo tortor. Donec consequat urna nec velit euismod placerat. Integer placerat auctor cursus.</p>\n<p>Duis odio purus, rhoncus sed tortor in, scelerisque aliquet arcu. Nam sit amet dui et lacus tristique volutpat id vel ipsum. Proin pulvinar tempor erat ut posuere. Nam venenatis sollicitudin tortor, id faucibus sem molestie tristique. Proin vel enim a turpis porta cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc lobortis pretium erat. Duis tincidunt ante accumsan, rhoncus lacus vitae, euismod ex. Nulla et eros nec massa dapibus congue id id ipsum. Duis elementum bibendum quam, vel convallis felis finibus id. Nunc non tortor id libero cursus sollicitudin ut et lorem. Vestibulum egestas vel lorem vel rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur rutrum euismod tellus, quis consequat lacus fringilla nec. Vivamus ligula magna, consequat ac ex at, dignissim molestie mi.</p>\n<p>Donec et lorem nec mauris sollicitudin fringilla. Nam suscipit justo nec aliquet venenatis. Quisque ultrices quam magna, vitae imperdiet sem venenatis in. Etiam in est lacinia, auctor magna et, vulputate odio. Integer eu massa eu mauris sagittis auctor. Ut faucibus, nisi ut blandit tincidunt, lacus turpis placerat justo, condimentum lobortis sem neque id ipsum. Morbi id justo eu elit sollicitudin aliquet auctor id magna. Sed lorem mauris, laoreet at metus sed, semper feugiat felis. Aenean aliquam leo vitae velit mollis condimentum. In orci sem, scelerisque non pretium ac, vestibulum in sem. Ut quam est, vulputate ut viverra ornare, interdum ut lorem.</p>",
                summary: "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. ...",
                seo_title: "Third Sample Post With Featured",
                meta_description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nu",
                featured_image_alt: "",
                url: "https://django-starter-buttercms-test-fd598ac8705f.herokuapp.com/blog/third-sample-post-with-featured/",
                scheduled: null,
                featured_image: "https://cdn.buttercms.com/VXI3trZuRx2dnaHOVqKb",
                author: {
                    bio: "",
                    slug: "starter-project",
                    email: "starterprojects@buttercms.com",
                    title: "",
                    last_name: "Project",
                    first_name: "Starter",
                    facebook_url: "",
                    linkedin_url: "",
                    instagram_url: "",
                    pinterest_url: "",
                    profile_image: "https://cdn.buttercms.com/IkE12e3GTpe1xd1WJP2I",
                    twitter_handle: ""
                },
                tags: [
                    {
                        name: "Example Tag",
                        slug: "example-tag"
                    },
                    {
                        name: "Testing",
                        slug: "testing"
                    }
                ],
                categories: [
                    {
                        name: "Testing",
                        slug: "testing"
                    }
                ]
            },
            {
                status: "published",
                created: "2021-11-24T15:40:03.241427Z",
                updated: "2021-12-29T16:47:05.160010Z",
                published: "2021-11-24T15:39:00Z",
                title: "New sample post no featured image",
                slug: "new-sample-post-no-featured-image",
                body: "<p>orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. Nullam fringilla ullamcorper mi ac efficitur. Nam congue, erat in elementum fermentum, eros libero sodales enim, tincidunt facilisis purus metus vitae urna.</p>\n<p>Vestibulum vel consectetur libero. Fusce pharetra nisi ac efficitur efficitur. Suspendisse justo erat, mollis vitae lectus quis, tempor congue justo. Cras in egestas enim. Vivamus fringilla libero nisl, vitae vehicula orci posuere eu. Donec lacus arcu, sollicitudin in maximus quis, dignissim id velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada, orci sodales viverra scelerisque, enim orci congue urna, in mollis tellus nulla aliquam tellus. Mauris sodales pellentesque mollis. Donec facilisis eu lacus id ornare. Aliquam euismod felis tellus, a elementum odio tincidunt luctus. Phasellus lacus sem, blandit at eros et, fringilla porta lacus. Maecenas blandit, tellus scelerisque ultricies pharetra, est nibh ullamcorper lectus, sit amet bibendum velit nisi vitae ex. Nullam nec laoreet augue. Aliquam erat volutpat. Aenean accumsan ipsum at laoreet auctor.</p>\n<p>Ut ut dolor dapibus, placerat lorem in, ultrices nulla. Etiam commodo porttitor volutpat. Suspendisse a lectus vel nisl porta sollicitudin. Morbi id imperdiet tellus, eget mollis tortor. Ut malesuada ex non consequat auctor. Ut consectetur diam eu nibh accumsan, et imperdiet nunc blandit. Duis pulvinar enim vel sodales dictum. Praesent eget pretium metus. Cras pharetra accumsan venenatis. Praesent vel iaculis ex, sed accumsan ligula. Aliquam ac commodo tortor. Donec consequat urna nec velit euismod placerat. Integer placerat auctor cursus.</p>\n<p>Duis odio purus, rhoncus sed tortor in, scelerisque aliquet arcu. Nam sit amet dui et lacus tristique volutpat id vel ipsum. Proin pulvinar tempor erat ut posuere. Nam venenatis sollicitudin tortor, id faucibus sem molestie tristique. Proin vel enim a turpis porta cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc lobortis pretium erat. Duis tincidunt ante accumsan, rhoncus lacus vitae, euismod ex. Nulla et eros nec massa dapibus congue id id ipsum. Duis elementum bibendum quam, vel convallis felis finibus id. Nunc non tortor id libero cursus sollicitudin ut et lorem. Vestibulum egestas vel lorem vel rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur rutrum euismod tellus, quis consequat lacus fringilla nec. Vivamus ligula magna, consequat ac ex at, dignissim molestie mi.</p>\n<p>Donec et lorem nec mauris sollicitudin fringilla. Nam suscipit justo nec aliquet venenatis. Quisque ultrices quam magna, vitae imperdiet sem venenatis in. Etiam in est lacinia, auctor magna et, vulputate odio. Integer eu massa eu mauris sagittis auctor. Ut faucibus, nisi ut blandit tincidunt, lacus turpis placerat justo, condimentum lobortis sem neque id ipsum. Morbi id justo eu elit sollicitudin aliquet auctor id magna. Sed lorem mauris, laoreet at metus sed, semper feugiat felis. Aenean aliquam leo vitae velit mollis condimentum. In orci sem, scelerisque non pretium ac, vestibulum in sem. Ut quam est, vulputate ut viverra ornare, interdum ut lorem.</p>\n<p></p>\n<p></p>",
                summary: "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. ...",
                seo_title: "New sample post no featured image",
                meta_description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nu",
                featured_image_alt: "",
                url: "https://django-starter-buttercms-test-fd598ac8705f.herokuapp.com/blog/new-sample-post-no-featured-image/",
                scheduled: null,
                featured_image: null,
                author: {
                    bio: "",
                    slug: "jim-testerton",
                    email: "",
                    title: "",
                    last_name: "Testerton",
                    first_name: "Jim",
                    facebook_url: "",
                    linkedin_url: "",
                    instagram_url: "",
                    pinterest_url: "",
                    profile_image: "https://cdn.buttercms.com/vJLWvWu9SmOOtqXJJgGI",
                    twitter_handle: ""
                },
                tags: [],
                categories: [
                    {
                        name: "Testing",
                        slug: "testing"
                    }
                ]
            },
        ]
    };
    dataCourse: DataCourse = {
        meta: {
            next_page: 2,
            previous_page: null,
            count: 3
        },
        data: [
            {
                status: "published",
                created: "2021-11-24T15:41:25.327471Z",
                updated: "2021-12-15T07:49:28.292665Z",
                published: "2021-11-24T15:40:00Z",
                startdate: new Date("2025-06-01T00:00:00Z"),
                title: "Excel Macros Nivel I",
                slug: "excel-macros-i-2025-06",
                body: "<p>Cuerpo del curso</p>",
                summary: "Desarrolla aplicaciones en Excel con Macros y VBA, aprende a automatizar tareas repetitivas y mejora tu productividad.",
                seo_title: "Third Sample Post With Featured",
                meta_description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nu",
                featured_image_alt: "",
                url: "https://django-starter-buttercms-test-fd598ac8705f.herokuapp.com/blog/third-sample-post-with-featured/",
                scheduled: null,
                featured_image: "https://cdn.buttercms.com/VXI3trZuRx2dnaHOVqKb",
                author: {
                    bio: "",
                    slug: "starter-project",
                    email: "starterprojects@buttercms.com",
                    title: "",
                    last_name: "Project",
                    first_name: "Starter",
                    facebook_url: "",
                    linkedin_url: "",
                    instagram_url: "",
                    pinterest_url: "",
                    profile_image: "https://cdn.buttercms.com/IkE12e3GTpe1xd1WJP2I",
                    twitter_handle: ""
                },
                tags: [
                    {
                        name: "Example Tag",
                        slug: "example-tag"
                    },
                    {
                        name: "Testing",
                        slug: "testing"
                    }
                ],
                categories: [
                    {
                        name: "Testing",
                        slug: "testing"
                    }
                ]
            },
            {
                status: "published",
                created: "2021-11-24T15:40:03.241427Z",
                updated: "2021-12-29T16:47:05.160010Z",
                published: "2021-11-24T15:39:00Z",
                title: "New sample post no featured image",
                slug: "new-sample-post-no-featured-image",
                body: "<p>orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. Nullam fringilla ullamcorper mi ac efficitur. Nam congue, erat in elementum fermentum, eros libero sodales enim, tincidunt facilisis purus metus vitae urna.</p>\n<p>Vestibulum vel consectetur libero. Fusce pharetra nisi ac efficitur efficitur. Suspendisse justo erat, mollis vitae lectus quis, tempor congue justo. Cras in egestas enim. Vivamus fringilla libero nisl, vitae vehicula orci posuere eu. Donec lacus arcu, sollicitudin in maximus quis, dignissim id velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada, orci sodales viverra scelerisque, enim orci congue urna, in mollis tellus nulla aliquam tellus. Mauris sodales pellentesque mollis. Donec facilisis eu lacus id ornare. Aliquam euismod felis tellus, a elementum odio tincidunt luctus. Phasellus lacus sem, blandit at eros et, fringilla porta lacus. Maecenas blandit, tellus scelerisque ultricies pharetra, est nibh ullamcorper lectus, sit amet bibendum velit nisi vitae ex. Nullam nec laoreet augue. Aliquam erat volutpat. Aenean accumsan ipsum at laoreet auctor.</p>\n<p>Ut ut dolor dapibus, placerat lorem in, ultrices nulla. Etiam commodo porttitor volutpat. Suspendisse a lectus vel nisl porta sollicitudin. Morbi id imperdiet tellus, eget mollis tortor. Ut malesuada ex non consequat auctor. Ut consectetur diam eu nibh accumsan, et imperdiet nunc blandit. Duis pulvinar enim vel sodales dictum. Praesent eget pretium metus. Cras pharetra accumsan venenatis. Praesent vel iaculis ex, sed accumsan ligula. Aliquam ac commodo tortor. Donec consequat urna nec velit euismod placerat. Integer placerat auctor cursus.</p>\n<p>Duis odio purus, rhoncus sed tortor in, scelerisque aliquet arcu. Nam sit amet dui et lacus tristique volutpat id vel ipsum. Proin pulvinar tempor erat ut posuere. Nam venenatis sollicitudin tortor, id faucibus sem molestie tristique. Proin vel enim a turpis porta cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc lobortis pretium erat. Duis tincidunt ante accumsan, rhoncus lacus vitae, euismod ex. Nulla et eros nec massa dapibus congue id id ipsum. Duis elementum bibendum quam, vel convallis felis finibus id. Nunc non tortor id libero cursus sollicitudin ut et lorem. Vestibulum egestas vel lorem vel rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur rutrum euismod tellus, quis consequat lacus fringilla nec. Vivamus ligula magna, consequat ac ex at, dignissim molestie mi.</p>\n<p>Donec et lorem nec mauris sollicitudin fringilla. Nam suscipit justo nec aliquet venenatis. Quisque ultrices quam magna, vitae imperdiet sem venenatis in. Etiam in est lacinia, auctor magna et, vulputate odio. Integer eu massa eu mauris sagittis auctor. Ut faucibus, nisi ut blandit tincidunt, lacus turpis placerat justo, condimentum lobortis sem neque id ipsum. Morbi id justo eu elit sollicitudin aliquet auctor id magna. Sed lorem mauris, laoreet at metus sed, semper feugiat felis. Aenean aliquam leo vitae velit mollis condimentum. In orci sem, scelerisque non pretium ac, vestibulum in sem. Ut quam est, vulputate ut viverra ornare, interdum ut lorem.</p>\n<p></p>\n<p></p>",
                summary: "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. ...",
                seo_title: "New sample post no featured image",
                meta_description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nu",
                featured_image_alt: "",
                url: "https://django-starter-buttercms-test-fd598ac8705f.herokuapp.com/blog/new-sample-post-no-featured-image/",
                scheduled: null,
                featured_image: null,
                author: {
                    bio: "",
                    slug: "jim-testerton",
                    email: "",
                    title: "",
                    last_name: "Testerton",
                    first_name: "Jim",
                    facebook_url: "",
                    linkedin_url: "",
                    instagram_url: "",
                    pinterest_url: "",
                    profile_image: "https://cdn.buttercms.com/vJLWvWu9SmOOtqXJJgGI",
                    twitter_handle: ""
                },
                tags: [],
                categories: [
                    {
                        name: "Testing",
                        slug: "testing"
                    }
                ]
            },
        ]
    };
    pageData: PageFields | null = null;
    posts: DataBlog | null = null;
    courses: DataBlog | null = null;

    constructor(
        private route: ActivatedRoute,
        public meta: Meta,
        public title: Title
    ) {}

    ngOnInit(): void {
        //const slug = this.route.snapshot.params.slug;

        this.pageData = this.dataMain.data.fields;
        this.title.setTitle(this.dataMain.data.fields['seo']['title']);
        this.meta.addTag({name: 'description', content: this.dataMain.data.fields['seo']['description'].concat(' ')});
        /*
        setTimeout(() => {
            const f = this.route.snapshot.fragment;
            const element = document.querySelector('#' + f);
            if (element) {
                element.scrollIntoView();
            }
        }, 500);*/

        this.posts = this.dataBlog;
        this.courses = this.dataCourse;
    }

}
