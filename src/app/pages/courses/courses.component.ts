import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Meta, Title} from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { SearchComponent } from "./components/search/search.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { LoaderComponent } from "../../shared/components/loader/loader.component";
import { MatIconModule } from '@angular/material/icon';

enum BLOG_TYPE {
    ALL = 'all',
    CATEGORY = 'category',
    TAG = 'tag',
    SEARCH = 'search',
    POST = 'post'
}

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss'],
    standalone: true,
    imports: [
        CategoriesComponent,
        CommonModule,
        LoaderComponent,
        MatIconModule,
        SearchComponent,
    ]
})
export class CoursesComponent implements OnInit {
  public posts: any[] = [];
  public categories: any[] = [];
  public title: string = '';
  public brTitle: string = '';
  public post: any = null;
  public pageLoading: boolean = false;

  public blogType: BLOG_TYPE = BLOG_TYPE.ALL;

  private categoriesData = {
      "data": [
          {
              "name": "Example Category",
              "slug": "example-category"
          },
          {
              "name": "Testing",
              "slug": "testing"
          }
      ]
  };

  dataCourse = {
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
              seo_title: "Excel Macros Nivel I",
              meta_description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nu",
              featured_image_alt: "",
              url: "https://django-starter-buttercms-test-fd598ac8705f.herokuapp.com/blog/third-sample-post-with-featured/",
              scheduled: null,
              featured_image: "assets/images/courses/excel-macros-i.gif",
              author: {
                  bio: "",
                  slug: "starter-project",
                  email: "starterprojects@buttercms.com",
                  title: "Eng. Mba. ",
                  last_name: "Guerreros",
                  first_name: "Jayro",
                  facebook_url: "",
                  linkedin_url: "",
                  instagram_url: "",
                  pinterest_url: "",
                  profile_image: "assets/images/authors/1.jpg",
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
              startdate: new Date("2025-06-01T00:00:00Z"),
              title: "Business Intelligence con Power BI",
              slug: "power-bi-2025-06",
              body: "<p>orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. Nullam fringilla ullamcorper mi ac efficitur. Nam congue, erat in elementum fermentum, eros libero sodales enim, tincidunt facilisis purus metus vitae urna.</p>\n<p>Vestibulum vel consectetur libero. Fusce pharetra nisi ac efficitur efficitur. Suspendisse justo erat, mollis vitae lectus quis, tempor congue justo. Cras in egestas enim. Vivamus fringilla libero nisl, vitae vehicula orci posuere eu. Donec lacus arcu, sollicitudin in maximus quis, dignissim id velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada, orci sodales viverra scelerisque, enim orci congue urna, in mollis tellus nulla aliquam tellus. Mauris sodales pellentesque mollis. Donec facilisis eu lacus id ornare. Aliquam euismod felis tellus, a elementum odio tincidunt luctus. Phasellus lacus sem, blandit at eros et, fringilla porta lacus. Maecenas blandit, tellus scelerisque ultricies pharetra, est nibh ullamcorper lectus, sit amet bibendum velit nisi vitae ex. Nullam nec laoreet augue. Aliquam erat volutpat. Aenean accumsan ipsum at laoreet auctor.</p>\n<p>Ut ut dolor dapibus, placerat lorem in, ultrices nulla. Etiam commodo porttitor volutpat. Suspendisse a lectus vel nisl porta sollicitudin. Morbi id imperdiet tellus, eget mollis tortor. Ut malesuada ex non consequat auctor. Ut consectetur diam eu nibh accumsan, et imperdiet nunc blandit. Duis pulvinar enim vel sodales dictum. Praesent eget pretium metus. Cras pharetra accumsan venenatis. Praesent vel iaculis ex, sed accumsan ligula. Aliquam ac commodo tortor. Donec consequat urna nec velit euismod placerat. Integer placerat auctor cursus.</p>\n<p>Duis odio purus, rhoncus sed tortor in, scelerisque aliquet arcu. Nam sit amet dui et lacus tristique volutpat id vel ipsum. Proin pulvinar tempor erat ut posuere. Nam venenatis sollicitudin tortor, id faucibus sem molestie tristique. Proin vel enim a turpis porta cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc lobortis pretium erat. Duis tincidunt ante accumsan, rhoncus lacus vitae, euismod ex. Nulla et eros nec massa dapibus congue id id ipsum. Duis elementum bibendum quam, vel convallis felis finibus id. Nunc non tortor id libero cursus sollicitudin ut et lorem. Vestibulum egestas vel lorem vel rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur rutrum euismod tellus, quis consequat lacus fringilla nec. Vivamus ligula magna, consequat ac ex at, dignissim molestie mi.</p>\n<p>Donec et lorem nec mauris sollicitudin fringilla. Nam suscipit justo nec aliquet venenatis. Quisque ultrices quam magna, vitae imperdiet sem venenatis in. Etiam in est lacinia, auctor magna et, vulputate odio. Integer eu massa eu mauris sagittis auctor. Ut faucibus, nisi ut blandit tincidunt, lacus turpis placerat justo, condimentum lobortis sem neque id ipsum. Morbi id justo eu elit sollicitudin aliquet auctor id magna. Sed lorem mauris, laoreet at metus sed, semper feugiat felis. Aenean aliquam leo vitae velit mollis condimentum. In orci sem, scelerisque non pretium ac, vestibulum in sem. Ut quam est, vulputate ut viverra ornare, interdum ut lorem.</p>\n<p></p>\n<p></p>",
              summary: "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. ...",
              seo_title: "New sample post no featured image",
              meta_description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nu",
              featured_image_alt: "",
              url: "https://django-starter-buttercms-test-fd598ac8705f.herokuapp.com/blog/new-sample-post-no-featured-image/",
              scheduled: null,
              featured_image: "assets/images/courses/power-bi.gif",
              author: {
                  bio: "",
                  slug: "jim-testerton",
                  email: "",
                  title: "",
                  last_name: "Guerreros",
                  first_name: "Jayro",
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
          {
              status: "published",
              created: "2021-11-24T15:40:03.241427Z",
              updated: "2021-12-29T16:47:05.160010Z",
              published: "2021-11-24T15:39:00Z",
              startdate: new Date("2025-06-01T00:00:00Z"),
              title: "SQL Nivel Básico - Oracle",
              slug: "oracle-basico-2025-06",
              body: "<p>orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. Nullam fringilla ullamcorper mi ac efficitur. Nam congue, erat in elementum fermentum, eros libero sodales enim, tincidunt facilisis purus metus vitae urna.</p>\n<p>Vestibulum vel consectetur libero. Fusce pharetra nisi ac efficitur efficitur. Suspendisse justo erat, mollis vitae lectus quis, tempor congue justo. Cras in egestas enim. Vivamus fringilla libero nisl, vitae vehicula orci posuere eu. Donec lacus arcu, sollicitudin in maximus quis, dignissim id velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada, orci sodales viverra scelerisque, enim orci congue urna, in mollis tellus nulla aliquam tellus. Mauris sodales pellentesque mollis. Donec facilisis eu lacus id ornare. Aliquam euismod felis tellus, a elementum odio tincidunt luctus. Phasellus lacus sem, blandit at eros et, fringilla porta lacus. Maecenas blandit, tellus scelerisque ultricies pharetra, est nibh ullamcorper lectus, sit amet bibendum velit nisi vitae ex. Nullam nec laoreet augue. Aliquam erat volutpat. Aenean accumsan ipsum at laoreet auctor.</p>\n<p>Ut ut dolor dapibus, placerat lorem in, ultrices nulla. Etiam commodo porttitor volutpat. Suspendisse a lectus vel nisl porta sollicitudin. Morbi id imperdiet tellus, eget mollis tortor. Ut malesuada ex non consequat auctor. Ut consectetur diam eu nibh accumsan, et imperdiet nunc blandit. Duis pulvinar enim vel sodales dictum. Praesent eget pretium metus. Cras pharetra accumsan venenatis. Praesent vel iaculis ex, sed accumsan ligula. Aliquam ac commodo tortor. Donec consequat urna nec velit euismod placerat. Integer placerat auctor cursus.</p>\n<p>Duis odio purus, rhoncus sed tortor in, scelerisque aliquet arcu. Nam sit amet dui et lacus tristique volutpat id vel ipsum. Proin pulvinar tempor erat ut posuere. Nam venenatis sollicitudin tortor, id faucibus sem molestie tristique. Proin vel enim a turpis porta cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc lobortis pretium erat. Duis tincidunt ante accumsan, rhoncus lacus vitae, euismod ex. Nulla et eros nec massa dapibus congue id id ipsum. Duis elementum bibendum quam, vel convallis felis finibus id. Nunc non tortor id libero cursus sollicitudin ut et lorem. Vestibulum egestas vel lorem vel rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur rutrum euismod tellus, quis consequat lacus fringilla nec. Vivamus ligula magna, consequat ac ex at, dignissim molestie mi.</p>\n<p>Donec et lorem nec mauris sollicitudin fringilla. Nam suscipit justo nec aliquet venenatis. Quisque ultrices quam magna, vitae imperdiet sem venenatis in. Etiam in est lacinia, auctor magna et, vulputate odio. Integer eu massa eu mauris sagittis auctor. Ut faucibus, nisi ut blandit tincidunt, lacus turpis placerat justo, condimentum lobortis sem neque id ipsum. Morbi id justo eu elit sollicitudin aliquet auctor id magna. Sed lorem mauris, laoreet at metus sed, semper feugiat felis. Aenean aliquam leo vitae velit mollis condimentum. In orci sem, scelerisque non pretium ac, vestibulum in sem. Ut quam est, vulputate ut viverra ornare, interdum ut lorem.</p>\n<p></p>\n<p></p>",
              summary: "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. ...",
              seo_title: "New sample post no featured image",
              meta_description: "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nu",
              featured_image_alt: "",
              url: "https://django-starter-buttercms-test-fd598ac8705f.herokuapp.com/blog/new-sample-post-no-featured-image/",
              scheduled: null,
              featured_image: "assets/images/courses/sql-basico.gif",
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

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private meta: Meta,
      public mTitle: Title)
  {}

  ngOnInit(): void {
      // Cargar categorías desde datos locales
      this.categories = this.categoriesData.data;

      // Obtener posts según los parámetros de la ruta
      this.getPosts(
          this.route.snapshot.params['type'],
          this.route.snapshot.params['slug'],
          this.route.snapshot.queryParams['q']
      );
  }

  navigationChange(type: string | undefined, slug: string | undefined, searchParam: string | undefined) {
      if (searchParam) {
          this.router.navigate(['blog', 'search'], {queryParams: {q: searchParam}});
      } else if (!slug) {
          this.router.navigate(['blog', type]);
      } else {
          this.router.navigate(['blog', type, slug]);
      }
      this.getPosts(type, slug, searchParam);
  }

  getPosts(typeParam: string | undefined, slugParam: string | undefined, searchParam: string | undefined) {
      this.pageLoading = true;
      this.title = 'All posts';
      this.post = null;

      if (searchParam) {
          this.blogType = BLOG_TYPE.SEARCH;
          this.brTitle = searchParam;
          this.title = 'search results for query: ' + searchParam;

          // Filtrar posts por término de búsqueda
          const searchTerm = searchParam.toLowerCase();
          this.posts = this.dataCourse.data.filter(post =>
              post.title.toLowerCase().includes(searchTerm) ||
              post.summary.toLowerCase().includes(searchTerm) ||
              post.body.toLowerCase().includes(searchTerm)
          );

          this.pageLoading = false;
          this.setSeo();
      } else if (typeParam && !slugParam) {
          const foundPost = this.dataCourse.data.find(post => post.slug === typeParam);
          if (foundPost) {
            this.blogType = BLOG_TYPE.POST;
            this.post = foundPost;
            this.pageLoading = false;
            this.mTitle.setTitle(this.post.seo_title);
            this.meta.removeTag("name='description'");
            this.meta.addTag({name: 'description', content: this.post.meta_description});
            this.meta.removeTag("name='image'");
            if (this.post.featured_image) {
              this.meta.addTag({name: 'image', content: this.post.featured_image});
            }
          } else {
            this.navigateToNotFound();
          }
      } else {
        let filterBy: {category_slug?: string, tag_slug?: string} = {};

        if (typeParam && slugParam) {
            if (typeParam === BLOG_TYPE.CATEGORY) {
                this.blogType = BLOG_TYPE.CATEGORY;
                const category = this.categories.find(cat => cat.slug === slugParam);
                if (category) {
                  this.title = 'category: ' + category.name;
                  this.brTitle = category.name;
                  filterBy = {category_slug: slugParam};
                }
            } else if (typeParam === BLOG_TYPE.TAG) {
                this.blogType = BLOG_TYPE.TAG;
                // Encontrar el tag en cualquier post
                let tagName = '';
                for (const post of this.dataCourse.data) {
                  const tag = post.tags.find((t: any) => t.slug === slugParam);
                  if (tag) {
                    tagName = tag.name;
                    break;
                  }
                }
                this.title = 'tag: ' + tagName;
                this.brTitle = tagName;
                filterBy = {tag_slug: slugParam};
            } else {
                this.navigateToNotFound();
                return;
            }
        }

        // Filtrar posts según los parámetros
        if (filterBy.category_slug) {
            this.posts = this.dataCourse.data.filter(post =>
              post.categories.some((cat: any) => cat.slug === filterBy.category_slug)
            );
        } else if (filterBy.tag_slug) {
            this.posts = this.dataCourse.data.filter(post =>
              post.tags.some((tag: any) => tag.slug === filterBy.tag_slug)
            );
        } else {
            // Todos los posts
            this.posts = [...this.dataCourse.data];
        }

          this.pageLoading = false;
          this.setSeo();
      }
  }

  setSeo() {
      this.mTitle.setTitle('Sample Blog - ' + this.title);
      this.meta.removeTag("name='description'");
      this.meta.removeTag("name='image'");
      this.meta.addTag({name: 'description', content: 'Sample blog powered by ButterCMS, showing ' + this.title});
  }

  private navigateToNotFound() {
      this.router.navigate(['/not-found']);
  }

}
