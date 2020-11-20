import React, { Component } from "react";
import categoriesItem from './categoriesItem';


class categoriesList extends Component {

    showCategoriesList = () => {
        console.log("show categoriesList :",this.props.categories)
        return this.props.categories && this.props.categories.map(categories => (
            <categoriesItem key={categories.name} name={categories.name} />
        ))
        
        
    }

    render() {
        
        return (
            <div className="row">
                {this.showCategoriesList()}
            </div>
        )
    }
}

export default categoriesList

