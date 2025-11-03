import type { Products } from "../types/products.types";
import { useEffect, useState } from "react";
import api from "../api/axios";

const Productos = () => {
  const [productos, setProductos] = useState<Products[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get<Products[]>("/products");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Lista de productos</h2>
      <div>
        {productos.map((p) => (
          <div key={p.id}>
            <img className="size-48" src={p.image} />

            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <strong>{p.price}</strong>
            <p className="flex flex-wrap gap-2">
              {p.categories.map((cat, p) => (
                <span key={p}>{cat.trim()}</span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
