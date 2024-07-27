import { useEffect } from "react";

export function useMetaTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export function useMetaDescription(description) {
  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }, [description]);
}

export function useOGTags({ title, description, image }) {
  useEffect(() => {
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    const ogImage = document.querySelector('meta[property="og:image"]');

    if (ogTitle) ogTitle.setAttribute("content", title);
    if (ogDescription) ogDescription.setAttribute("content", description);
    if (ogImage) ogImage.setAttribute("content", image);
  }, [title, description, image]);
}
