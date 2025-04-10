import React, { createContext, useState , useContext} from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const [modalAbierto, setModalAbierto] = useState(false);

    const abrirModal = () => setModalAbierto(true);
    const cerrarModal = () => setModalAbierto(false);

    // console.log('Contenido del carrito:', carrito);
    const agregarAlCarrito = (item) => {
        // Verifica si el item ya existe en el carrito (por nombre y tamaño)
        const pizzaExistente = carrito.find(pizza => pizza.nombre === item.nombre && pizza.tamaño === item.tamaño);
      
        if (pizzaExistente) {
          // Si la pizza ya está en el carrito, incrementa la cantidad
          const carritoActualizado = carrito.map(pizza => {
            if (pizza.nombre === item.nombre && pizza.tamaño === item.tamaño) {
              return { ...pizza, cantidad: pizza.cantidad + 1,precio: pizza.precio + item.precioUnitario};  // Incrementa la cantidad
            }
            return pizza;  // Si no es la pizza que encontramos, la dejamos igual
          });
          setCarrito(carritoActualizado);  // Actualiza el carrito con la pizza modificada
        } else {
          // Si la pizza no está en el carrito, la agregamos
          setCarrito([...carrito, item]);  // Agrega un nuevo item al carrito
        }
      };
      const eliminarDelCarrito = (itemAEliminar) => {
        const nuevoCarrito = carrito.map(item => {
          if (item.nombre === itemAEliminar.nombre && item.tamaño === itemAEliminar.tamaño) {
            if (item.cantidad > 1) {
              return {
                ...item,
                cantidad: item.cantidad - 1,
                precio: item.precio - item.precioUnitario,
              };
            } else {
              return null; // marcamos para eliminar
            }
          }
          return item;
        }).filter(Boolean); // eliminamos los null
      
        setCarrito(nuevoCarrito);
      };
      const vaciarCarrito = () => setCarrito([]);

      const irPago= ()=>{
        console.log('Redirigiendo al banco Gracias por tu compra')
        vaciarCarrito();
        cerrarModal()
      }

    return (
        <CarritoContext.Provider value={{ carrito,vaciarCarrito, agregarAlCarrito, eliminarDelCarrito, irPago, modalAbierto, abrirModal, cerrarModal}}>
            {children}
        </CarritoContext.Provider>
    )
}


export const useCarrito = () => {
     // Verificamos si estamos dentro del CarritoProvider
     const context = useContext(CarritoContext);

     if (!context) {
         // Lanzamos un error si usamos useCarrito fuera del CarritoProvider
         throw new Error('useCarrito debe usarse dentro de un CarritoProvider');
     }
 
     return context;
}