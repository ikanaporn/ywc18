import React, { Component } from "react";
import '../App';


class header extends Component {
    
    

    constructor(props) {
        super(props);
        console.log("constructorr")
    }
    render() {
        if (!this.props.items) {
            return <span>Loading...</span>;
        }
        const style = {height: 60};
        const styleTxt = {height: 35};
        const provinces = this.props.items.provinces
        return (
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                
                
                        <div className="col-3">
                            <div className="row">
                                <div className="col" style={{marginLeft:'20%'}}>
                                    <div > <img style={style} src="/img/logo-KLK.png" alt="" /><img style={styleTxt} src="/img/text-KLK.png" alt="" /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row justify-content-center">
                                <div className="col" style={{marginRight:'15%'}}>
                            
                                <div class="input-group mb-3" style={{paddingTop:'2%'}}>
                                    <div class="form-group">
                                        <select class="form-control">
                                        <option selected>พื้นที่ใกล้ฉัน</option>
                                            {provinces.map((value, index) => {
                                                return <option key={index}>{value}</option> 
                                            })}
                                        </select>
                                    </div>
                                    
                                 
                                  
                                    <input type="text" class="form-control" placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                    <div class="input-group-append">
                                        <button style={{height:'70%'}}class="btn btn-outline-secondary" type="button"><i class="fa fa-search"></i></button>
                                    </div>
                                    
                                  
                                    
                                </div>
                                </div>
                            </div>
                        </div>
                </div>
                
                    <div className="row">
                        <div className="col" style={{backgroundColor:"#2B3876", padding:"0.7%"}}>
                            <div className="row justify-content-start" style={{marginLeft:'7%', color: "white"}}>
                                <h7><u>หน้าแรก</u>  /  <b>ค้นหา</b></h7>
                                
                                
                            </div>

                        </div>
                    </div>
                
            </div>
        )
    }
}


export default header