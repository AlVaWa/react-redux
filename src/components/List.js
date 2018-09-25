import React from "react";
import PropTypes from 'prop-types'

const List = (props) => (
    <ul className="list-group list-group-flush">
        {props.articles && props.articles.data && props.articles.data.map(el => (
            <li className="list-group-item" key={el.id}>
                <h1>{el.name}</h1>
                <p>{el.body}</p>
            </li>
        ))}
    </ul>
);

List.proptypes = {
    articles: PropTypes.array
};

export default List;