/*
 * NotFound Page - Suplementação Pro
 * Design: Performance Tech - 404 error page
 */

import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-lg mx-auto"
          >
            <div className="text-8xl md:text-9xl font-bold text-gradient mb-4">
              404
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Página não encontrada
            </h1>
            <p className="text-muted-foreground mb-8">
              Ops! A página que você está procurando não existe ou foi movida.
              Que tal explorar nossos artigos sobre suplementação?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-affiliate">
                <Home className="w-5 h-5" />
                Ir para o Início
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg border border-border hover:bg-secondary transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
