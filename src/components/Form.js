import React, { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addArticle();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <button type="submit" className="btn btn-success btn-lg">
                    Add article
                </button>
            </form>
        );
    }
}

Form.propTypes = {
    addArticle: PropTypes.func
};

export default Form;