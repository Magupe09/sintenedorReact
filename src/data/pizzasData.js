import marineraImg from '../assets/marinera.webp';
import peperoniImg from '../assets/peperoni.webp';
import cuatroQuesosImg from '../assets/cuatro-quesos.webp';
import barbacoaImg from '../assets/barbacoa.webp';
import hawainaImg from '../assets/hawaina.webp';
import vegetarianaImg from '../assets/vegetariana.webp';

export const pizzasData = {
  marinera: {
    id: 'marinera',
    nombre: "Marinera",
    imagen: marineraImg,
    ingredientes: ["Tomate", "Mozzarella", "Albahaca fresca"],
    precios: {
      personal: 10,
      mediana: 15,
      familiar: 20
    }
  },
  pepperoni: {
    id: 'pepperoni',
    nombre: "Pepperoni",
    imagen: peperoniImg,
    ingredientes: ["Tomate", "Mozzarella", "Pepperoni"],
    precios: {
      personal: 10,
      mediana: 15,
      familiar: 20
    }
  },
  quesos: {
    id: 'quesos',
    nombre: "Cuatro Quesos",
    imagen: cuatroQuesosImg,
    ingredientes: ["Mozzarella", "Gorgonzola", "Parmesano", "Ricotta"],
    precios: {
      personal: 10,
      mediana: 15,
      familiar: 20
    }
  },
  barbacoa: {
    id: 'barbacoa',
    nombre: "Barbacoa",
    imagen: barbacoaImg,
    ingredientes: ["Tomate", "Mozzarella", "Carne de res", "Cebolla", "Salsa barbacoa"],
    precios: {
      personal: 10,
      mediana: 15,
      familiar: 20
    }
  },
  hawaiana: {
    id: 'hawaiana',
    nombre: "Hawaiana",
    imagen: hawainaImg,
    ingredientes: ["Tomate", "Mozzarella", "Jamón", "Piña"],
    precios: {
      personal: 10,
      mediana: 15,
      familiar: 20
    }
  },
  vegetariana: {
    id: 'vegetariana',
    nombre: "Vegetariana",
    imagen: vegetarianaImg,
    ingredientes: ["Pimientos", "Champiñones", "Cebolla", "Aceitunas"],
    precios: {
      personal: 10,
      mediana: 15,
      familiar: 20
    }
  }
};

// Función auxiliar para convertir el objeto en array
export const getPizzasArray = () => {
  return Object.values(pizzasData);
}; 