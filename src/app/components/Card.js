import Box from './Box';

function Card ({ boxes, done, onBoxClick }) {
  return (
    <div className="container">
      {boxes.map(box => (
        <Box
          key={box.id}
          box={box}
          isDone={done.includes(box.id)}
          onClick={() => onBoxClick(box.id)}
        />
      ))}
    </div>
  );
}

export default Card;