import axios from 'axios';

export class ProductosService {
    baseUrl = 'http://127.0.0.1:8000/api/v1/productos';

    getProductos() {
        return axios.get(this.baseUrl)
            .then(res => res.data); 
    }

    getProductosPorCategoria(idCategoria) {
        return axios.get( this.baseUrl + `?categoria=${idCategoria}`)
            .then(res => res.data); 
    }

    getProducto(idProducto) {
        return axios.get(this.baseUrl + `/${idProducto}`)
            .then(res => res.data);
    }
}
export default new ProductosService();