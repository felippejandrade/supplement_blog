import { Filter, Star } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Função utilitária local para classes (caso não tenha lib/utils)
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ProductFiltersProps {
  maxPrice: string;
  setMaxPrice: (value: string) => void;
  selectedBrand: string;
  setSelectedBrand: (value: string) => void;
  minRating: number;
  setMinRating: (value: number) => void;
  availableBrands: string[];
  totalProducts: number;
  onClear: () => void;
}

export default function ProductFilters({
  maxPrice,
  setMaxPrice,
  selectedBrand,
  setSelectedBrand,
  minRating,
  setMinRating,
  availableBrands,
  totalProducts,
  onClear
}: ProductFiltersProps) {
  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-8">
      <div className="sticky top-8 space-y-6 bg-zinc-900/50 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
        
        {/* Cabeçalho do Filtro */}
        <div className="flex items-center justify-between text-emerald-500 font-bold uppercase tracking-wider text-sm">
          <div className="flex items-center gap-2">
            <Filter size={16} /> Filtros
          </div>
          {(maxPrice !== "all" || selectedBrand !== "all" || minRating > 0) && (
            <button 
              onClick={onClear}
              className="text-[10px] underline hover:text-emerald-400 cursor-pointer"
            >
              Limpar
            </button>
          )}
        </div>

        {/* Filtro: Preço */}
        <div>
          <h3 className="font-semibold mb-3 text-sm text-slate-400">Preço Máximo</h3>
          <select 
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-lg p-2 text-sm text-slate-200 focus:border-emerald-500 focus:outline-none transition-colors appearance-none cursor-pointer hover:bg-white/5"
          >
            <option value="all">Qualquer preço</option>
            <option value="100">Até R$ 100,00</option>
            <option value="200">Até R$ 200,00</option>
            <option value="300">Até R$ 300,00</option>
          </select>
        </div>

        {/* Filtro: Marca */}
        <div>
          <h3 className="font-semibold mb-3 text-sm text-slate-400">Marca</h3>
          <div className="space-y-1 max-h-[250px] overflow-y-auto pr-2 custom-scrollbar">
            <button 
              onClick={() => setSelectedBrand("all")}
              className={cn(
                "block w-full text-left text-sm px-3 py-1.5 rounded-md transition-all duration-200",
                selectedBrand === "all" 
                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                  : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
              )}
            >
              Todas
            </button>
            {availableBrands.map(brand => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={cn(
                  "block w-full text-left text-sm px-3 py-1.5 rounded-md transition-all duration-200",
                  selectedBrand === brand 
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                    : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                )}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>

        {/* Filtro: Avaliação */}
        <div>
          <h3 className="font-semibold mb-3 text-sm text-slate-400">Avaliação Mínima</h3>
          <div className="flex gap-1 justify-between px-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setMinRating(star === minRating ? 0 : star)}
                className="focus:outline-none group p-1 transition-transform hover:scale-110"
                aria-label={`Filtrar por ${star} estrelas`}
              >
                <Star 
                  size={20} 
                  className={cn(
                    "transition-all duration-200",
                    star <= minRating 
                      ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" 
                      : "text-slate-700 group-hover:text-slate-500"
                  )} 
                />
              </button>
            ))}
          </div>
        </div>
        
        <div className="pt-4 border-t border-white/5 text-xs text-slate-600 font-mono text-center">
          {totalProducts} produtos encontrados
        </div>
      </div>
    </aside>
  );
}
