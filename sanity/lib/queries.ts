import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)] | order(_createdAt desc) {
    _id,
    title,
    shortDescription,
    'slug': slug.current,
    content,
    titleImage,
    _createdAt,
    _updatedAt,
    "author": author-> {
        ...,
        role->,
    },
    "category": category-> {
        ...,
    },
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    shortDescription,
    'slug': slug.current, 
    content,
    titleImage,
    _createdAt,
    _updatedAt,
    "author": author-> {
        ..., 
        role->,
    },
    "category": category->,
}`;

export const Latest_post_query = groq`
*[_type == "post" && defined(slug) && slug.current != $slug] | order(_createdAt desc) [0...3] {
    _id,
    title,
    shortDescription,
    'slug': slug.current,
    content,
    titleImage,
    _createdAt,
    _updatedAt,
    "author": author-> {
        ..., 
        role->,
    },
    "category": category->,
}`;

export const CATEGORIES_QUERY = groq`
  *[(_type == "category" && title == "Alla") || (_type == "category" && title != "Alla" && count(*[_type=="post" && references(^._id)]) > 0)] | order(title asc) {
    _id,
    title
  }
`;


export const SORT_WITH_CATEGORIES = groq`*[ _type == "category" && _id == $categoryId]{ ..., "posts": *[_type=="post" && references(^._id ) ] | order(_createdAt desc) {
    _id,
    title,
    shortDescription,
    'slug': slug.current,
    content,
    titleImage,
    _createdAt,
    _updatedAt,
    "author": author-> {
        ...,
        role->,
    },
    "category": category-> {
        ...,
    },
} }`;

