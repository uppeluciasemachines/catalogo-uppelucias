/*
  =====================================================
  COMPONENTE: BARRA LATERAL DO CARRINHO
  =====================================================
  
  Sidebar que aparece ao clicar no ícone do carrinho.
  Mostra os itens selecionados, total e botão do WhatsApp.
  
  CONFIGURAÇÃO DO WHATSAPP:
  Altere o número de telefone na constante abaixo.
  Use o formato internacional sem espaços ou símbolos.
*/

import { X, Plus, Minus, Trash2, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

// =====================================================
// CONFIGURAÇÃO DO WHATSAPP
// =====================================================

/**
 * NÚMERO DO WHATSAPP PARA RECEBER PEDIDOS
 * 
 * COMO CONFIGURAR:
 * 1. Use o formato internacional: código do país + DDD + número
 * 2. Não use espaços, traços ou parênteses
 * 
 * EXEMPLOS:
 * - Brasil: 5511999999999 (55 = Brasil, 11 = DDD, resto = número)
 * - Portugal: 351912345678
 */
const WHATSAPP_NUMBER = "5511999999999"; // ← ALTERE AQUI SEU NÚMERO

// =====================================================
// COMPONENTE PRINCIPAL
// =====================================================

export function CartSidebar() {
  // Acessa todas as funções do carrinho
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    generateWhatsAppMessage,
    isCartOpen,
    setIsCartOpen,
    clearCart,
  } = useCart();

  /**
   * Formata o preço no padrão brasileiro
   */
  const formatPrice = (value: number) => {
    return `R$ ${value.toFixed(2).replace(".", ",")}`;
  };

  /**
   * Abre o WhatsApp com a mensagem do pedido
   */
  const handleSendWhatsApp = () => {
    // Gera a mensagem formatada
    const message = generateWhatsAppMessage();
    
    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Monta o link do WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    // Abre em nova aba
    window.open(whatsappUrl, "_blank");
  };

  // Não renderiza se o carrinho estiver fechado
  if (!isCartOpen) {
    return null;
  }

  return (
    <>
      {/* ============================================
          OVERLAY ESCURO
          Clique para fechar o carrinho
      ============================================ */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />

      {/* ============================================
          BARRA LATERAL DO CARRINHO
      ============================================ */}
      <aside className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-card z-50 animate-slide-in-right flex flex-col">
        {/* ============================================
            CABEÇALHO DO CARRINHO
        ============================================ */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border">
          <h2 className="text-lg sm:text-xl font-bold text-foreground">
            Seu Carrinho
          </h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 sm:p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Fechar carrinho"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* ============================================
            LISTA DE ITENS DO CARRINHO
        ============================================ */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4">
          {cart.length === 0 ? (
            /* Mensagem quando carrinho está vazio */
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
              <p className="text-base sm:text-lg">Seu carrinho está vazio</p>
              <p className="text-xs sm:text-sm mt-2">Adicione pelúcias para continuar</p>
            </div>
          ) : (
            /* Lista de produtos */
            <div className="space-y-3 sm:space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 sm:gap-4 bg-secondary/50 rounded-lg p-2.5 sm:p-3"
                >
                  {/* Imagem do produto (miniatura) */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
                        Sem foto
                      </div>
                    )}
                  </div>

                  {/* Informações do item */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground truncate">
                      {item.name}
                    </h3>
                    {item.size && (
                      <p className="text-sm text-muted-foreground">
                        Tamanho: {item.size}
                      </p>
                    )}
                    <p className="text-primary font-bold mt-1">
                      {formatPrice(item.price)}
                    </p>

                    {/* Controles de quantidade */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      
                      {/* Botão de remover */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto w-8 h-8 flex items-center justify-center text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                        aria-label="Remover item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ============================================
            RODAPÉ COM TOTAL E BOTÃO WHATSAPP
        ============================================ */}
        {cart.length > 0 && (
          <div className="border-t border-border p-3 sm:p-4 space-y-3 sm:space-y-4">
            {/* Valor total */}
            <div className="flex items-center justify-between">
              <span className="text-base sm:text-lg font-medium text-foreground">
                Total:
              </span>
              <span className="text-xl sm:text-2xl font-bold text-primary">
                {formatPrice(getTotalPrice())}
              </span>
            </div>

            {/* Botão de enviar para WhatsApp */}
            <button
              onClick={handleSendWhatsApp}
              className="w-full bg-whatsapp hover:bg-whatsapp/90 text-whatsapp-foreground font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg flex items-center justify-center gap-2 sm:gap-3 transition-colors text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">Enviar Pedido para o WhatsApp</span>
              <span className="sm:hidden">Enviar para WhatsApp</span>
            </button>

            {/* Botão de limpar carrinho */}
            <button
              onClick={clearCart}
              className="w-full text-muted-foreground hover:text-foreground py-2 transition-colors text-xs sm:text-sm"
            >
              Limpar carrinho
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
