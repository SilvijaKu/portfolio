function Blob() {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      className="blob-svg"
    >
      <circle cx="150" cy="150" r="85" fill="#D89CA4">
        <animate
          attributeName="r"
          values="85;92;85"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export default Blob;