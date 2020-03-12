import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import JumbotronTitle from '../Jumbotron/Jumbotron';
import { Link } from "react-router-dom";
import { Input, TextArea, FormBtn } from "../Form";
import { List, ListItem } from "../List";
import DeleteBtn from "../DeleteBtn/index"
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
                    books:
                        res.data,
                    title: "",
                    author: "",
                    description: "",
                    image: ""
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
                description: this.state.description,
                image: this.state.image
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
                        <Col size="2" />
                        <Col size="md-8">
                            <h1>
                                Add a Book :)
                            </h1>

                            <form>
                                <Input
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="title"
                                    placeholder="Title (required)"
                                />
                                <Input
                                    value={this.state.author}
                                    onChange={this.handleInputChange}
                                    name="author"
                                    placeholder="Author (required)"
                                />
                                <Input
                                    value={this.state.image}
                                    onChange={this.handleInputChange}
                                    name="image"
                                    placeholder="Image URL (Optional)"
                                />
                                <TextArea
                                    value={this.state.description}
                                    onChange={this.handleInputChange}
                                    name="description"
                                    placeholder="Description of the book (Optional)"
                                />
                                <FormBtn
                                    disabled={!(this.state.author && this.state.title)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Add Book
                                </FormBtn>
                            </form>
                        </Col>
                        <Col size="2" />
                    </Row>

                    <Row>
                        <Col size="md-8">
                            <hr />
                            <h1>
                                All Books :)
                            </h1>
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem key={book._id}>

                                        <p>
                                            <Link to={"/books/" + book._id}>
                                                <strong>
                                                    {book.title}
                                                </strong>
                                            </Link>
                                        </p>
                                        <p>by {book.author}</p>
                                        <img alt="" src={book.image}></img>
                                        <br /><br />

                                        <DeleteBtn onClick={() => this.deleteBook(book._id)} />


                                        <p>
                                            {book.description}
                                        </p>

                                        <br></br>

                                    </ListItem>
                                ))}
                            </List>

                        </Col>
                    </Row>
                </div>
            </div >
        )
    }
}

export default Home;
