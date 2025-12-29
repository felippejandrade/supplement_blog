// Blog Data - Suplementação Pro
// Design Philosophy: Performance Tech - Data-driven, premium dark aesthetic

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  rating: number;
  image: string;
  affiliateLinks: {
    amazon?: string;
    mercadoLivre?: string;
    shopee?: string;
  };
  benefits: string[];
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
  products?: Product[];
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Whey Protein",
    slug: "whey-protein",
    description: "Proteínas de alta qualidade para construção muscular e recuperação pós-treino.",
    image: "/images/category-whey.jpg",
    icon: "💪"
  },
  {
    id: "2",
    name: "Creatina",
    slug: "creatina",
    description: "O suplemento mais estudado para força, potência e ganho de massa muscular.",
    image: "/images/category-creatine.jpg",
    icon: "⚡"
  },
  {
    id: "3",
    name: "Pré-Treino",
    slug: "pre-treino",
    description: "Energia explosiva e foco mental para treinos intensos e produtivos.",
    image: "/images/category-preworkout.jpg",
    icon: "🔥"
  },
  {
    id: "4",
    name: "Emagrecedores",
    slug: "emagrecedores",
    description: "Termogênicos e suplementos para acelerar o metabolismo e queimar gordura.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
    icon: "🎯"
  },
  {
    id: "5",
    name: "Vitaminas e Minerais",
    slug: "vitaminas-minerais",
    description: "Micronutrientes essenciais para saúde, imunidade e performance otimizada.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop",
    icon: "🌟"
  }
];

export const products: Product[] = [
  // Whey Proteins
  {
    id: "p1",
    name: "Whey Protein Isolado Gold Standard",
    brand: "Optimum Nutrition",
    price: "R$ 289,90",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_ON",
      mercadoLivre: "#ml-whey-on",
      shopee: "#shopee-whey-on"
    },
    benefits: ["25g de proteína por dose", "Baixo carboidrato", "Absorção rápida", "Sabores premium"],
    category: "whey-protein"
  },
  {
    id: "p2",
    name: "Whey Protein Concentrado",
    brand: "Growth Supplements",
    price: "R$ 149,90",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_GROWTH_WHEY",
      mercadoLivre: "#ml-whey-growth"
    },
    benefits: ["24g de proteína", "Custo-benefício", "Fabricação nacional", "Diversos sabores"],
    category: "whey-protein"
  },
  {
    id: "p3",
    name: "ISO Whey Triple Zero",
    brand: "Integralmédica",
    price: "R$ 219,90",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_INTEGRAL",
      mercadoLivre: "#ml-iso-integral",
      shopee: "#shopee-iso-integral"
    },
    benefits: ["Zero açúcar", "Zero lactose", "Zero glúten", "27g proteína"],
    category: "whey-protein"
  },

  // Adicione estes 4 objetos dentro do array de produtos em blogData.ts

{
  id: "p18",
  name: "Nutri Whey Protein - Chocolate",
  brand: "Integralmédica",
  price: "R$ 46,81",
  rating: 4.7,
  image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&auto=format&fit=crop",
  affiliateLinks: {
    amazon: "https://amzn.to/3IQFJRp",
    mercadoLivre: "#seu-link-nutri-whey-ml"
  },
  benefits: ["1kg tamanho", "Sabor chocolate premium", "Ótimo custo-benefício", "Absorção rápida"],
  category: "whey-protein"
},

{
  id: "p19",
  name: "Whey Protein Isolado Premium",
  brand: "Atlhetica Nutrition",
  price: "R$ 86,45",
  rating: 4.6,
  image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=400&auto=format&fit=crop",
  affiliateLinks: {
    amazon: "https://amzn.to/3K9hVvG",
    mercadoLivre: "#seu-link-atlhetica-ml"
  },
  benefits: ["900g isolado", "Pureza 90%+", "Baixíssimo carboidrato", "Rápida absorção"],
  category: "whey-protein"
},

{
  id: "p20",
  name: "Whey Protein Concentrado - Max Titanium",
  brand: "Max Titanium",
  price: "R$ 83,90",
  rating: 4.8,
  image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&auto=format&fit=crop",
  affiliateLinks: {
    amazon: "https://amzn.to/3IZqnkh",
    mercadoLivre: "#seu-link-maxtitan-ml"
  },
  benefits: ["1kg concentrado", "Qualidade premium", "Ótimo sabor", "Custo-benefício excelente"],
  category: "whey-protein"
},

{
  id: "p21",
  name: "Gold Standard Whey - Optimum Nutrition",
  brand: "Optimum Nutrition",
  price: "R$ 135,00",
  rating: 4.9,
  image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&auto=format&fit=crop",
  affiliateLinks: {
    amazon: "https://amzn.to/LINK_GSW",
    mercadoLivre: "#seu-link-gstandard-ml"
  },
  benefits: ["2lbs importado", "Qualidade mundial", "24g proteína por dose", "Múltiplos sabores"],
  category: "whey-protein"
}
  // Creatinas
  {
    id: "p4",
    name: "Creatina Monohidratada 250g - Sem sabor em Pó",
    brand: "Growth Supplements",
    price: "R$ 62,90",
    rating: 4.8,
    image: "/images/creatina-growth-250g-1.png",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_GS250",
      mercadoLivre: "https://mercadolivre.com/sec/1Dit8v5"
    },
    benefits: ["250g puro", "Sem sabor", "Monohidratada", "Fácil dissolução"],
    category: "creatina"
  },
  {
    id: "p5",
    name: "Creatina Creapure 250g - Sem Sabor em Pó",
    brand: "Growth Supplements",
    price: "R$ 73,90",
    rating: 5.0,
    image: "/images/creatina-creapure-250g-1.png",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_CREAPURE",
      mercadoLivre: "https://mercadolivre.com/sec/2DpGskb"
    },
    benefits: ["Creapure original", "Pureza garantida", "250g", "Melhor absorção"],
    category: "creatina"
  },
  {
    id: "p11",
    name: "Creatina Monohidratada 300g",
    brand: "Dark Lab",
    price: "R$ 79,90",
    rating: 4.7,
    image: "/images/creatina-dark-lab-300g.jpg",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_DARKLAB",
      mercadoLivre: "https://mercadolivre.com/sec/2uaEdiJ"
    },
    benefits: ["300g puro", "100% monohidratada", "Sem aditivos", "Rendimento superior"],
    category: "creatina"
  },

  {
    id: "p15",
    name: "02 Potes da Creatina 300g - 100% Pura Monohidratada",
    brand: "3VS Nutrition",
    price: "R$ 89,90",
    rating: 5.0,
    image: "/images/creatina-3vs-nutrition-1.png",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_3VS",
      mercadoLivre: "#seu-link-3vs-nutrition"
    },
    benefits: ["100% pura monohidratada", "2 potes de 300g", "Testada em laboratório", "Pureza certificada 100.60%"],
    category: "creatina"
  },
  {
    id: "p16",
    name: "Creatina Monohidratada 1Kg Soldiers Nutrition 100% Pura Importada",
    brand: "Soldiers Nutrition",
    price: "R$ 129,90",
    rating: 4.9,
    image: "/images/creatina-soldiers-1kg-3.jpg",
    affiliateLinks: {
      amazon: "https://amzn.to/49t4Uiz",
      mercadoLivre: "https://mercadolivre.com/sec/2f1dzdb"
    },
    benefits: ["1kg puro importado", "100% monohidratada", "Micronizada", "Sabor natural"],
    category: "creatina"
  },
  {
    id: "p17",
    name: "Creatina Ronnie Coleman 100% Pura 525g Sache Original",
    brand: "Ronnie Coleman",
    price: "R$ 59,95",
    rating: 5.0,
    image: "/images/creatina-ronnie-coleman-525g.jpg",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_RC",
      mercadoLivre: "https://mercadolivre.com/sec/2fA67MY"
    },
    benefits: ["525g puro original", "100% monohidratada", "Sem sabor", "Importado USA"],
    category: "creatina"
  },
  // Pré-treinos
  {
    id: "p6",
    name: "C4 Original",
    brand: "Cellucor",
    price: "R$ 179,90",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_C4",
      mercadoLivre: "#ml-c4"
    },
    benefits: ["150mg cafeína", "Beta-alanina", "Creatina nitrato", "Energia explosiva"],
    category: "pre-treino"
  },
  {
    id: "p7",
    name: "Évora PW",
    brand: "Darkness",
    price: "R$ 149,90",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_EVORA",
      mercadoLivre: "#ml-evora",
      shopee: "#shopee-evora"
    },
    benefits: ["300mg cafeína", "Foco extremo", "Vasodilatação", "Nacional"],
    category: "pre-treino"
  },
    {
    id: "p8",
    name: "BCAA 2:1:1 1kg",
    brand: "Integral Médica",
    price: "R$ 89,90",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd90e19?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_BCAA",
      mercadoLivre: "#ml-bcaa-integral",
      shopee: "#shopee-bcaa-integral"
    },
    benefits: ["Recuperação muscular", "Redução de fadiga", "Aumento de energia", "Síntese protéica"],
    category: "pre-treino",
  },
    {
    id: "p9",
    name: "Glutamina Monohidratada 1kg",
    brand: "Pro Size",
    price: "R$ 69,90",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1614168692292-7ac56d7f7f1e?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_GLUTA",
      mercadoLivre: "#ml-glutamina-pro",
      shopee: "#shopee-glutamina-pro"
    },
    benefits: ["Acelera recuperação", "Aumenta mássa muscular", "Melhora imunidade", "Reduz catabolismo"],
    category: "pre-treino",
  },
    {
    id: "p10",
    name: "Beta Alanina 250g",
    brand: "Probiótica",
    price: "R$ 79,90",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_BETA",
      mercadoLivre: "#ml-beta-alanina",
      shopee: "#shopee-beta-alanina"
    },
    benefits: ["Aumenta resistência", "Reduz fadiga muscular", "Melhora performance", "Maior força"],
    category: "pre-treino",
  },
    {
    id: "p11",
    name: "Taurina 1kg",
    brand: "Arnold Nutrition",
    price: "R$ 64,90",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1576091160399-f2b6eb5a0e91?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "#amazon-taurina-arnold",
      mercadoLivre: "#ml-taurina-arnold",
      shopee: "#shopee-taurina-arnold"
    },
    benefits: ["Aumenta energia", "Melhora concentração", "Reduz fadiga", "Melhor pump"],
    category: "pre-treino",
  },
    {
    id: "p12",
    name: "Cafeína 200 comprimidos",
    brand: "Power Supplements",
    price: "R$ 29,90",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd90e19?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_CAF",
      mercadoLivre: "#ml-cafeina-power",
      shopee: "#shopee-cafeina-power"
    },
    benefits: ["Aumenta foco", "Melhora energia", "Acelera metabolismo", "Queima de gordura"],
    category: "pre-treino",
  },
    {
    id: "p13",
    name: "Ciénagaáda 1kg",
    brand: "Optimum Nutrition",
    price: "R$ 119,90",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_CITRULINA",
      mercadoLivre: "#ml-citrulina-optimum",
      shopee: "#shopee-citrulina-optimum"
    },
    benefits: ["Vasodilatador natural", "Aumenta pump", "Melhora irrigação muscular", "Melhor performance"],
    category: "pre-treino",
  },
    {
    id: "p14",
    name: "Nitóxido Nórico Booster 600g",
    brand: "Bodybuilders",
    price: "R$ 159,90",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd90e19?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "https://amzn.to/LINK_NITRICO",
      mercadoLivre: "#ml-nitrico-bodybuilders",
      shopee: "#shopee-nitrico-bodybuilders"
    },
    benefits: ["Pump extraordinário", "Aumento de força", "Melhor vascularity", "Estimula NO"],
    category: "pre-treino",
  },
    {
    id: "p15",
    name: "Creatina Monohidratada 1kg Max Titanium",
    brand: "Max Titanium",
    price: "R$ 99,90",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd90e19?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "#amazon-creatina-max",
      mercadoLivre: "#ml-creatina-max",
      shopee: "#shopee-creatina-max"
    },
    benefits: ["Aumento de força", "Ganho de mássa muscular", "Melhora performance", "Aumenta ATP"],
    category: "pre-treino",
  },
    {
    id: "p16",
    name: "Whey Protein Isolado 1kg",
    brand: "Probiotica",
    price: "R$ 149,90",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd90e19?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "#amazon-whey-isolado",
      mercadoLivre: "#ml-whey-isolado",
      shopee: "#shopee-whey-isolado"
    },
    benefits: ["Alto teor de proteína", "Rápida absorção", "Baixo teor de gordura", "Ganho muscular"],
    category: "pre-treino",
  },
    {
    220
      ,
    name: "Malto 1kg",
    brand: "Success Nutrition",
    price: "R$ 39,90",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "#amazon-malto-success",
      mercadoLivre: "#ml-malto-success",
      shopee: "#shopee-malto-success"
    },
    benefits: ["Reposição de energia", "Rápida absorção", "Aumenta insulina", "Melhora performance"],
    category: "pre-treino",
  },
  // Emagrecedores
  {
    id: "p8",
    name: "Lipo 6 Black Ultra Concentrado",
    brand: "Nutrex",
    price: "R$ 199,90",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "#amazon-lipo6",
      mercadoLivre: "#ml-lipo6"
    },
    benefits: ["Termogênico potente", "Supressor de apetite", "Energia duradoura", "60 cápsulas"],
    category: "emagrecedores"
  },
  // Vitaminas
  {
    id: "p9",
    name: "Vitamina D3 2000UI",
    brand: "Vitafor",
    price: "R$ 49,90",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "#amazon-vitd",
      mercadoLivre: "#ml-vitd",
      shopee: "#shopee-vitd"
    },
    benefits: ["Imunidade", "Saúde óssea", "60 cápsulas", "Alta absorção"],
    category: "vitaminas-minerais"
  },
  {
    id: "p10",
    name: "Ômega 3 EPA DHA",
    brand: "Essential Nutrition",
    price: "R$ 89,90",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1577401239170-897942555fb3?w=400&auto=format&fit=crop",
    affiliateLinks: {
      amazon: "#amazon-omega",
      mercadoLivre: "#ml-omega"
    },
    benefits: ["1000mg por cápsula", "Coração saudável", "Anti-inflamatório", "120 cápsulas"],
    category: "vitaminas-minerais"
  }
];

export const
