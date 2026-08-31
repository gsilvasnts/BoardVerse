import { Routes, Route } from "react-router-dom";

import ClientLayout from "../layouts/ClientLayout/ClientLayout";
import AdminLayout from "../layouts/AdminLayout/AdminLayout";

import ProdutosPage from "../pages/ProdutosPage/ProdutosPage";
import ClientesPage from "../pages/ClientesPage/ClientesPage";
import CartPage from "../pages/CartPage/CartPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";

import SalesPage from "../pages/SalesPage/SalesPage";
import AdminOrdersPage from "../pages/AdminOrdersPage/AdminOrdersPage";
import AdminTrocasPage from "../pages/AdminTrocasPage/AdminTrocasPage";

function AppRoutes() {
  return (
    <Routes>
      {/* ÁREA DO CLIENTE */}
      <Route element={<ClientLayout />}>
        <Route path="/" element={<ProdutosPage />} />

        <Route path="/produtos" element={<ProdutosPage />} />

        <Route path="/tabuleiros" element={<ProdutosPage />} />

        <Route path="/cartas" element={<ProdutosPage />} />

        <Route path="/dados" element={<ProdutosPage />} />

        <Route path="/quebra-cabecas" element={<ProdutosPage />} />

        <Route path="/todos" element={<ProdutosPage />} />

        <Route path="/carrinho" element={<CartPage />} />

        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="/perfil" element={<ProfilePage />} />
      </Route>

      {/* ÁREA ADMINISTRATIVA */}
      <Route element={<AdminLayout />}>
        <Route path="/admin/vendas" element={<SalesPage />} />

        <Route path="/admin/pedidos" element={<AdminOrdersPage />} />

        <Route path="/admin/trocas" element={<AdminTrocasPage />} />

        <Route path="/admin/clientes" element={<ClientesPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
