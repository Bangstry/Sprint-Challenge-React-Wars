import React from "react";
import { Card, Icon } from "semantic-ui-react";

const Character = props => {
    const star = props.star;

    return(
        <Card>
            <Card.Content>
                <Card.Header>{star.name}</Card.Header>
                <Card.Meta>Born in {star.birth_year}</Card.Meta>
                <Card.Description>
                    <p>Eye Color: {star.eye_color}</p>
                    <p> {star.gender} </p>
                    <p> {star.height} cm</p>
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
        <a>
          <Icon name="user" />
          {`Features in ${star.films.length} film\(s\)`}
        </a>
            </Card.Content>
        </Card>
    );
};

export default Character;