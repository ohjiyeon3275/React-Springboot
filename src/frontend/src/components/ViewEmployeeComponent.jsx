import React, { Component } from 'react';
import GoodsService from '../services/GoodsService';

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id : this.props.match.params.id,
            goods : {}
        }

    }

    componentDidMount(){
        GoodsService.getGoodsById(this.state.id).then(res=>{
            this.setState({goods : res.data});
        })
    }

    render() {
        return (
            <div>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center">VIEW GOODS PAGE</h3>
                    <div className="card-body">
                        <div className="row">
                            <lable>Goods Name : </lable>
                            <div> { this.state.goods.name }</div>
                        </div>
                        <div className="row">
                            <lable>Goods Company : </lable>
                            <div> { this.state.goods.company }</div>
                        </div>
                        <div className="row">
                            <lable>Goods Price : </lable>
                            <div> { this.state.goods.price }</div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;