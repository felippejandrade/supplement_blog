import { useRoute, useLocation } from "wouter";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Star, Check, ExternalLink, AlertCircle } from "lucide-react";
import { categories, products, Product } from "../data/blogData";
import ProductFilters from "../components/ProductFilters";

export default function CategoryPage() {
  const [match, params] = useRoute("/categoria/:slug");
  const [, setLocation] = useLocation();
  
  // 1. Identificar a categoria atual
  const categorySlug = params?.slug;
  const currentCategory = useMemo(() => 
    categories.find(c => c.slug === categorySlug), 
  [categorySlug]);

  // 2. Estados dos Filtros
  const [minRating, setMinRating] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<string>("all");
  const [selectedBrand, setSelectedBrand] = useState<string>("all");

  // 3. Resetar filtros quando mudar de categoria
  useEffect(() => {
    setMinRating(0);
    setMaxPrice("all");
    setSelectedBrand("all");
  }, [categorySlug]);

  // 4. Lógica de Filtragem
  const filteredProducts = useMemo(() => {
    if (!currentCategory) return [];

    return products.filter(product => {
      // Filtro de Categoria (ID)
      if (product.category !== currentCategory.id) return false;

      // Filtro de Rating
      if (product.rating < minRating) return false;

      // Filtro de Preço (Limpeza da string "R$ 100,00" para number)
      const numericPrice = parseFloat(
        product.price.replace(/[^\d,]/g, '').replace(',', '.')
      );
      
      if (maxPrice !== "all") {
        if (maxPrice === "100" && numericPrice > 100) return false;
        if (maxPrice === "200" && numericPrice > 200) return false;
        if (maxPrice === "300" && numericPrice > 300) return false;
      }

      // Filtro de Marca
      if (selectedBrand !== "all" && product.brand !== selectedBrand) return false;

      return true;
    });
  }, [currentCategory, minRating, maxPrice, selectedBrand]);

  // 5. Extrair marcas disponíveis nesta categoria para o filtro
  const availableBrands = useMemo(() => {
    if (!currentCategory) return [];
    const catProducts = products.filter(p => p.category === currentCategory.id);
    return Array.from(new Set(catProducts.map(p => p.brand))).sort();
  }, [currentCategory]);

  // Se não encontrar a categoria
  if (!match || !currentCategory) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-white gap-4 bg-[#0A0A0A]">
        <AlertCircle size={48} className="text-emerald-500 opacity-50" />
        <h2 className="text-2xl font-bold">Categoria não encontrada</h2>
        <button onClick={() => setLocation("/")} className="text-slate-400 hover:text-emerald-500 underline">Voltar para Home</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F8FAFC] pb-20">
      {/* Hero Section da Categoria */}
      <div className="relative h-[300px] w-full overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-[#0A0A0A]/80 to-[#0A0A0A] z-10" />
        {/* Imagem de fundo com fallback */}
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10 }}
          src={currentCategory.image} 
          alt={currentCategory.name} 
          className="w-full h-full object-cover opacity-50"
        />
        
        <div className="absolute bottom-0 left-0 w-full p-8 z-20 container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 mb-2"
          >
            <div className="flex items-center gap-4">
              <span className="text-5xl md:text-6xl filter drop-shadow-lg">{currentCategory.icon}</span>
              <h1 className="text-4xl md:text-6xl font-black font-display tracking-tight text-white uppercase italic">
                {currentCategory.name}
              </h1>
            </div>
          </motion.div>
          <p className="text-slate-300 max-w-2xl text-lg font-light leading-relaxed border-l-2 border-emerald-500/50 pl-4 mt-4">
            {currentCategory.description}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 flex flex-col lg:flex-row gap-10">
        
        {/* Sidebar de Filtros */}
        <ProductFilters 
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          minRating={minRating}
          setMinRating={setMinRating}
          availableBrands={availableBrands}
          totalProducts={filteredProducts.length}
          onClear={() => {setMaxPrice("all"); setMinRating(0); setSelectedBrand("all");}}
        />

        {/* Grid de Produtos */}
        <main className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-slate-500 bg-zinc-900/20 rounded-3xl border border-white/5 border-dashed">
              <Filter size={48} className="mb-4 opacity-20" />
              <p className="text-lg font-medium">Nenhum produto encontrado.</p>
              <button 
                onClick={() => {setMaxPrice("all"); setMinRating(0); setSelectedBrand("all");}}
                className="mt-6 px-6 py-2 bg-emerald-500/10 text-emerald-500 rounded-full hover:bg-emerald-500 hover:text-white transition-all font-medium text-sm"
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

// Sub-componente ProductCard
function ProductCard({ product }: { product: Product }) {
  // Lógica para pegar o melhor link disponível
  const buyLink = product.affiliateLinks.mercadoLivre || product.affiliateLinks.amazon || product.affiliateLinks.shopee;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-emerald-500/40 hover:bg-zinc-900/60 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-square overflow-hidden bg-[#0F0F0F] p-8 flex items-center justify-center group-hover:bg-[#111] transition-colors">
        <img 
          src={product.image} 
          alt={product.name}
          className="object-contain w-full h-full drop-shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-2" 
        />
        <div className="absolute top-3 right-3 bg-black/80 backdrop-blur text-yellow-400 text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 border border-white/10 shadow-lg z-10">
          <Star size={10} className="fill-yellow-400" /> {product.rating}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <div className="text-emerald-500 text-[10px] font-mono font-bold uppercase tracking-widest border border-emerald-500/20 px-2 py-0.5 rounded bg-emerald-500/5 w-fit mb-2">
            {product.brand}
        </div>
        
        <h3 className="text-lg font-bold text-slate-100 mb-3 leading-snug group-hover:text-emerald-400 transition-colors">
          {product.name}
        </h3>
        
        <ul className="text-xs text-slate-400 mb-5 space-y-2 flex-1">
            {product.benefits.slice(0, 3).map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                    <Check size={14} className="mt-0.5 text-emerald-500 shrink-0" />
                    <span className="leading-tight">{benefit}</span>
                </li>
            ))}
        </ul>

        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between gap-4">
            <div className="flex flex-col">
                <span className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">Melhor Preço</span>
                <span className="text-xl font-bold font-mono text-white tracking-tight">{product.price}</span>
            </div>
            
            <a 
                href={buyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20 font-medium text-sm group-hover:shadow-emerald-500/20"
            >
                <span>Comprar</span>
                <ExternalLink size={16} />
            </a>
        </div>
      </div>
    </motion.div>
  );
}
