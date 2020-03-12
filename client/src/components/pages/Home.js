import React, { Component } from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import JumbotronTitle from '../Jumbotron/Jumbotron';
import API from "../../utils/API";

// --

class Home extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        description: ""
    };


    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({
                    books: res.data, title: "",
                    author: "",
                    description: ""
                })
            )
            .catch(err => console.log(err));
    }

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveBook({
                title: this.state.title,
                author: this.state.author,
                description: this.state.description
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    };

    render() {


        return (
            <div className="containerHome">
                <JumbotronTitle />
                <div className="productDisplay">

                    <Row>
                        <Col size="md-6">
                            <h1>
                                Add a Book :)
                            </h1>

                            <form>
                                {/* <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="title"
                                    placeholder="Title (required)"
                                /> */}
                            </form>
                            <ProductDisplay />
                        </Col>

                        <Col size="md-6">
                            <h1>
                                All Books :)
                            </h1>
                            <ProductDisplay />
                        </Col>
                    </Row>
                    <div className="productDisplayMultiple">


                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
