import { motion } from "framer-motion";
import { Play, Monitor, Users, Code, Briefcase } from "lucide-react";

const galleryItems = [
  {
    icon: Monitor,
    title: "Design Moderne",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    icon: Users,
    title: "Collaboration",
    color: "from-green-500/20 to-teal-500/20",
  },
  {
    icon: Code,
    title: "Développement",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: Briefcase,
    title: "Conseil",
    color: "from-accent/20 to-accent/10",
  },
];

const GalleryVideo = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 dark:to-secondary/5" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[120px]" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-accent font-medium text-sm uppercase tracking-wider mb-4">
            Notre univers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5">
            La Vision <span className="text-gradient-gold">Sen'Optima</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez notre approche et notre environnement de travail.
          </p>
        </motion.div>

        {/* Video + Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video lg:row-span-2 rounded-3xl overflow-hidden glass-premium group cursor-pointer"
          >
            {/* Placeholder background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary dark:from-primary/60 dark:to-primary/80" />
            
            {/* Pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent flex items-center justify-center shadow-gold group-hover:glow-gold transition-all duration-300"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-accent-foreground ml-1" fill="currentColor" />
              </motion.div>
            </div>

            {/* Video label */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-white/90 font-heading font-bold text-lg">
                Présentation de Sen'Optima
              </p>
              <p className="text-white/60 text-sm">
                Vidéo à venir
              </p>
            </div>
          </motion.div>

          {/* Bento Gallery Grid */}
          <div className="grid grid-cols-2 gap-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -3 }}
                className="aspect-square rounded-2xl glass-card hover:glow-gold-subtle transition-all duration-300 flex flex-col items-center justify-center p-6 text-center group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-foreground" />
                </div>
                <p className="font-heading font-semibold text-foreground">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GalleryVideo;
