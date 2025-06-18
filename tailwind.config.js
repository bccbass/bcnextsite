// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  corePlugins: {
    // Keep essential ones
    preflight: true,
    container: false, // Disable if not using
    accessibility: false, // Disable if not using
    
    // Backdrop utilities (often unused)
    backdropBlur: false,
    // backdropBrightness: false,
    backdropContrast: false,
    // backdropGrayscale: false,
    // backdropHueRotate: false,
    // backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    // backdropSepia: false,
    
    // Advanced layout (disable if unused)
    columns: false,
    break: false,
    
    // Typography (disable if unused)
    // textDecorationColor: false,
    // textDecorationStyle: false,
    // textDecorationThickness: false,
    // textUnderlineOffset: false,
    
    // Filters (disable if unused)
    blur: false,
    // brightness: false,
    contrast: false,
    // grayscale: false,
    // hueRotate: false,
    // invert: false,
    saturate: false,
    // sepia: false,
    
    // Advanced positioning
    // isolation: false,
    // mixBlendMode: false,
    backgroundBlendMode: false,
    
    // Touch/scroll
    // touchAction: false,
    // scrollBehavior: false,
    scrollMargin: false,
    scrollPadding: false,
    
    // Print styles
    screens: false, // Only if you don't need print styles
  }
}