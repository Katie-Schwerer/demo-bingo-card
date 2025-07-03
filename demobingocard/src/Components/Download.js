import React, {useRef} from 'react';
import '../Styles/Board.css';
import data from './data';
import SecretSpace from './SecretSpace';
import html2canvas from 'html2canvas';


function Download() {
    const boardRef = useRef(null);

    const handleDownload = () => {
        if (!boardRef.current) return;
        html2canvas(boardRef.current, {
            useCORS: true,
            scale: 2,
            backgroundColor: null,
        }).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'bingocard.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }

    return (
        <div className="board">
            <main>
                <h1>Download Your Bingo Card</h1>
                <section className="secret-board" ref={boardRef}>
                    {data.map((item, index) => (
                        <SecretSpace key={index} name={item.name} />
                    ))}
                </section>
                <section className='buttons'>
                    <button className='download' onClick={handleDownload}>Download Bingo Card as PNG</button>
                </section>
            </main>
        </div>
    );
}

export default Download;