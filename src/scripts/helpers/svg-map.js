/**
 * Helper: SVG map
 * -----------------------------------------------------------------------------
 * Store for SVG icon paths to use in render functions
 * - Use SVGOMG to compress files
 * - Remove any inline fill colours
 * - Add closing tags to suppress warnings on HTML5 compatibility
 * - Add correct BEM class names
 */
const minus = `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon__minus" viewBox="0 0 36 36">
    <path d="M10 16h16v4H10z"></path>
  </svg>
`;

const plus = `
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon__plus" viewBox="0 0 36 36">
    <path d="M16 10v6h-6v4h6v6h4v-6h6v-4h-6v-6h-4z"></path>
  </svg>
`;

const remove = `
  <svg class="icon" width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-330.000000, -14.000000)" fill="#032540" fill-rule="nonzero">
        <path d="M336.330489,21.0021478 L330.133497,27.2424335 C329.961334,27.4157993 329.961334,27.696665 330.133497,27.8700308 C330.21947,27.9568238 330.332349,28 330.44501,28 C330.557889,28 330.67055,27.9568238 330.756522,27.8700308 L337.000109,21.5828239 L343.243697,27.8700308 C343.329888,27.9568238 343.442549,28 343.555209,28 C343.66787,28 343.780749,27.9568238 343.866721,27.8700308 C344.038884,27.696665 344.038884,27.4157993 343.866721,27.2424335 L337.669948,21.0021478 L343.870878,14.7574563 C344.043041,14.5840906 344.043041,14.3032248 343.870878,14.1298591 C343.698715,13.9567136 343.419798,13.9567136 343.247853,14.1298591 L337.000328,20.4214717 L330.752147,14.1300794 C330.579984,13.9569339 330.301285,13.9569339 330.129122,14.1300794 C329.956959,14.3034451 329.956959,14.5843109 330.129122,14.7576766 L336.330489,21.0021478 Z" ></path>
      </g>
    </g>
  </svg>
`;

export const misc = {
  minus,
  plus,
  remove,
};
