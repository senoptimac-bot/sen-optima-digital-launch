import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { SEO_CONFIG } from "@/config/seo.config";
import BackButton from "@/components/BackButton";

const BlogPage = () => {
  const seo = SEO_CONFIG.blog;

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.canonicalPath}
        noIndex={seo.noIndex}
      />

      <div className="min-h-screen bg-background flex items-center">
        <div className="container max-w-2xl pt-32 pb-16 md:pt-0 md:pb-0">
          <BackButton />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-accent mb-6 inline-block">Blog</span>
            <h1 className="text-headline text-foreground mb-6">
              Bientôt <span className="italic text-accent">disponible.</span>
            </h1>
            <p className="text-body-lg text-muted-foreground leading-relaxed max-w-xl">
              Nous préparons des analyses et des repères sur la mobilité internationale et le
              développement des entreprises. Revenez bientôt.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
