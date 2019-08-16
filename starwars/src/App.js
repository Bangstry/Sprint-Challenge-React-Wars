import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import Character from "./components/Character";
import { Card, Icon, Button } from "semantic-ui-react";

const App = () => {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState();

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page}`)
    .then(res => {
      setResults(res.data.results);
    });
  }, [page]);

  const getCharacters = (num)=>{
    if(num > 0){
      setPage(page+num);
    } else {
      if(page>1){
        setPage(page+num)
      }
    }
  }


  return (
    <div className="App">
      <div className="buttons">
      <Button icon labelPosition="left" onClick={()=>{getCharacters(-1)}}>
        <Icon name="left arrow" />
        Previous
      </Button>
      <Button icon labelPosition="right" onClick={()=>{getCharacters(1)}}>
        Next
        <Icon name="right arrow" />
      </Button>
      </div>
      <Card.Group className="allcards">
        {results
          ? results.map((item, index) => {
              return <Character star={item} key={item.name} random={index} />;
            })
          : "In a galaxy far far away..."}
      </Card.Group>
    </div>
  );
};

export default App;