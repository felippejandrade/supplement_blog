/*
 * CategoryCard Component - Suplementação Pro
 * Design: Performance Tech - Image overlay with gradient
 * Features: Category image, name, description, hover effect
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Category } from "@/data/blogData";
import { motion } from "framer-motion";

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export default function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/categoria/${category.slug}`}
        className="group block relative overflow-hidden rounded-xl aspect-[4/3] hover-lift"
      >
        {/* Background Image */}
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 p-5 flex flex-col justify-end">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{category.icon}</span>
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {category.name}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {category.description}
          </p>
          <div className="flex items-center gap-1.5 text-sm text-primary font-medium">
            <span>Ver produtos</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Glow Effect on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-primary/5" />
        </div>
      </Link>
    </motion.div>
  );
}
