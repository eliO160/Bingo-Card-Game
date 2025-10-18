import { useState } from 'react';

function Box({ box, isDone, onClick, }) {
  const [text, setText] = useState(box.text); //Local state for live editing

  //Update local input state as user types
  const handleChange = (e) => setText(e.target.value);

  //When user clicks away, update parent + backend
  const handleBlur = () => {
    if (text !== box.text) {
      onTextChange(text); // Calls parent's handleTextChange(box._id, text)
    }
  };

  return (
    <div
      className={`box ${isDone ? 'done' : ''}`}
      data-index={box.id}
      onClick={onClick} // keeps game click logic
    >
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        className="box-input"
      />
    </div>
  );
}

export default Box;
