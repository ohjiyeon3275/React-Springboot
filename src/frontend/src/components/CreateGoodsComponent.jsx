import React, { Component, useEffect } from 'react';
import GoodsService from '../services/GoodsService';

class CreateGoodsComponent extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            id : this.props.match.params.id,
            name : '',
            company : '',
            price : ''
        }

        //bind해서 정확하게 찾도록 하기
        this.changeCompanyHandler = this.changeCompanyHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.saveOrUpdateGoods = this.saveOrUpdateGoods.bind(this);
        
    }

   
    componentDidMount(){

        if(this.state.id>0){
            GoodsService.getGoodsById(this.state.id).then((res)=>{
                let gds = res.data;
                this.setState({name : gds.name, company : gds.company, price : gds.price})
            });
        }
    }

    useEffect(() => {
        console.log('useEffect');
    })

    saveOrUpdateGoods=(e)=>{
        e.preventDefault();
        let gds = {name:this.state.name, company:this.state.company, price:this.state.price};
        console.log('goods=>' + JSON.stringify(gds));
       
        if(this.state.id==-1){
            GoodsService.createGoods(gds).then(res => {
                this.props.history.push('/goods');
            });
        }else{
            GoodsService.updateGoods(this.state.id, gds).then( res => {
            this.props.history.push("/goods");
            });
        }
    }
    
    cancelGoods(){
        this.props.history.push('/goods');
    }

    changeNameHandler=(e)=>{
        this.setState({name : e.target.value});
    }
    
    changeCompanyHandler=(e)=>{
        this.setState({company:e.target.value})
    }

    changePriceHandler(e){
        this.setState({price : e.target.value})
    }

    

    getTitle(){
        if(this.state.id==-1){
            return <div>ADD GOODS</div>;
        }else{
            return <div>UPDATE GOODS</div>
        }
    }

    

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">{this.getTitle()}</h3>
                            <div class="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input placeholder="Name" name="name" className="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Company</label>
                                        <input placeholder="Company" name="company" className="form-control"
                                        value={this.state.company} onChange={this.changeCompanyHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input placeholder="Price" name="price" className="form-control"
                                        value={this.state.price} onChange={(e)=>this.changePriceHandler(e.target.value)} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateGoods}>SAVE</button>
                                    <button className="btn btn-danger" onClick={this.cancelGoods.bind(this)}>CANCEL</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateGoodsComponent;