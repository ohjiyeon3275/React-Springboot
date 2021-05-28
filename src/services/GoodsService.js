// eslint-disable-next-line
import axios from 'axios';


const GOODS_API_BASE_URL = "http://localhost:8080/api/v1/goods";

class GoodsService{

    getGoods(){
        return axios.get(GOODS_API_BASE_URL);
    }

    createGoods(goods){
        return axios.post(GOODS_API_BASE_URL, goods);
    }

    getGoodsById(goodsId){
        return axios.get(GOODS_API_BASE_URL+'/'+goodsId);
    }

    updateGoods(goodsId, updatedGoods){
        return axios.put("http://localhost:8080/api/v1/update-goods/"+goodsId, updatedGoods);
    }

    deleteGoods(goodsId){
        return axios.delete("http://localhost:8080/api/v1/delete-goods/"+goodsId);
    }

}

export default new GoodsService()