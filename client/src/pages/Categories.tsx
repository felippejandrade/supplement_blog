/*
 * Categories Page - Suplementação Pro
 * Design: Performance Tech - All categories overview
 * Features: Category grid, featured products
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import { categories, products, blogPosts } from "@/data/blogData";
import { motion } from "framer-motion";
import { Grid3X3, Package } from "lucide-react";

export default function Categories() {
  // Get top rated products
  const topProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              Explore
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Categorias de{" "}
              <span className="text-gradient">Suplementos</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Navegue por todas as categorias e encontre os melhores suplementos
              para cada objetivo fitness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Grid3X3 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Todas as Categorias
              </h2>
              <p className="text-sm text-muted-foreground">
                {categories.length} categorias disponíveis
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>

          {/* Category Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category) => {
              const postCount = blogPosts.filter(
                (p) => p.category === category.slug
              ).length;
              const productCount = products.filter(
                (p) => p.category === category.slug
              ).length;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="p-4 bg-card border border-border rounded-xl text-center"
                >
                  <span className="text-2xl mb-2 block">{category.icon}</span>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {postCount} artigos • {productCount} produtos
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Products Section */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Package className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Produtos Mais Bem Avaliados
              </h2>
              <p className="text-sm text-muted-foreground">
                Os suplementos com as melhores avaliações
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* All Products by Category */}
      {categories.map((category) => {
        const categoryProducts = products.filter(
          (p) => p.category === category.slug
        );

        if (categoryProducts.length === 0) return null;

        return (
          <section key={category.id} className="py-12 border-t border-border">
            <div className="container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-6"
              >
                <span className="text-3xl">{category.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    {category.name}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {categoryProducts.length} produtos disponíveis
                  </p>
                </div>
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <Footer />
    </div>
  );
}
