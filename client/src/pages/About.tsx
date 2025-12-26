/*
 * About Page - Suplementação Pro
 * Design: Performance Tech - Author profile and mission
 * Features: Author bio, credentials, mission statement
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { authorInfo } from "@/data/blogData";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Target,
  Heart,
  Instagram,
  Youtube,
  CheckCircle,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Informação de Qualidade",
    description:
      "Todo conteúdo é baseado em estudos científicos e experiência prática. Não fazemos promessas milagrosas.",
  },
  {
    icon: Heart,
    title: "Honestidade",
    description:
      "Somos transparentes sobre links de afiliados. Recomendamos apenas produtos que realmente acreditamos.",
  },
  {
    icon: BookOpen,
    title: "Educação",
    description:
      "Nosso objetivo é educar e capacitar você a fazer escolhas informadas sobre suplementação.",
  },
  {
    icon: Award,
    title: "Excelência",
    description:
      "Buscamos sempre entregar o melhor conteúdo, atualizado e relevante para seus objetivos.",
  },
];

export default function About() {
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
              Sobre Nós
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Sua jornada fitness merece{" "}
              <span className="text-gradient">informação de qualidade</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Somos apaixonados por fitness e nutrição esportiva. Nossa missão é
              ajudar você a alcançar seus objetivos através de conteúdo
              educativo e recomendações honestas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative">
                <img
                  src={authorInfo.image}
                  alt={authorInfo.name}
                  className="w-full max-w-md rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Quem sou eu
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                {authorInfo.name}
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {authorInfo.bio}
              </p>

              {/* Credentials */}
              <div className="space-y-3 mb-6">
                {authorInfo.credentials.map((credential, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{credential}</span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                <a
                  href={authorInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <Instagram className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a
                  href={authorInfo.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <Youtube className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">YouTube</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-card/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              Nossos Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              O que nos guia
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                Nossa Missão
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Por que criamos este blog
              </h2>
              <div className="text-muted-foreground space-y-4 text-left">
                <p>
                  O mercado de suplementos pode ser confuso e cheio de
                  informações contraditórias. Muitas pessoas acabam gastando
                  dinheiro em produtos que não precisam ou que não funcionam
                  para seus objetivos específicos.
                </p>
                <p>
                  Criamos o <strong className="text-foreground">Suplementação Pro</strong> para ser
                  um guia confiável nesse universo. Aqui você encontra análises
                  honestas, comparativos detalhados e recomendações baseadas em
                  ciência e experiência prática.
                </p>
                <p>
                  Nosso compromisso é com você, leitor. Por isso, somos
                  transparentes: utilizamos links de afiliados para manter o
                  blog, mas isso nunca influencia nossas recomendações. Só
                  indicamos produtos que realmente acreditamos e usamos.
                </p>
                <p>
                  Seja você iniciante ou atleta experiente, nosso objetivo é
                  ajudá-lo a fazer escolhas inteligentes e alcançar seus
                  resultados de forma saudável e sustentável.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-card/30 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Aviso Importante
            </h3>
            <p className="text-sm text-muted-foreground">
              O conteúdo deste blog é apenas informativo e não substitui
              orientação médica ou nutricional profissional. Antes de iniciar
              qualquer suplementação, consulte um médico ou nutricionista.
              Resultados podem variar de pessoa para pessoa. Este site contém
              links de afiliados - ao comprar através deles, você nos ajuda a
              manter o blog sem custo adicional para você.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
