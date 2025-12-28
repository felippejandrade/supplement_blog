/*
 * Home Page - Suplementação Pro
 * Design: Performance Tech - Dark premium with emerald accents
 * Features: Hero section, featured posts, categories, sidebar
 */

import { ArrowRight, Zap, Shield, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import CategoryCard from "@/components/CategoryCard";
import Sidebar from "@/components/Sidebar";
import { blogPosts, categories } from "@/data/blogData";

const stats = [
  { icon: Users, value: "50K+", label: "Leitores mensais" },
  { icon: TrendingUp, value: "200+", label: "Artigos publicados" },
  { icon: Shield, value: "100%", label: "Conteúdo verificado" },
  { icon: Zap, value: "5★", label: "Avaliação média" },
];

export default function Home() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-banner.jpg"
            alt="Fitness e Suplementação"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="absolute inset-0 mesh-gradient opacity-60" />
        </div>

        <div className="container relative z-10 pt-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium mb-6">
                <Zap className="w-4 h-4" />
                Seu guia de suplementação
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
            >
              Maximize seus{" "}
              <span className="text-gradient">resultados</span> com a
              suplementação certa
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Descubra os melhores suplementos para seus objetivos fitness.
              Análises honestas, comparativos detalhados e recomendações
              baseadas em ciência para você alcançar o próximo nível.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="https://mercadolivre.com/sec/1Dit8v5" className="btn-affiliate">
                Explorar Suplementos
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/sobre"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg border border-border hover:bg-secondary transition-colors"
              >
                Conhecer o Blog
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-y border-border bg-card/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-end justify-between mb-10"
          >
            <div>
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Em Destaque
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Artigos Populares
              </h2>
            </div>
            <Link
              href="/categorias"
              className="hidden md:flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Ver todos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="space-y-6">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} featured />
            ))}
          </div>

          <Link
            href="/categorias"
            className="md:hidden flex items-center justify-center gap-2 mt-8 text-primary font-medium"
          >
            Ver todos os artigos
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-card/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              Explore
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Categorias de Suplementos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Navegue pelas categorias e encontre os melhores suplementos para
              cada objetivo, seja ganho de massa, emagrecimento ou saúde geral.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts + Sidebar Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Últimas Publicações
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Posts Grid */}
            <div className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-6">
                {recentPosts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-card/50 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Pronto para transformar seus resultados?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore nossa seleção de suplementos recomendados e comece sua
              jornada para uma versão mais forte e saudável de você mesmo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/categorias" className="btn-affiliate">
                Ver Suplementos Recomendados
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg border border-border hover:bg-secondary transition-colors"
              >
                Fale Conosco
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
