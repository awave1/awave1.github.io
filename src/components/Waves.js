const wavePath =
  "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z";

// Adapted from: https://codepen.io/goodkatz/pen/LYPGxQz?editors=1100
function Waves() {
  return (
    <svg
      className="waves"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
      shapeRendering="auto"
    >
      <defs>
        <path id="gentle-wave" d={wavePath} />
      </defs>
      <g className="parallax">
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="0"
          fill="rgba(255,255,255,0.01)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="3"
          fill="rgba(255,255,255,0.04)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="5"
          fill="rgba(255,255,255,0.08)"
        />
        <use
          xlinkHref="#gentle-wave"
          x="48"
          y="7"
          fill="rgba(255,255,255,0.09)"
        />
      </g>
    </svg>
  );
}

/**
 * Obligatory component
 *
 * very react
 * much javascript
 */
function WaveEmoji({ className }) {
  return (
    <span className={className} role="img" aria-label="wave">
      🌊
    </span>
  );
}

export { Waves, WaveEmoji };
