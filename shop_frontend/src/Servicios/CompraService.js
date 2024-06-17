import axios from 'axios';

export class CompraService {
    baseUrl = 'http://127.0.0.1:8000/api/v1/carritos';

    postItems(items) {
        return axios.post(this.baseUrl,items)
            .then(res => res.data); 
    }

    getItems(idCarrito){
        return axios.get(this.baseUrl,idCarrito)
            .then(res => res.data); 
    }

}

export default new CompraService();