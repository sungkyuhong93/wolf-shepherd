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
  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon__close" viewBox="0 0 36 36">
    <path d="M12.51 8.46l-3.17 3.17 1.62 1.62 4 4.08-4 4-1.62 1.55 3.17 3.24 1.62-1.62 4.07-4.07 4.01 4.07 1.55 1.62L27 22.88l-1.62-1.55-4.07-4 4.07-4.08L27 11.63l-3.24-3.17-1.55 1.62-4.01 4.01-4.07-4.01-1.62-1.62z"></path>
  </svg>
`;

export const misc = {
  minus,
  plus,
  remove,
};
