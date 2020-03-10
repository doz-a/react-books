import React from "react";
import { Jumbotron } from 'react-bootstrap';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function JumbotronTitle() {
    return (
        <Jumbotron id="Jumbotron">
            <h1>Google Book Search (React)</h1>
            <p>
                Search and save your favorite books
</p>
            <p>
            </p>
        </Jumbotron>
    );
}

export default JumbotronTitle;