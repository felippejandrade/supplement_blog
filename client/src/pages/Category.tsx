/*
 * Category Page - Suplementação Pro
 * Design: Performance Tech - Category-specific content
 * Features: Category header, posts grid, products, sidebar
 */

import { useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import { categories, blogPosts, products } from "@/data/blogData";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const categoryPosts = blogPosts.filter((post) => post.category === slug);
  const categoryProducts = products.filter((product) => product.category === slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Categoria não encontrada
          </h1>
          <p className="text-muted-foreground mb-8">
            A categoria que você procura não existe.
          </p>
          <Link href="/" className="btn-affiliate">
            Voltar ao Início
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Category Hero */}
      <section className="relative pt-20">
        <div className="absolute inset-0 h-80">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        <div className="container relative z-10 pt-16 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl">{category.icon}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {category.name}
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {categoryPosts.length} artigos
              </span>
              <span className="px-3 py-1 bg-secondary text-muted-foreground text-sm font-medium rounded-full">
                {categoryProducts.length} produtos
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      {categoryProducts.length > 0 && (
        <section className="py-12 bg-card/30 border-y border-border">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-foreground">
                Produtos Recomendados
              </h2>
              <p className="text-muted-foreground mt-1">
                Os melhores {category.name.toLowerCase()} selecionados para você
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Posts Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Posts Grid */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-foreground">
                  Artigos sobre {category.name}
                </h2>
                <p className="text-muted-foreground mt-1">
                  Guias, análises e dicas para você
                </p>
              </motion.div>

              {categoryPosts.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-6">
                  {categoryPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 bg-card rounded-xl border border-border">
                  <p className="text-muted-foreground">
                    Ainda não há artigos nesta categoria.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Volte em breve para novos conteúdos!
                  </p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
