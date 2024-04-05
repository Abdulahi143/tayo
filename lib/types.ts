
type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
};

export interface SafePost extends Base {
    author: Author;
    body: Block[];
    content: string;
    category: Category;
    titleImage: Image;
    currentSlug: Slug;
    title: string;
    shortDescription: string;
    role: Role;
}

export interface SafeSinglePost extends Base {
    author: Author;
    body: Block[];
    content: any;
    category: Category;
    titleImage: Image;
    currentSlug: Slug;
    title: string;
    shortDescription: string;
}


interface Author extends Base {
    description: string;
    image: Image;
    name: string;
    slug: Slug;    
    role: Role;
}


interface Image {
    _type: "image";
    asset: Reference;
}

interface Reference {
    _type: "slug";
    current: string;
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block {
    _key: string;
    _type: "block";
    children: Span[];
    markDefs: any[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _key: string;
    _type: "span";
    marks: string[];
    text: string;
}

interface Category extends Base {
    description: string;
    title: string;
}

interface Role extends Base { // Define the Role interface
    title: string;
}


// export interface simpleBlogCard {
//     title: string;
//     smallDescription: string;
//     currentSlug: string;
//     titleImage: any;
//   }
  
//   export interface fullBlog {
//     currentSlug: string;
//     title: string;
//     content: any;
//     titleImage: any;
//   }