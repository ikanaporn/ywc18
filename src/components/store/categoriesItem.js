import React, { Component } from "react";


class categoriesItem extends Component {

    constructor(props) {
        super(props);
        console.log('constructor|'+ props.name);
    }

    
    render() {
        const {categories,provinces,priceRange,merchants} = this.props;
        const {name} = this.props.categories.name
        console.log("nameeeee",this.props.categories.name)
        return (
            <div className="row">
                 <h5>{name}</h5>

            </div>
        )
    }
}

export default categoriesItem;