import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CompassNorth = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm-.003-17.945L6.055,13.996l-.014,.023c-.341,.607-.345,1.335-.007,1.949,.372,.671,1.075,1.045,1.765,1.045,.301,0,.6-.072,.866-.221l3.338-1.44,3.316,1.408c.591,.303,1.31,.293,1.896-.036,.96-.542,1.302-1.763,.747-2.748L11.997,4.055Zm0,9.122l-4.212,1.825v-.002l4.218-7.056,4.232,7.038-4.238-1.805Z"/>
</svg>

);
