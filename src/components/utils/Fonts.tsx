import { Global } from '@emotion/react';

export const Fonts = () => {
  return (
    <Global
      styles={`
          @font-face {
            font-family: 'Px Grotesk';
            src: url('/assets/fonts/pxGrotesk/PxGroteskRegular.eot');
            src: url('/assets/fonts/pxGrotesk/PxGroteskRegular.eot?#iefix') format('embedded-opentype'),
                url('/assets/fonts/pxGrotesk/PxGroteskRegular.woff2') format('woff2'),
                url('/assets/fonts/pxGrotesk/PxGroteskRegular.woff') format('woff'),
                url('/assets/fonts/pxGrotesk/PxGroteskRegular.ttf') format('truetype'),
                url('/assets/fonts/pxGrotesk/PxGroteskRegular.svg#PxGroteskRegular') format('svg');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
        }
        @font-face {
          font-family: 'Girott';
          src: url('/assets/fonts/girott/Girott-Bold.eot');
          src: url('/assets/fonts/girott/Girott-Bold.eot?#iefix') format('embedded-opentype'),
              url('/assets/fonts/girott/Girott-Bold.woff2') format('woff2'),
              url('/assets/fonts/girott/Girott-Bold.woff') format('woff'),
              url('/assets/fonts/girott/Girott-Bold.ttf') format('truetype'),
              url('/assets/fonts/girott/Girott-Bold.svg#Girott-Bold') format('svg');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
      }

      @font-face {
        font-family: 'grotesk';
        src: url('/assets/fonts/grotesk/GROTESK-3D.eot');
        src: url('/assets/fonts/grotesk/GROTESK-3D.eot?#iefix') format('embedded-opentype'),
            url('/assets/fonts/grotesk/GROTESK-3D.woff2') format('woff2'),
            url('/assets/fonts/grotesk/GROTESK-3D.woff') format('woff'),
            url('/assets/fonts/grotesk/GROTESK-3D.ttf') format('truetype'),
            url('/assets/fonts/grotesk/GROTESK-3D.svg#GROTESK-3D') format('svg');
        font-weight: 100;
        font-style: normal;
        font-display: swap;
      }
      `}
    />
  );
};
