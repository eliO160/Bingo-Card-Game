function Popup({ text }) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "12px",
          fontSize: "2rem",
          boxShadow: "0 2px 16px rgba(0,0,0,0.2)",
          color: "#000" // <-- Add this line
        }}
      >
        {text}
      </div>
    </div>
  );
}

export default Popup;