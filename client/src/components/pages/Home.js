import React, { Component } from 'react';
// import { Card, Button, Jumbotron } from 'react-bootstrap';
import ProductDisplay from "../ProductDisplay/ProductDisplay"
import JumbotronTitle from '../Jumbotron/Jumbotron';

// --

class Home extends Component {
    state = {
        name: "",
        description: "",
        price: ""
    };


    componentDidMount() {
        const products = [
            {
                name: "product 1",
                description: "dfalksdjf;lasjdf",
                price: "500"
            },
            {
                name: "product 2",
                description: "dfalksdjf;lasjasdfasdf",
                price: "10"
            }
        ]
        this.setState(products);
        console.log(products)
    };

    render() {


        return (
            <div class="containerHome">
                <JumbotronTitle />
                <div class="productDisplay">
                    <h1>
                        Products
            </h1>
                    {/* products populate here  */}
                    <div class="productDisplayMultiple">
                        <ProductDisplay></ProductDisplay>
                        <ProductDisplay />

                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
