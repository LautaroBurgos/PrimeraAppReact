import React from "react";
import StockProductos from '../StockProductos.json' ;
import { Link, NavLink ,useParams} from "react-router-dom";

const ItemCategoryContainer =()=>{
    const {idCategoria}=useParams();
    console.log(idCategoria);
    const itemsFiltrados=StockProductos.filter((item)=>item.idCategoria==idCategoria);
    return (
            <>
                 {
                itemsFiltrados.map((product)=>(
                    <div key={product.id}>
                        <h4 >{product.nombre}</h4>
                        <img  src={product.img} alt="" />
                        <h4 >{product.precio}</h4>
                        <button >Muestrame mas
                            <Link to={`/items/${product.id}`}></Link>
                        </button>
                    </div>
                ))}
            </>
            
            
    
    )
}
export default ItemCategoryContainer