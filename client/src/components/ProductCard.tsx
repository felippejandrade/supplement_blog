/*
 * ProductCard Component - Suplementação Pro
 * Design: Performance Tech - Glassmorphism with affiliate CTAs
 * Features: Product image, rating, benefits, affiliate buttons
 */

import { Star, ExternalLink, ShoppingCart } from "lucide-react";
import { Product } from "@/data/blogData";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "text-yellow-500 fill-yellow-500"
            : i < rating
            ? "text-yellow-500 fill-yellow-500/50"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  if (compact) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="flex gap-4 p-4 bg-card border border-border rounded-xl hover-lift"
      >
        <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-primary font-medium mb-0.5">{product.brand}</p>
          <h4 className="text-sm font-semibold text-foreground line-clamp-1 mb-1">
            {product.name}
          </h4>
          <div className="flex items-center gap-1 mb-2">
            {renderStars(product.rating)}
            <span className="text-xs text-muted-foreground ml-1">
              ({product.rating})
            </span>
          </div>
          <p className="text-sm font-bold text-primary">{product.price}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group bg-card border border-border rounded-xl overflow-hidden hover-lift"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-md">
            {product.rating} ★
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <p className="text-xs text-primary font-medium uppercase tracking-wider mb-1">
          {product.brand}
        </p>
        <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {renderStars(product.rating)}
          <span className="text-sm text-muted-foreground ml-1">
            ({product.rating})
          </span>
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.benefits.slice(0, 3).map((benefit, index) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-secondary text-xs text-muted-foreground rounded-md"
            >
              {benefit}
            </span>
          ))}
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-foreground mb-4">{product.price}</p>

        {/* Affiliate Buttons */}
        <div className="space-y-2">
          {product.affiliateLinks.amazon && (
            <a
              href={product.affiliateLinks.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#FF9900] hover:bg-[#FF9900]/90 text-black font-semibold rounded-lg transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              Comprar na Amazon
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {product.affiliateLinks.mercadoLivre && (
            <a
              href={product.affiliateLinks.mercadoLivre}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#FFE600] hover:bg-[#FFE600]/90 text-black font-semibold rounded-lg transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              Ver no Mercado Livre
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {product.affiliateLinks.shopee && (
            <a
              href={product.affiliateLinks.shopee}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#EE4D2D] hover:bg-[#EE4D2D]/90 text-white font-semibold rounded-lg transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              Ver na Shopee
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
