export interface DataBlog {
    meta: Meta;
    data: BlogPost[];
}

export interface Meta {
    next_page: number;
    previous_page?: number | null;
    count: number;
}

export interface BlogPost {
    status: string;
    created: string;
    updated: string;
    published: string;
    title: string;
    slug: string;
    body: string;
    summary: string;
    seo_title: string;
    meta_description: string;
    featured_image_alt: string;
    url: string;
    scheduled: null | string;
    featured_image: string | null;
    author: Author;
    tags: Tag[];
    categories: Category[];
}

export interface Author {
    bio: string;
    slug: string;
    email: string;
    title: string;
    last_name: string;
    first_name: string;
    facebook_url: string;
    linkedin_url: string;
    instagram_url: string;
    pinterest_url: string;
    profile_image: string;
    twitter_handle: string;
}

export interface Tag {
    name: string;
    slug: string;
}

export interface Category {
    name: string;
    slug: string;
}
