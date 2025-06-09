import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Meta, Title} from "@angular/platform-browser";
import { CommonModule } from '@angular/common';
import { SearchComponent } from "./components/search/search.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { LoaderComponent } from "../../shared/components/loader/loader.component";

enum BLOG_TYPE {
    ALL = 'all',
    CATEGORY = 'category',
    TAG = 'tag',
    SEARCH = 'search',
    POST = 'post'
}

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        SearchComponent,
        CategoriesComponent,
        LoaderComponent
    ]
})
export class BlogComponent implements OnInit {
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

  private postsData = {
    "meta": {
      "next_page": null,
      "previous_page": null,
      "count": 3
    },
    "data": [
      {
        "status": "published",
        "created": "2021-11-24T15:41:25.327471Z",
        "updated": "2021-12-15T07:49:28.292665Z",
        "published": "2021-11-24T15:40:00Z",
        "title": "Third Sample Post With Featured",
        "slug": "third-sample-post-with-featured",
        "body": "<p>orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. Nullam fringilla ullamcorper mi ac efficitur. Nam congue, erat in elementum fermentum, eros libero sodales enim, tincidunt facilisis purus metus vitae urna.</p>\n<p>Vestibulum vel consectetur libero. Fusce pharetra nisi ac efficitur efficitur. Suspendisse justo erat, mollis vitae lectus quis, tempor congue justo. Cras in egestas enim. Vivamus fringilla libero nisl, vitae vehicula orci posuere eu. Donec lacus arcu, sollicitudin in maximus quis, dignissim id velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada, orci sodales viverra scelerisque, enim orci congue urna, in mollis tellus nulla aliquam tellus. Mauris sodales pellentesque mollis. Donec facilisis eu lacus id ornare. Aliquam euismod felis tellus, a elementum odio tincidunt luctus. Phasellus lacus sem, blandit at eros et, fringilla porta lacus. Maecenas blandit, tellus scelerisque ultricies pharetra, est nibh ullamcorper lectus, sit amet bibendum velit nisi vitae ex. Nullam nec laoreet augue. Aliquam erat volutpat. Aenean accumsan ipsum at laoreet auctor.</p>\n<p>Ut ut dolor dapibus, placerat lorem in, ultrices nulla. Etiam commodo porttitor volutpat. Suspendisse a lectus vel nisl porta sollicitudin. Morbi id imperdiet tellus, eget mollis tortor. Ut malesuada ex non consequat auctor. Ut consectetur diam eu nibh accumsan, et imperdiet nunc blandit. Duis pulvinar enim vel sodales dictum. Praesent eget pretium metus. Cras pharetra accumsan venenatis. Praesent vel iaculis ex, sed accumsan ligula. Aliquam ac commodo tortor. Donec consequat urna nec velit euismod placerat. Integer placerat auctor cursus.</p>\n<p>Duis odio purus, rhoncus sed tortor in, scelerisque aliquet arcu. Nam sit amet dui et lacus tristique volutpat id vel ipsum. Proin pulvinar tempor erat ut posuere. Nam venenatis sollicitudin tortor, id faucibus sem molestie tristique. Proin vel enim a turpis porta cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc lobortis pretium erat. Duis tincidunt ante accumsan, rhoncus lacus vitae, euismod ex. Nulla et eros nec massa dapibus congue id id ipsum. Duis elementum bibendum quam, vel convallis felis finibus id. Nunc non tortor id libero cursus sollicitudin ut et lorem. Vestibulum egestas vel lorem vel rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur rutrum euismod tellus, quis consequat lacus fringilla nec. Vivamus ligula magna, consequat ac ex at, dignissim molestie mi.</p>\n<p>Donec et lorem nec mauris sollicitudin fringilla. Nam suscipit justo nec aliquet venenatis. Quisque ultrices quam magna, vitae imperdiet sem venenatis in. Etiam in est lacinia, auctor magna et, vulputate odio. Integer eu massa eu mauris sagittis auctor. Ut faucibus, nisi ut blandit tincidunt, lacus turpis placerat justo, condimentum lobortis sem neque id ipsum. Morbi id justo eu elit sollicitudin aliquet auctor id magna. Sed lorem mauris, laoreet at metus sed, semper feugiat felis. Aenean aliquam leo vitae velit mollis condimentum. In orci sem, scelerisque non pretium ac, vestibulum in sem. Ut quam est, vulputate ut viverra ornare, interdum ut lorem.</p>",
        "summary": "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. ...",
        "seo_title": "Third Sample Post With Featured",
        "meta_description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nu",
        "featured_image_alt": "",
        "url": "https://django-starter-buttercms-test-fd598ac8705f.herokuapp.com/blog/third-sample-post-with-featured/",
        "scheduled": null,
        "featured_image": "https://cdn.buttercms.com/VXI3trZuRx2dnaHOVqKb",
        "author": {
          "bio": "",
          "slug": "starter-project",
          "email": "starterprojects@buttercms.com",
          "title": "",
          "last_name": "Project",
          "first_name": "Starter",
          "facebook_url": "",
          "linkedin_url": "",
          "instagram_url": "",
          "pinterest_url": "",
          "profile_image": "https://cdn.buttercms.com/IkE12e3GTpe1xd1WJP2I",
          "twitter_handle": ""
        },
        "tags": [
          {
            "name": "Example Tag",
            "slug": "example-tag"
          },
          {
            "name": "Testing",
            "slug": "testing"
          }
        ],
        "categories": [
          {
            "name": "Testing",
            "slug": "testing"
          }
        ]
      },
      {
        "status": "published",
        "created": "2021-11-24T15:40:03.241427Z",
        "updated": "2021-12-29T16:47:05.160010Z",
        "published": "2021-11-24T15:39:00Z",
        "title": "New sample post no featured image",
        "slug": "new-sample-post-no-featured-image",
        "body": "<p>orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. Nullam fringilla ullamcorper mi ac efficitur. Nam congue, erat in elementum fermentum, eros libero sodales enim, tincidunt facilisis purus metus vitae urna.</p>\n<p>Vestibulum vel consectetur libero. Fusce pharetra nisi ac efficitur efficitur. Suspendisse justo erat, mollis vitae lectus quis, tempor congue justo. Cras in egestas enim. Vivamus fringilla libero nisl, vitae vehicula orci posuere eu. Donec lacus arcu, sollicitudin in maximus quis, dignissim id velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed malesuada, orci sodales viverra scelerisque, enim orci congue urna, in mollis tellus nulla aliquam tellus. Mauris sodales pellentesque mollis. Donec facilisis eu lacus id ornare. Aliquam euismod felis tellus, a elementum odio tincidunt luctus. Phasellus lacus sem, blandit at eros et, fringilla porta lacus. Maecenas blandit, tellus scelerisque ultricies pharetra, est nibh ullamcorper lectus, sit amet bibendum velit nisi vitae ex. Nullam nec laoreet augue. Aliquam erat volutpat. Aenean accumsan ipsum at laoreet auctor.</p>\n<p>Ut ut dolor dapibus, placerat lorem in, ultrices nulla. Etiam commodo porttitor volutpat. Suspendisse a lectus vel nisl porta sollicitudin. Morbi id imperdiet tellus, eget mollis tortor. Ut malesuada ex non consequat auctor. Ut consectetur diam eu nibh accumsan, et imperdiet nunc blandit. Duis pulvinar enim vel sodales dictum. Praesent eget pretium metus. Cras pharetra accumsan venenatis. Praesent vel iaculis ex, sed accumsan ligula. Aliquam ac commodo tortor. Donec consequat urna nec velit euismod placerat. Integer placerat auctor cursus.</p>\n<p>Duis odio purus, rhoncus sed tortor in, scelerisque aliquet arcu. Nam sit amet dui et lacus tristique volutpat id vel ipsum. Proin pulvinar tempor erat ut posuere. Nam venenatis sollicitudin tortor, id faucibus sem molestie tristique. Proin vel enim a turpis porta cursus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc lobortis pretium erat. Duis tincidunt ante accumsan, rhoncus lacus vitae, euismod ex. Nulla et eros nec massa dapibus congue id id ipsum. Duis elementum bibendum quam, vel convallis felis finibus id. Nunc non tortor id libero cursus sollicitudin ut et lorem. Vestibulum egestas vel lorem vel rutrum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur rutrum euismod tellus, quis consequat lacus fringilla nec. Vivamus ligula magna, consequat ac ex at, dignissim molestie mi.</p>\n<p>Donec et lorem nec mauris sollicitudin fringilla. Nam suscipit justo nec aliquet venenatis. Quisque ultrices quam magna, vitae imperdiet sem venenatis in. Etiam in est lacinia, auctor magna et, vulputate odio. Integer eu massa eu mauris sagittis auctor. Ut faucibus, nisi ut blandit tincidunt, lacus turpis placerat justo, condimentum lobortis sem neque id ipsum. Morbi id justo eu elit sollicitudin aliquet auctor id magna. Sed lorem mauris, laoreet at metus sed, semper feugiat felis. Aenean aliquam leo vitae velit mollis condimentum. In orci sem, scelerisque non pretium ac, vestibulum in sem. Ut quam est, vulputate ut viverra ornare, interdum ut lorem.</p>\n<p></p>\n<p></p>",
        "summary": "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nunc, lacinia a ornare scelerisque, auctor ac magna. Praesent posuere magna sed dui laoreet viverra. In hac habitasse platea dictumst. Pellentesque nec fermentum dolor. Fusce hendrerit dolor sed commodo aliquet. ...",
        "seo_title": "New sample post no featured image",
        "meta_description": "orem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit risus ac sapien pretium, in aliquet justo cursus. Proin lectus nu",
        "featured_image_alt": "",
        "url": "https://django-starter-buttercms-test-fd598ac8705f.herokuapp.com/blog/new-sample-post-no-featured-image/",
        "scheduled": null,
        "featured_image": null,
        "author": {
          "bio": "",
          "slug": "jim-testerton",
          "email": "",
          "title": "",
          "last_name": "Testerton",
          "first_name": "Jim",
          "facebook_url": "",
          "linkedin_url": "",
          "instagram_url": "",
          "pinterest_url": "",
          "profile_image": "https://cdn.buttercms.com/vJLWvWu9SmOOtXJJgGI",
          "twitter_handle": ""
        },
        "tags": [],
        "categories": [
          {
            "name": "Testing",
            "slug": "testing"
          }
        ]
      },
      {
        "status": "published",
        "created": "2021-11-08T13:34:05.376425Z",
        "updated": "2021-12-23T14:06:52.023127Z",
        "published": "2021-11-08T13:34:00Z",
        "title": "Example Post",
        "slug": "example-post",
        "body": "<p>Welcome to ButterCMS! This an example blog post written using Butter.</p>\n<h3>Blog Engine Demo - Draft</h3>\n<p>Here's a helpful walkthrough of our Blog Engine solution.</p>\n<p><!-- Outer Div sets maximum width for iframe on extra wide screens --></p>\n<div style=\"max-width: 800px; height: auto; margin: auto;\"><!-- Inner div allows for responsive iframe scaling, including on mobile -->\n<div style=\"position: relative; padding-bottom: 56.25%; padding-top: 35px; height: 0; overflow: hidden; margin: auto;\"><iframe style=\"position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 9999;\" src=\"https://www.youtube.com/embed/0dJbHy2XqoY\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen=\"allowfullscreen\"></iframe></div>\n</div>\n<p><br /><a href=\"/demo/blog-engine-why-our-blog-engine/\">https://buttercms.com/demo/blog-engine-why-our-blog-engine/</a></p>\n<p></p>\n<h3>What's happening here?</h3>\n<p>If you're viewing this post from your website or command line, you've successfully made a request to&nbsp;the <a href=\"/docs/api\">Butter API</a>. If you haven't already, make sure you have our <a href=\"/docs/\">development guides</a> pulled up for step-by-step instructions on setting up Butter.</p>\n<h3>How does&nbsp;editing work?</h3>\n<p>Butter's WYSIWYG editor supports standard text formatting including headings, links, quotes, code, text alignment, and more. You can upload, crop, and resize images which are automatically hosted and delivered through a CDN (see below). You can also edit HTML directly when needed.</p>\n<p></p>\n<p style=\"text-align: center;\"><img src=\"https://cdn.buttercms.com/IkE12e3GTpe1xd1WJP2I\" alt=\"butter-blog-post.jpg\" width=\"784\" height=\"327\" style=\"display: block; margin-left: auto; margin-right: auto;\" /><em></em></p>\n<p style=\"text-align: center;\"><em>This image brought to you via CDN.</em></p>\n<p></p>\n<h3>Can I use Butter as a full CMS for&nbsp;things other than a&nbsp;blog?</h3>\n<p>Yes. Butter can be used as a full CMS for managing dynamic content and creating pages across your entire website or app. Check out our <a href=\"/docs/\">development guides</a> for step-by-step tutorials on setting this up.</p>",
        "summary": "This is an example blog post. Pretty neat huh?",
        "seo_title": "Example Post SEO Optimized Title",
        "meta_description": "This is our example blog posts SEO optimized meta description.",
        "featured_image_alt": "",
        "url": "https://django-starter-buttercms-test-fd598ac8705f.herokuapp.com/blog/example-post/",
        "scheduled": null,
        "featured_image": "https://cdn.buttercms.com/IkE12e3GTpe1xd1WJP2I",
        "author": {
          "bio": "",
          "slug": "mr-no-photo",
          "email": "",
          "title": "",
          "last_name": "Photo",
          "first_name": "Mr No",
          "facebook_url": "",
          "linkedin_url": "",
          "instagram_url": "",
          "pinterest_url": "",
          "profile_image": "",
          "twitter_handle": ""
        },
        "tags": [
          {
            "name": "Example Tag",
            "slug": "example-tag"
          }
        ],
        "categories": [
          {
            "name": "Example Category",
            "slug": "example-category"
          }
        ]
      }
    ]
  };

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private meta: Meta,
      public mTitle: Title)
  {}

  ngOnInit(): void {
    debugger;
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
      debugger;
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
          this.posts = this.postsData.data.filter(post =>
              post.title.toLowerCase().includes(searchTerm) ||
              post.summary.toLowerCase().includes(searchTerm) ||
              post.body.toLowerCase().includes(searchTerm)
          );

          this.pageLoading = false;
          this.setSeo();
      } else if (typeParam && !slugParam) {
          const foundPost = this.postsData.data.find(post => post.slug === typeParam);
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
                for (const post of this.postsData.data) {
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
            this.posts = this.postsData.data.filter(post =>
              post.categories.some((cat: any) => cat.slug === filterBy.category_slug)
            );
        } else if (filterBy.tag_slug) {
            this.posts = this.postsData.data.filter(post =>
              post.tags.some((tag: any) => tag.slug === filterBy.tag_slug)
            );
        } else {
            // Todos los posts
            this.posts = [...this.postsData.data];
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
