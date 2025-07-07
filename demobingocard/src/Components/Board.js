import React from 'react';
import data from './data';
import Card from './Card';
import '../Styles/Board.css';
import { useNavigate } from 'react-router-dom';

function Board() {
  const nagivate = useNavigate();
  return (
    <div className="board">
      <main>
        <h1>Bingo Board</h1>
        <section className="bingo-grid">
          {data.map((item, index) => (
            <Card key={index} title={item.name} image={item.image_url} website={item.website_url} description={item.description} direction={item.google_maps_url} />
          ))}
        </section>
        <section className="buttons">
          <button className="download" type="button" aria-label="Download Bingo Card" onClick={() => nagivate("/download")}>Download Bingo Card</button>
          <button className="submit-button" type="button" aria-label='Digital Board'>Digital Board</button>
        </section>
      </main>
    </div>
  );
}

export default Board;
