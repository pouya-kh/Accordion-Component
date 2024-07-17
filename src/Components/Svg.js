<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-8 h-8 fill-current"
>
  <path d="M5 13h14c0.552 0 1-0.448 1-1s-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
</svg>;

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
  <g>
    <g>
      <rect
        width="24"
        height="24"
        opacity="0"
        transform="rotate(180 12 12)"
      ></rect>
      <path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"></path>
    </g>
  </g>
</svg>;

function Svg({ state }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-8 h-8 fill-current"
    >
      {state ? (
        <path d="M5 13h14c0.552 0 1-0.448 1-1s-0.448-1-1-1h-14c-0.552 0-1 0.448-1 1s0.448 1 1 1z"></path>
      ) : (
        <g>
          <g>
            <rect
              width="24"
              height="24"
              opacity="0"
              transform="rotate(180 12 12)"
            ></rect>
            <path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"></path>
          </g>
        </g>
      )}
    </svg>
  );
}
export default Svg;
