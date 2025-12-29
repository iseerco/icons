import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CompassNorth = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12.003,7.944l4.232,7.038-4.238-1.805-4.212,1.825v-.002l4.218-7.056Zm11.997,4.056c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-6.037,1.976L11.997,4.055,6.055,13.996l-.014,.023c-.341,.607-.345,1.335-.007,1.949,.372,.671,1.075,1.045,1.765,1.045,.301,0,.6-.072,.866-.221l3.338-1.44,3.316,1.408c.591,.303,1.31,.293,1.896-.036,.96-.542,1.302-1.763,.747-2.748Z"/>
</svg>

);
