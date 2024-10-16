import { createContext, useState } from "react";


const CartContext = createContext()


const CartProvider = ({ children }) =>{
  const [carrito, setCarrito] = useState([])

  const añadirProductoAlCarrito = (productoNuevo) => {

    const condicion = estáEnElCarrito(productoNuevo.id)

    if(condicion) {
      const productosModificados = carrito.map ((productoDeCarrito)=> {
        if(productoDelCarrito.id === productoNuevo.id){
          return { ...productoDeCarrito, cantidad: productoDeCarrito.cantidad + productoNuevo.cantidad }
        } else {
          return productoDeCarrito
        }
      })

      setCarrito(productosModificados)
     } else {
      setCarrito([...carrito, productoNuevo])
     }
  }

  const estáEnElCarrito = (idProducto) => {
    const respuesta = carrito.some((producto) => producto.id === idProducto )
    return respuesta
  }

  const cantidadProductosCarrito = () => {
    const cantidad = carrito.reduce((total, producto)=> total + producto.cantidad, 0)
    return cantidad
  }

  const precioTotal = () => {
    const total = carrito.reduce((total, producto)=> total + (producto.cantidad * producto.precio), 0)
    return total
  }

  const borrarProducto = (idProducto) => {
    const productosFiltrados = carrito.filter((producto)=> producto.id !== idProducto)
    setCarrito(productosFiltrados)
  }

  const borrarCarrito = () =>{
    setCarrito([])
  }

  return(
    <CartContext.Provider value={ { carrito, añadirProductoAlCarrito, cantidadProductosCarrito, borrarCarrito, precioTotal, borrarProducto } } >
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider, CartContext }