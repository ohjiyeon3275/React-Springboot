import React, { Component } from 'react';
import GoodsService from '../services/GoodsService';

class ListGoodsComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            goods : []
        }

        this.addGoods = this.addGoods.bind(this);
        this.editGoods = this.editGoods.bind(this);
        this.deleteGoods = this.deleteGoods.bind(this);
    }

    
    editGoods(id){
        this.props.history.push(`/add-goods/${id}`);
    }
    
    componentDidMount(){
        GoodsService.getGoods().then((res)=>{
            this.setState({goods : res.data});
        });
    }

    addGoods(){
        this.props.history.push('/add-goods/-1');
    }

    deleteGoods(id){
        GoodsService.deleteGoods(id).then(res => {
            this.setState({goods:this.state.goods.filter(gds => gds.id!==id)});
        });  
    }

    viewGoods(id){
        this.props.history.push(`/view-goods/${id}`);
    }
    
    render() {
        return (
            <div>                
                <h2 className="text-center">Goods List</h2>
                <button className="btn btn-primary" onClick={this.addGoods}>ADD GOODS</button>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Goods Name</th>
                                <th>Goods Company</th>
                                <th>Goods Price</th>
                                <th>Action</th>
         
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.goods.map(
                                    gds=>
                                    <tr key={gds.id}>
                                        <td>{gds.name}</td>
                                        <td>{gds.company}</td>
                                        <td>{gds.price}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={()=>this.editGoods(gds.id)}>UPDATE</button>
                                            <button className="btn btn-danger" onClick={()=>this.deleteGoods(gds.id)} style={{marginLeft:"10px"}}>DELETE</button>
                                            <button className="btn btn-primary" onClick={()=>this.viewGoods(gds.id)} style={{marginLeft:"10px"}}>VIEW</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        );
    }
}

export default ListGoodsComponent;