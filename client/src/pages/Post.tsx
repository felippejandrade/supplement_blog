/*
 * Post Page - Suplementação Pro
 * Design: Performance Tech - Article layout with affiliate integration
 * Features: Full article, author info, related products, share buttons
 */

import { useParams } from "wouter";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import { blogPosts, categories, authorInfo } from "@/data/blogData";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import { Streamdown } from "streamdown";
import { toast } from "sonner";

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Artigo não encontrado
          </h1>
          <p className="text-muted-foreground mb-8">
            O artigo que você procura não existe ou foi removido.
          </p>
          <Link href="/" className="btn-affiliate">
            Voltar ao Início
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const category = categories.find((c) => c.slug === post.category);
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    toast.success("Link copiado!");
    setTimeout(() => setCopied(false), 2000);
  };

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Article Header */}
      <section className="relative pt-20">
        <div className="absolute inset-0 h-[50vh]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </div>

        <div className="container relative z-10 pt-16 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <Link
              href={`/categoria/${post.category}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para {category?.name}
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <Link
                href={`/categoria/${post.category}`}
                className="category-badge"
              >
                {category?.icon} {category?.name}
              </Link>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime} de leitura
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-secondary text-xs text-muted-foreground rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded-xl p-6 md:p-8"
              >
                {/* Article Body */}
                <div className="prose prose-invert prose-emerald max-w-none">
                  <Streamdown>{post.content}</Streamdown>
                </div>

                {/* Products in Article */}
                {post.products && post.products.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-border">
                    <h3 className="text-xl font-bold text-foreground mb-6">
                      Produtos Mencionados
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {post.products.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          compact
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <Share2 className="w-5 h-5 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        Compartilhar:
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-secondary hover:bg-[#1877F2] flex items-center justify-center transition-colors group"
                      >
                        <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${post.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-secondary hover:bg-[#1DA1F2] flex items-center justify-center transition-colors group"
                      >
                        <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                      </a>
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${post.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-secondary hover:bg-[#0A66C2] flex items-center justify-center transition-colors group"
                      >
                        <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                      </a>
                      <button
                        onClick={handleCopyLink}
                        className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary flex items-center justify-center transition-colors group"
                      >
                        {copied ? (
                          <Check className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                        ) : (
                          <Copy className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Author Box */}
                <div className="mt-8 p-6 bg-secondary/50 rounded-xl">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img
                      src={authorInfo.image}
                      alt={authorInfo.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div>
                      <p className="text-sm text-primary font-medium mb-1">
                        Escrito por
                      </p>
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {authorInfo.name}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-3">
                        {authorInfo.bio}
                      </p>
                      <Link
                        href="/sobre"
                        className="inline-flex items-center gap-1 text-sm text-primary font-medium mt-2 hover:underline"
                      >
                        Ver perfil completo
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">
                    Artigos Relacionados
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        href={`/post/${relatedPost.slug}`}
                        className="group flex gap-4 p-4 bg-card border border-border rounded-xl hover-lift"
                      >
                        <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {relatedPost.readTime}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
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
