import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import JumbotronTitle from '../Jumbotron/Jumbotron';
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm/index";
import SearchResult from "../SearchResult/index";
import API from "../../utils/API";

class Home extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        description: "",
        error: "",
        message: "",
        search: ""
    };

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getGoogleSearchBooks(this.state.search)
            .then(res => {
                if (res.data.items === "error") {
                    throw new Error(res.data.items);
                }
                else {
                    let results = res.data.items
                    results = results.map(result => {
                        result = {
                            key: result.id,
                            id: result.id,
                            title: result.volumeInfo.title,
                            author: result.volumeInfo.authors,
                            description: result.volumeInfo.description,
                            image: result.volumeInfo.imageLinks.thumbnail,
                            link: result.volumeInfo.infoLink
                        }
                        return result;
                    })
                    this.setState({ books: results, error: "" })
                }
            })
            .catch(err => this.setState({ error: err.items }))
    }

    handleSavedButton = event => {
        event.preventDefault();
        API.saveBook({
            title: "test title",
            author: "test author",
            description: "test description",
            image: "test image"
        })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {


        return (
            <div className="containerHome">
                <JumbotronTitle />
                <div className="productDisplay">

                    <Row>
                        <Col size="2" />
                        <Col size="md-8">

                            <Container>
                                <Row>
                                    <Col size="12">
                                        <SearchForm
                                            handleFormSubmit={this.handleFormSubmit} handleInputChange={this.handleInputChange}
                                        />
                                    </Col>
                                </Row>
                            </Container>

                        </Col>
                        <Col size="2" />
                    </Row>

                    <Container>
                        <SearchResult books={this.state.books}
                            handleSavedButton={this.handleSavedButton}
                        />
                    </Container>

                </div>
            </div >
        )
    }
}

export default Home;
