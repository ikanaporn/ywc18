import React, { Component } from "react";
import CategoriesList from "./store/categoriesList";
import '../App.js';
import ReactHtmlParser from 'react-html-parser';


class Content extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        if (!this.props.items) {
            return <span>Loading...</span>;
        }

        console.log("item :",this.props.items )
        const substore = this.props.items.categories[0].subcategories
        const provinces = this.props.items.provinces
        const price = this.props.items.priceRange
        const imgResize = {width:'100%'}
        const styleImgCar = {width:'7%',height:'7%',backgroundColor:"#5DC239", margin: '0.5%',padding: '0.5%',}
        const styleImgRes = {width:'7%',height:'7%',backgroundColor:"#5DC239", margin: '0.5%',padding: '1%',}
        
        return (
            <div className="container-fluid" style={{backgroundColor: '#9DD7FB'}}>
                <div className="row">
                
                    <div className= "col-3" >
                        <div className="card">
                           <div className="card-body">
                                <div className="col">
                                    {/* <CategoriesList categories={this.props.categories.categories.name} /> */}
                                <p><b>ประเภทอาหาร</b></p>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio"  value="option1" checked />
                                    <label className="form-check-label" >
                                        ทั้งหมด
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" value="option2" />
                                    <label className="form-check-label" >
                                    {this.props.items.categories[0].name}
                                       
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio"  value="option2" />
                                    <label className="form-check-label" htmlFor="exampleRadios2" >
                                    {this.props.items.categories[1].name}
                                       
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" value="option2" />
                                    <label className="form-check-label" htmlFor="exampleRadios2" >
                                    {this.props.items.categories[2].name}
                                       
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" value="option2" />
                                    <label className="form-check-label" htmlFor="exampleRadios2" >
                                    {this.props.items.categories[3].name}
                                       
                                    </label>
                                </div>
                              
                                </div>
                                <div className="col" style={{paddingTop:'5%'}}>
                                    <div class="form-group">
                                        <label for="inputState"><b>จังหวัด/ใกล้ฉัน</b></label>
                                        <select id="inputState" class="form-control">
                                            <option selected>พื้นที่ใกล้ฉัน</option>
                                            {provinces.map((value, index) => {
                                                return <option key={index}>{value}</option> 
                                            })}
                                        </select>
                                    </div>
                                </div>

                                <div className="col" style={{paddingTop:'4%'}}>
                                    <div class="form-group">
                                        <label for="inputState"><b>ราคา</b></label>
                                        <select id="inputState" class="form-control">
                                            <option selected>กรุณาเลือก</option>
                                            {price.map((value, index) => {
                                                return <option key={index}>{value}</option> 
                                            })}
                                        </select>
                                    </div>
                                </div>
                                
                                
                                <div className="col" style={{paddingTop:'4%'}}>
                                    <p><b>ประเภทร้านอาหารและเครื่องดื่ม</b></p>

                                    {substore.map((value, index) => {
                                        return   <div className="form-check" style={{paddingTop:'1.4%'}}>
                                            <input className="form-check-input" type="radio" value="option2" />
                                            <label className="form-check-label" htmlFor="exampleRadios2" >
                                            <h7 key={index}>{value}</h7> 
                                            </label>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-md-9">
                        
                        {this.props.items.merchants.map((merchant)=> (

                            <div class="card" style={{margin:'2%'}}>
                            <div class="card-body">
                            <div class="row no-gutters">
                                <div className="col-6 col-md-3">
                                    <div style={{verticalAlign:'middle'}}>
                                        <img style={imgResize}
                                            src={merchant.coverImageId}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-9">
                                <div  style={{marginLeft:'3%',marginTop:'1%'}}>
                                        <h5><b>{merchant.shopNameTH}</b>
                                        
                                        {merchant.isOpen === "Y" ? 
                                            <img style={{width:'10%' ,marginLeft:'1.5%'}} src="/img/open.png" alt="" /> : 
                                        merchant.isOpen === "N" ? 
                                            <img style={{width:'10%', marginLeft:'1.5%'}} src="/img/close.png" alt="" /> : null}
                                         </h5>



                                        <div style={{float:'left'}}>
                                        <h6>{merchant.subcategoryName} | </h6>
                                        </div>
                                        <div style={{float:'left'}}>
                                        {merchant.priceLevel === 1 ? 
                                            <h6><h7 style={{color: "#000000"}}>฿</h7>฿฿฿</h6> : 
                                            merchant.priceLevel === 2 ?  
                                            <h6><h7 style={{color: "#000000"}}>฿฿</h7>฿฿ </h6>:
                                            merchant.priceLevel === 3 ? 
                                            <h6><h7 style={{color: "#000000"}}>฿฿฿</h7>฿ </h6>:
                                            merchant.priceLevel === 4 ? 
                                            <h6><h7 style={{color: "#000000"}}>฿฿฿฿</h7> </h6> : null }
                                        </div>
                                        <div> 
                                           <h6> |  {merchant.addressProvinceName}   {merchant.addressDistrictName}</h6>   
                                        </div>
                                       
                                        <div>
                                        <h6></h6>
                                        </div>
                                 
                                        <hr></hr>
                                        
                                </div>
                                <div>
                                    {/* {merchant.highlightText} */}
                                    <h6 style={{marginLeft:'3%',marginTop:'1%'}}> {ReactHtmlParser(merchant.highlightText)} </h6>
                                    
                                    <div style={{marginLeft:'3%',marginTop:'1%'}}>

                                        <h6><b style={{color: "#000000"}}>เมนูแนะนำ : </b>{merchant.recommendedItems + ` `}</h6>
                                        
                                    </div>
                                </div>
                                
                                <div style={{marginLeft:'3%',marginTop:'1%'}}> 
                                
                                {merchant.facilities.map((fac)=> (
                                    
                                    fac === "ที่จอดรถ"?
                                    <img style={styleImgCar} src="/img/car.png" alt="" class="rounded-circle"/> : 
                                    fac === "รับจองล่วงหน้า"? 
                                    <img style={styleImgRes} src="/img/date.png" alt="" class="rounded-circle" />  :
                                    fac ==="สามารถนำสัตว์เลี้ยงเข้าได้"? 
                                    <img style={styleImgRes} src="/img/pawprint.png" alt="" class="rounded-circle" /> : null

                                ))}
                                    
                                </div>
                                
                                </div>
                            </div>
                            </div>
                            </div>
                        ))}
                        <div style={{width:'40%', justifyContent: 'center', marginLeft: '30%',marginRight: '30%'}}>
                            <button type="button" class="btn btn-secondary btn-md btn-block">ดูเพิ่มเติม</button>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Content;