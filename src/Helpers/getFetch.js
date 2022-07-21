import remeraBoca from '../../Assets/Images/boca.jpg'

let productos = [
    {Id:'1',
     Producto:'Remera1',
     Talle:'S',
     Precio:'3000',
     Stock:10,
     Categoria:'Remeras',
     Img: [remeraBoca],
    },
    {Id:'2',
     Producto:'Pantalón1',
     Talle:'L',
     Precio:'5000',
     Stock:8,
     Categoria:'Pantalones',
     Img: [remeraBoca],
    },
    {Id:'3',
     Producto:'Short1',
     Talle:'M',
     Precio:'3000',
     Stock:2,
     Categoria:'Shorts',
     Img: [remeraBoca],
    },
    {Id:'4',
     Producto:'Buzo1',
     Talle:'L',
     Precio:'8000',
     Stock:5,
     Categoria:'Buzos',
     Img: [remeraBoca],
    },
    {Id:'5',
     Producto:'Campera1',
     Talle:'XL',
     Precio:'10000',
     Stock:3,
     Categoria:'Camperas',
     Img: [remeraBoca],
    },
    {Id:'6',
     Producto:'Remera2',
     Talle:'S',
     Precio:'3000',
     Stock:10,
     Categoria:'Remeras',
     Img: [remeraBoca],
    },
    {Id:'7',
     Producto:'Pantalón2',
     Talle:'L',
     Precio:'5000',
     Stock:8,
     Categoria:'Pantalones',
     Img: [remeraBoca],
    },
    {Id:'8',
     Producto:'Short2',
     Talle:'M',
     Precio:'3000',
     Stock:2,
     Categoria:'Shorts',
     Img: [remeraBoca],
    },
    {Id:'9',
     Producto:'Buzo2',
     Talle:'L',
     Precio:'8000',
     Stock:5,
     Categoria:'Buzos',
     Img: [remeraBoca],
    },
    {Id:'10',
     Producto:'Campera2',
     Talle:'XL',
     Precio:'10000',
     Stock:3,
     Categoria:'Camperas',
     Img: [remeraBoca],
    },
]

export const getFetch =(id)=>{
    return new Promise( (resolve, reject)=>{
        setTimeout(()=>{
            if (id) {
                resolve(productos.find(producto => producto.Id === id))
            }else{
                resolve(productos)
            }  
        },700)
        
    }) 
}



 export const getFetchDetails =(id)=>{
     return new Promise( (resolve, reject)=>{
         setTimeout(()=>{
            if (id) {
                resolve(productos.find(producto => producto.Id === id))
            }else{
                resolve(productos)
            }  
         },700)
     }) 
 }

