export interface DataMain {
    data: {
        slug: string;
        name: string;
        published: string;
        updated: string;
        scheduled: string | null;
        status: string;
        page_type: string;
        fields: {
            seo: {
                title: string;
                description: string;
            };
            body: Array<{
                type: string;
                fields: any; // Puedes definir un tipo más específico si lo necesitas
            }>;
        };
    };
}

export interface Seo {
    title: string;
    description: string;
}

export interface BodyField {
    type: string;
    fields: any; // Cambia `any` por un tipo más específico si lo conoces
}

export interface PageFields {
    seo: Seo;
    body: BodyField[];
}
