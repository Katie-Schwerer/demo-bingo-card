import React, {useRef} from 'react';
import data from './data';
import Card from './Card';
import '../Styles/Board.css';
//import html2canvas from 'html2canvas'; // <-- Add this import

function Board() {
  const boardRef = useRef(null);

  return (
    <div className="board">
      <main>
        <h1>Bingo Board</h1>
        <section className="bingo-grid" ref={boardRef}>
          {data.map((item, index) => (
            <Card key={index} title={item.name} image={item.image_url} website={item.website_url} description={item.description} direction={item.google_maps_url} />
          ))}
        </section>
        <section className="buttons">
          <button className="download">Download Bingo Card as PNG</button>
          <button className="submit-button">Digital Board</button>
        </section>
      </main>
    </div>
  );
}

export default Board;
