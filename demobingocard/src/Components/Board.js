import {useRef} from 'react';
import data from './data';
import Card from './Card';
import '../Styles/Board.css';
import html2canvas from 'html2canvas'; // <-- Add this import

function Board() {
  const boardRef = useRef(null);
  const handleDownload = () => {
    if (!boardRef.current) return;
    html2canvas(boardRef.current, {
      useCORS: true,
      scale: 2,
      backgroundColor: null,
    }).then((canvas) => {
      const link = document.createElement('a');
      link.download = 'bingo-card.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  };

  return (
    <div className="board">
      <main>
        <h1>Bingo Board</h1>
        <section className="bingo-grid" ref={boardRef}>
          {data.map((item, index) => (
            <Card key={index} title={item.name} />
          ))}
        </section>
        <section className="buttons">
          <button className="download" onClick={handleDownload}>Download Bingo Card as PNG</button>
          <button className="submit-button">Digital board</button>
        </section>
      </main>
    </div>
  );
}

export default Board;
