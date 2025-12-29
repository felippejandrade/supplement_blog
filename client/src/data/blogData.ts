135// Blog Data - Suplementação Pro
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
      amazon: "#amazon-whey-on",
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
      amazon: "#amazon-whey-growth",
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
      amazon: "#amazon-iso-integral",
      mercadoLivre: "#ml-iso-integral",
      shopee: "#shopee-iso-integral"
    },
    benefits: ["Zero açúcar", "Zero lactose", "Zero glúten", "27g proteína"],
    category: "whey-protein"
  },
  // Creatinas
  {
    id: "p4",
    name: "Creatina Monohidratada 250g - Sem sabor em Pó",
    brand: "Growth Supplements",
    price: "R$ 62,90",
    rating: 4.8,
    image: "/images/creatina-growth-250g-1.png",
    affiliateLinks: {
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
      mercadoLivre: "https://mercadolivre.com/sec/2uaEdiJ"
    },
    benefits: ["300g puro", "100% monohidratada", "Sem aditivos", "Rendimento superior"],
    category: "creatina"
  },
  {
    id: "p12",
    name: "Creatina Monohidratada Pura",
    brand: "Dark Lab",
    price: "R$ 99,90",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=400&auto=format&fit=crop",
    affiliateLinks: {
      mercadoLivre: "https://mercadolivre.com/sec/1NmdeKu"
    },
    benefits: ["100% pura", "Sem sabor", "Alta qualidade", "Fácil dissolução"],
    category: "creatina"
  },
  {
    id: "p13",
    name: "Creatina Monohidratada Premium",
    brand: "Growth Supplements",
    price: "R$ 85,90",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=400&auto=format&fit=crop",
    affiliateLinks: {
      mercadoLivre: "https://mercadolivre.com/sec/2fA67MY"
    },
    benefits: ["Qualidade premium", "Monohidratada pura", "Rendimento garantido", "Sem impurezas"],
    category: "creatina"
  },
  {
    id: "p14",
    name: "Creatina Monohidratada 300g",
    brand: "Growth Supplements",
    price: "R$ 79,90",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=400&auto=format&fit=crop",
    affiliateLinks: {
      mercadoLivre: "https://mercadolivre.com/sec/2rYRy6g"
    },
    benefits: ["300g de creatina pura", "Monohidratada", "Ótimo rendimento", "Preço competitivo"],
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
      amazon: "#amazon-c4",
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
      amazon: "#amazon-evora",
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
      amazon: "#amazon-bcaa-integral",
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
      amazon: "#amazon-glutamina-pro",
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
      amazon: "#amazon-beta-alanina",
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
      amazon: "#amazon-cafeina-power",
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
      amazon: "#amazon-citrulina-optimum",
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
      amazon: "#amazon-nitrico-bodybuilders",
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
    id: "p17",
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

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Os 5 Melhores Wheys para Ganhar Massa em 2025",
    slug: "melhores-wheys-ganhar-massa-2025",
    excerpt: "Descubra quais são os whey proteins mais eficientes para hipertrofia muscular, com análise completa de custo-benefício e qualidade.",
    content: `
# Os 5 Melhores Wheys para Ganhar Massa em 2025

Se você está buscando **ganhar massa muscular** de forma eficiente, o whey protein é um dos suplementos mais importantes na sua jornada. Neste guia completo, vamos analisar os 5 melhores wheys disponíveis no mercado brasileiro em 2025.

## Por que o Whey Protein é Essencial?

O whey protein é derivado do soro do leite e oferece uma fonte de proteína de **alta qualidade biológica**. Seus benefícios incluem:

- **Absorção rápida**: Ideal para o pós-treino
- **Perfil completo de aminoácidos**: Todos os essenciais para síntese proteica
- **Praticidade**: Fácil de consumir em qualquer lugar
- **Versatilidade**: Pode ser usado em receitas fitness

## 1. Optimum Nutrition Gold Standard

O **Gold Standard** da Optimum Nutrition é considerado o padrão ouro mundial em whey protein. Com 24g de proteína por dose e baixíssimo teor de gordura e carboidratos, é a escolha de atletas profissionais.

### Pontos Positivos:
- Qualidade internacional comprovada
- Sabores premium e solubilidade excelente
- Certificações de qualidade

### Pontos de Atenção:
- Preço mais elevado
- Importado (pode haver variação de estoque)

## 2. Growth Supplements Whey Concentrado

Para quem busca **custo-benefício**, o whey da Growth é imbatível. Fabricado no Brasil com rigoroso controle de qualidade, oferece 24g de proteína por dose.

## 3. Integralmédica ISO Whey Triple Zero

Ideal para quem tem **intolerância à lactose** ou busca um produto mais limpo. Zero açúcar, zero lactose e zero glúten.

## 4. Dux Nutrition Whey Protein

Marca brasileira premium que vem ganhando espaço no mercado. Excelente dissolução e sabores diferenciados.

## 5. MyProtein Impact Whey

Opção importada com excelente relação qualidade-preço. Variedade enorme de sabores.

## Conclusão

A escolha do melhor whey depende dos seus objetivos, orçamento e preferências pessoais. O importante é manter a **consistência** no consumo e combinar com uma dieta equilibrada e treino adequado.

**Dica Pro**: Consuma seu whey em até 30 minutos após o treino para maximizar a síntese proteica!
    `,
    image: "/images/category-whey.jpg",
    category: "whey-protein",
    tags: ["whey protein", "ganho de massa", "hipertrofia", "suplementos"],
    date: "2025-01-15",
    readTime: "8 min",
    author: "Suplementação Pro",
    featured: true,
    products: [products[0], products[1], products[2]]
  },
  {
    id: "2",
    title: "Como Escolher o Pré-Treino Ideal para Mais Energia",
    slug: "como-escolher-pre-treino-ideal",
    excerpt: "Guia definitivo para entender os ingredientes dos pré-treinos e escolher o melhor para seu perfil e objetivos.",
    content: `
# Como Escolher o Pré-Treino Ideal para Mais Energia

O pré-treino pode ser a diferença entre um treino medíocre e uma sessão **explosiva**. Mas com tantas opções no mercado, como escolher o ideal para você?

## O que é um Pré-Treino?

Pré-treinos são suplementos formulados para serem consumidos antes do exercício, com o objetivo de:

- **Aumentar a energia** e disposição
- **Melhorar o foco** mental
- **Potencializar a performance** física
- **Retardar a fadiga** muscular

## Ingredientes Essenciais

### Cafeína
O ingrediente mais comum e eficaz. Doses variam de 150mg a 400mg. Iniciantes devem começar com doses menores.

### Beta-Alanina
Responsável pelo "formigamento" característico. Ajuda a bufferizar o ácido lático, permitindo mais repetições.

### Citrulina Malato
Precursor do óxido nítrico, promove vasodilatação e o famoso "pump" muscular.

### Creatina
Alguns pré-treinos incluem creatina para potência e força.

## Escolhendo Baseado no Seu Perfil

### Para Iniciantes
Opte por fórmulas com **150-200mg de cafeína**. Evite produtos muito estimulantes no início.

### Para Intermediários
Pode experimentar doses de **200-300mg de cafeína** com fórmulas mais completas.

### Para Avançados
Fórmulas com **300mg+ de cafeína** e ingredientes como DMAA (onde permitido) ou outros estimulantes potentes.

## Melhores Opções do Mercado

1. **C4 Original** - Equilibrado e eficaz
2. **Évora PW** - Nacional e potente
3. **Insane Labz Psychotic** - Para avançados
4. **Darkness Horus** - Foco e energia

## Dicas de Uso

- Tome 20-30 minutos antes do treino
- Não use todos os dias para evitar tolerância
- Evite após as 18h para não atrapalhar o sono
- Hidrate-se bem durante o treino

## Conclusão

O pré-treino ideal é aquele que se adequa ao seu nível de experiência e tolerância a estimulantes. Comece devagar e ajuste conforme necessário!
    `,
    image: "/images/category-preworkout.jpg",
    category: "pre-treino",
    tags: ["pré-treino", "energia", "performance", "cafeína"],
    date: "2025-01-10",
    readTime: "6 min",
    author: "Suplementação Pro",
    featured: true,
    products: [products[5], products[6]]
  },
  {
    id: "3",
    title: "Creatina: O Guia Completo do Suplemento Mais Estudado",
    slug: "creatina-guia-completo",
    excerpt: "Tudo sobre creatina: como funciona, dosagem correta, fase de saturação, mitos e verdades sobre o suplemento mais pesquisado da história.",
    content: `
# Creatina: O Guia Completo do Suplemento Mais Estudado

A creatina é, sem dúvida, o suplemento mais estudado e comprovado cientificamente. Se você ainda não usa, está deixando ganhos na mesa!

## O que é Creatina?

A creatina é um composto natural encontrado em carnes e peixes, e também produzido pelo nosso corpo. Ela é armazenada nos músculos como **fosfocreatina** e serve como fonte rápida de energia para exercícios de alta intensidade.

## Benefícios Comprovados

### 1. Aumento de Força
Estudos mostram ganhos de **5-10% em força** máxima com suplementação regular.

### 2. Ganho de Massa Muscular
A creatina aumenta o volume celular e estimula a síntese proteica.

### 3. Melhora na Recuperação
Reduz danos musculares e acelera a recuperação entre treinos.

### 4. Benefícios Cognitivos
Pesquisas recentes mostram melhora na função cerebral e memória.

## Como Tomar

### Fase de Saturação (Opcional)
- 20g/dia divididos em 4 doses por 5-7 dias
- Acelera os resultados iniciais

### Manutenção
- 3-5g por dia, todos os dias
- Pode ser tomada a qualquer momento

### Com ou Sem Carboidrato?
Tomar com carboidratos pode aumentar a absorção em até 60%, mas não é obrigatório.

## Mitos Desvendados

### "Creatina causa queda de cabelo"
**MITO** - Não há evidências científicas que comprovem isso.

### "Precisa ciclar creatina"
**MITO** - Pode ser usada continuamente sem problemas.

### "Creatina faz mal para os rins"
**MITO** - Em pessoas saudáveis, não há risco renal.

### "Só funciona para homens"
**MITO** - Mulheres também se beneficiam igualmente.

## Melhores Creatinas do Mercado

1. **Creapure** - Padrão ouro de pureza
2. **Max Titanium** - Ótimo custo-benefício nacional
3. **Growth** - Qualidade e preço acessível
4. **Universal Nutrition** - Tradição e confiança

## Conclusão

A creatina é segura, eficaz e acessível. Se você treina com pesos, deveria estar usando!
    `,
    image: "/images/category-creatine.jpg",
    category: "creatina",
    tags: ["creatina", "força", "hipertrofia", "suplementos"],
    date: "2025-01-05",
    readTime: "10 min",
    author: "Suplementação Pro",
    featured: false,
    products: [products[3], products[4]]
  },
  {
    id: "4",
    title: "Suplementos que Aceleram a Recuperação Muscular",
    slug: "suplementos-recuperacao-muscular",
    excerpt: "Conheça os melhores suplementos para otimizar sua recuperação pós-treino e voltar mais forte para a próxima sessão.",
    content: `
# Suplementos que Aceleram a Recuperação Muscular

A recuperação é onde os ganhos realmente acontecem. Sem recuperação adequada, você está apenas se desgastando sem progredir.

## Por que a Recuperação é Importante?

Durante o treino, você causa micro-lesões nas fibras musculares. É no descanso que ocorre a **supercompensação** - o músculo se reconstrói mais forte.

## Top Suplementos para Recuperação

### 1. Whey Protein
Fornece aminoácidos essenciais para reconstrução muscular. Tome até 30 minutos pós-treino.

### 2. BCAAs
Leucina, isoleucina e valina - os aminoácidos de cadeia ramificada que estimulam a síntese proteica.

### 3. Glutamina
Aminoácido mais abundante no músculo. Ajuda na recuperação e imunidade.

### 4. Ômega 3
Anti-inflamatório natural que reduz dores musculares pós-treino.

### 5. Magnésio
Mineral essencial para relaxamento muscular e qualidade do sono.

### 6. ZMA
Combinação de zinco, magnésio e vitamina B6 para recuperação noturna.

## Estratégias Complementares

- **Sono de qualidade**: 7-9 horas por noite
- **Hidratação**: 35ml por kg de peso corporal
- **Alimentação**: Proteína em todas as refeições
- **Descanso ativo**: Caminhadas leves nos dias off

## Conclusão

Invista na recuperação tanto quanto no treino. Seus ganhos agradecem!
    `,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
    category: "vitaminas-minerais",
    tags: ["recuperação", "pós-treino", "suplementos", "descanso"],
    date: "2024-12-28",
    readTime: "7 min",
    author: "Suplementação Pro",
    featured: false,
    products: [products[0], products[9]]
  },
  {
    id: "5",
    title: "Termogênicos: Como Funcionam e Quais os Melhores",
    slug: "termogenicos-como-funcionam",
    excerpt: "Entenda a ciência por trás dos termogênicos e descubra quais realmente funcionam para acelerar a queima de gordura.",
    content: `
# Termogênicos: Como Funcionam e Quais os Melhores

Os termogênicos são suplementos populares para quem busca **emagrecer** e definir o corpo. Mas será que funcionam mesmo?

## O que são Termogênicos?

Termogênicos são substâncias que aumentam a **termogênese** - produção de calor pelo corpo. Isso eleva o gasto calórico em repouso.

## Mecanismos de Ação

### 1. Aumento do Metabolismo
Aceleram as reações metabólicas, queimando mais calorias.

### 2. Oxidação de Gordura
Estimulam o uso de gordura como fonte de energia.

### 3. Supressão do Apetite
Muitos reduzem a fome, facilitando o déficit calórico.

### 4. Aumento de Energia
Proporcionam disposição para treinar mesmo em dieta.

## Ingredientes Eficazes

- **Cafeína**: O termogênico mais estudado e eficaz
- **Chá Verde**: Catequinas que potencializam a queima
- **Capsaicina**: Extrato de pimenta que acelera metabolismo
- **Sinefrina**: Alternativa à efedrina, mais segura
- **L-Carnitina**: Transporta gordura para ser queimada

## Melhores Termogênicos 2025

1. **Lipo 6 Black** - Potente e completo
2. **Sineflex** - Nacional de qualidade
3. **OxyElite Pro** - Para avançados
4. **Animal Cuts** - Fórmula completa

## Cuidados Importantes

- Não use se tiver problemas cardíacos
- Evite combinar com muito café
- Não tome à noite
- Faça pausas periódicas

## Conclusão

Termogênicos podem ajudar, mas não fazem milagre. Dieta e treino continuam sendo fundamentais!
    `,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop",
    category: "emagrecedores",
    tags: ["termogênico", "emagrecimento", "queima de gordura", "metabolismo"],
    date: "2024-12-20",
    readTime: "6 min",
    author: "Suplementação Pro",
    featured: false,
    products: [products[7]]
  },
  {
    id: "6",
    title: "Vitamina D: Por que Todo Atleta Deveria Suplementar",
    slug: "vitamina-d-atletas",
    excerpt: "A vitamina D é essencial para performance, recuperação e saúde geral. Descubra por que a maioria das pessoas é deficiente.",
    content: `
# Vitamina D: Por que Todo Atleta Deveria Suplementar

A vitamina D é na verdade um **hormônio** essencial para diversas funções do corpo. E a maioria dos brasileiros é deficiente!

## Por que Somos Deficientes?

Apesar de sermos um país tropical, passamos a maior parte do tempo em ambientes fechados. A exposição solar necessária para produzir vitamina D adequada é de 15-20 minutos diários, com braços e pernas expostos.

## Benefícios para Atletas

### 1. Força Muscular
Estudos mostram correlação direta entre níveis de vitamina D e força.

### 2. Recuperação
Acelera a regeneração muscular pós-treino.

### 3. Imunidade
Reduz infecções respiratórias em até 50%.

### 4. Saúde Óssea
Essencial para absorção de cálcio e densidade óssea.

### 5. Testosterona
Níveis adequados de D estão associados a maior testosterona.

## Dosagem Recomendada

- **Manutenção**: 2.000-4.000 UI/dia
- **Correção de deficiência**: 5.000-10.000 UI/dia (com acompanhamento)
- **Ideal**: Fazer exame de sangue para ajustar dose

## Melhores Formas de Suplementar

1. **Vitamina D3** (colecalciferol) - Forma mais eficaz
2. **Com vitamina K2** - Melhora absorção e direcionamento do cálcio
3. **Em cápsulas oleosas** - Melhor absorção por ser lipossolúvel

## Conclusão

Faça um exame de 25-hidroxivitamina D e ajuste sua suplementação. Níveis ideais estão entre 40-60 ng/mL.
    `,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop",
    category: "vitaminas-minerais",
    tags: ["vitamina D", "imunidade", "saúde", "suplementos"],
    date: "2024-12-15",
    readTime: "5 min",
    author: "Suplementação Pro",
    featured: false,
    products: [products[8], products[9]]
  }
];

export const socialLinks = {
  instagram: "https://instagram.com/suplementacaopro",
  youtube: "https://youtube.com/@suplementacaopro",
  tiktok: "https://tiktok.com/@suplementacaopro",
  twitter: "https://twitter.com/suplementacaopro"
};

export const authorInfo = {
  name: "Rafael Santos",
  bio: "Entusiasta de fitness e nutrição esportiva há mais de 10 anos. Formado em Educação Física e pós-graduado em Nutrição Esportiva. Minha missão é ajudar pessoas a alcançarem seus objetivos através de informação de qualidade sobre suplementação.",
  image: "/images/about-author.jpg",
  credentials: [
    "Bacharel em Educação Física - USP",
    "Pós-graduação em Nutrição Esportiva",
    "Personal Trainer certificado CREF",
    "10+ anos de experiência em musculação"
  ],
  socialLinks: {
    instagram: "https://instagram.com/suplementacaopro",
    youtube: "https://youtube.com/@suplementacaopro"
  }
};
