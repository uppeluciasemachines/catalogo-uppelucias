/*
  =====================================================
  ARQUIVO PRINCIPAL DA APLICAÇÃO
  =====================================================
*/

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Routes, Route, HashRouter } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Pelucias from "./pages/Pelucias";
import Novidades from "./pages/Novidades";
import Promocoes from "./pages/Promocoes";
import Personagens from "./pages/Personagens";
import CategoriaA from "./pages/CategoriaA";
import CategoriaB from "./pages/CategoriaB";
import CategoriaC from "./pages/CategoriaC";
import NotFound from "./pages/NotFound";

// Configuração do cliente de queries (para futuras integrações com APIs)
const queryClient = new QueryClient();

// =====================================================
// COMPONENTE PRINCIPAL
// =====================================================

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* Provider do carrinho - disponibiliza cart em toda a aplicação */}
    <CartProvider>
      <TooltipProvider>
        {/* Componentes para exibir notificações */}
        <Toaster />
        <Sonner />
        
        {/* Configuração de rotas */}
        <HashRouter>
          <Routes>
            {/* Página principal (catálogo) */}
            <Route path="/" element={<Index />} />
            
            {/* Páginas de categorias */}
            <Route path="/pelucias" element={<Pelucias />} />
            <Route path="/novidades" element={<Novidades />} />
            <Route path="/promocoes" element={<Promocoes />} />
            <Route path="/personagens" element={<Personagens />} />
            {/* Rotas de subcategorias de Personagens */}
            <Route path="/personagens/stitch" element={<Personagens />} />
            <Route path="/personagens/marvel" element={<Personagens />} />
            <Route path="/personagens/animes" element={<Personagens />} />
            <Route path="/personagens/mario" element={<Personagens />} />
            <Route path="/personagens/ursinho-pooh" element={<Personagens />} />
            <Route path="/personagens/grogo" element={<Personagens />} />
            <Route path="/personagens/como-treinar-o-seu-dragao" element={<Personagens />} />
            <Route path="/personagens/bob-esponja" element={<Personagens />} />
            <Route path="/personagens/garfield" element={<Personagens/>}/>
            <Route path="/personagens/hello-kitty" element={<Personagens/>}/>
            <Route path="/personagens/mickey" element={<Personagens/>}/>
            <Route path="/personagens/looney-tunes" element={<Personagens/>}/>
            <Route path="/personagens/minions" element={<Personagens/>}/>
            <Route path="/personagens/monstros-sa" element={<Personagens/>}/>
            <Route path="/personagens/popeye" element={<Personagens/>}/>
            <Route path="/personagens/smurfs" element={<Personagens/>}/>
            <Route path="/personagens/sonic" element={<Personagens/>}/>
            <Route path="/personagens/toystory" element={<Personagens/>}/>
            <Route path="/personagens/tartaruga-ninja" element={<Personagens/>}/>
            <Route path="/categoria-a" element={<CategoriaA />} />
            <Route path="/categoria-b" element={<CategoriaB />} />
            <Route path="/categoria-c" element={<CategoriaC />} />
            
            {/* Página 404 - exibida para rotas não encontradas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
