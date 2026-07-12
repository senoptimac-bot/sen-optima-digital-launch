import { ImgHTMLAttributes } from "react";

interface SiteImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  /** Required: describe what the image shows, not just repeat the section title. */
  alt: string;
  /** Set true only for the above-the-fold / LCP image on a page. */
  priority?: boolean;
}

/**
 * Thin wrapper around <img> with sane defaults for this Vite app (no next/image here).
 * Lazy + async by default; pass priority for the one LCP image per page (e.g. the Hero).
 */
const SiteImage = ({ src, alt, priority = false, loading, decoding, ...rest }: SiteImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : loading ?? "lazy"}
      decoding={decoding ?? "async"}
      {...rest}
    />
  );
};

export default SiteImage;
