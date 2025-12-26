/*
 * Sidebar Component - Suplementação Pro
 * Design: Performance Tech - Affiliate banners and popular posts
 * Features: Sticky sidebar, affiliate banners, category links, newsletter
 */

import { Link } from "wouter";
import { TrendingUp, Tag, Mail, ExternalLink } from "lucide-react";
import { categories, blogPosts, products } from "@/data/blogData";
import ProductCard from "./ProductCard";

export default function Sidebar() {
  const popularPosts = blogPosts.slice(0, 3);
  const featuredProducts = products.slice(0, 2);

  return (
    <aside className="space-y-6">
      {/* Featured Products Banner */}
      <div className="bg-card border border-border rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Produtos em Destaque</h3>
        </div>
        <div className="space-y-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
        <Link
          href="/categorias"
          className="flex items-center justify-center gap-2 w-full mt-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-colors"
        >
          Ver todos os produtos
        </Link>
      </div>

      {/* Affiliate Banner - Amazon */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#232F3E] to-[#131921] p-5 border border-[#FF9900]/30">
        <div className="relative z-10">
          <p className="text-[#FF9900] font-bold text-sm mb-1">OFERTAS AMAZON</p>
          <h4 className="text-white font-bold text-lg mb-2">
            Até 40% OFF em Suplementos
          </h4>
          <p className="text-gray-300 text-sm mb-4">
            Confira as melhores ofertas em whey, creatina e mais!
          </p>
          <a
            href="#amazon-ofertas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF9900] hover:bg-[#FF9900]/90 text-black font-semibold rounded-lg transition-colors text-sm"
          >
            Ver Ofertas
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#FF9900]/10 rounded-full blur-2xl" />
      </div>

      {/* Categories */}
      <div className="bg-card border border-border rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Tag className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Categorias</h3>
        </div>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/categoria/${category.slug}`}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors group"
            >
              <span className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                <span>{category.icon}</span>
                {category.name}
              </span>
              <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                {blogPosts.filter((p) => p.category === category.slug).length}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      <div className="bg-card border border-border rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Posts Populares</h3>
        </div>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/post/${post.slug}`}
              className="flex gap-3 group"
            >
              <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs text-primary font-medium">
                  #{index + 1} Mais lido
                </span>
                <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Affiliate Banner - Mercado Livre */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#FFE600] to-[#FFC107] p-5">
        <div className="relative z-10">
          <p className="text-black/70 font-bold text-sm mb-1">MERCADO LIVRE</p>
          <h4 className="text-black font-bold text-lg mb-2">
            Frete Grátis em Suplementos
          </h4>
          <p className="text-black/70 text-sm mb-4">
            Aproveite o frete grátis para todo o Brasil!
          </p>
          <a
            href="#ml-ofertas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-black hover:bg-black/90 text-white font-semibold rounded-lg transition-colors text-sm"
          >
            Conferir
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/20 rounded-full blur-2xl" />
      </div>

      {/* Newsletter */}
      <div className="bg-card border border-border rounded-xl p-5">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Newsletter</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Receba dicas exclusivas e ofertas no seu email.
        </p>
        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Seu email"
            className="w-full px-4 py-2.5 bg-secondary border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
          <button type="submit" className="w-full btn-affiliate text-sm py-2.5">
            Inscrever
          </button>
        </form>
      </div>
    </aside>
  );
}
