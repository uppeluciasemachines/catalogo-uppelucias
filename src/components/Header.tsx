/*
  =====================================================
  COMPONENTE: CABEÇALHO (HEADER)
  =====================================================
  
  Cabeçalho fixo no topo da página contendo:
  - Logo/Nome da loja
  - Menu de navegação
  - Ícone do carrinho com contador
  
  COMO ADICIONAR A LOGO:
  1. Salve sua imagem de logo na pasta: public/images/logo.png
  2. Descomente a linha com <img> abaixo
  3. Comente ou remova a linha com o texto "UP Universo das Pelúcias"
*/

import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import logoup from "@/assets/logo/logo-up.png";

// =====================================================
// ITENS DO MENU DE NAVEGAÇÃO
// =====================================================

/**
 * Lista de categorias do menu
 * PARA ADICIONAR/REMOVER ITENS:
 * Modifique este array conforme necessário
 */
const menuItems = [
  { label: "Pelúcias", href: "/pelucias" },
  { label: "Novidades", href: "/novidades" },
  { label: "Promoções", href: "/promocoes" },
];

// =====================================================
// COMPONENTE PRINCIPAL
// =====================================================

export function Header() {
  // Acessa o contexto do carrinho
  const { getTotalItems, setIsCartOpen } = useCart();
  
  // Estado para controlar menu hamburger (mobile)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Número de itens no carrinho
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          
          {/* ============================================
              LOGO / NOME DA LOJA
              
              PARA USAR UMA IMAGEM DE LOGO:
              1. Comente o <span> abaixo
              2. Descomente o <img> 
              3. Coloque sua logo em: public/images/logo.png
          ============================================ */}
          <Link to="/" className="flex items-center">
            {/* Texto como logo (atual) - mobile-first: menor em mobile, maior em desktop */}
            {/* <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary truncate max-w-[200px] sm:max-w-none">
              UP Universo das Pelúcias
            </span> */}
            
             <img src={logoup}
              alt="Logo Up"
              className="h-10 w-auto block" />
          
          </Link>

          {/* ============================================
              MENU DE NAVEGAÇÃO DESKTOP
              Os itens vêm do array menuItems acima
          ============================================ */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ============================================
              BOTÕES DO LADO DIREITO
              Menu hamburger (mobile) + Carrinho
          ============================================ */}
          <div className="flex items-center gap-2">
            {/* Menu Hamburger - Mobile Only */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-1.5 hover:bg-secondary rounded-lg transition-colors"
              aria-label="Abrir menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>

            {/* ÍCONE DO CARRINHO */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-1.5 sm:p-2 hover:bg-secondary rounded-lg transition-colors flex-shrink-0"
              aria-label="Abrir carrinho"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              
              {/* Contador de itens (aparece se houver itens) */}
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* ============================================
            MENU HAMBURGER EXPANDIDO (MOBILE)
            Aparece abaixo do header quando aberto
        ============================================ */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-border bg-card">
            <div className="container mx-auto px-3 sm:px-4 py-3 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 text-foreground hover:text-primary transition-colors font-medium text-base"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
