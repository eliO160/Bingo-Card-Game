import Box from './Box';

function Card ({ boxes, done, onBoxClick, onTextChange }) {
  return (
    <div className="container">
      {boxes.map(box => (
        <Box
          key={box.id}
          box={box}
          isDone={done.includes(box.id)}
          onClick={() => onBoxClick(box.id)}
          onTextChange={(newText) => onTextChange(box._id, newText)} // Pass the text change handler
        />
      ))}
    </div>
  );
}

export default Card;