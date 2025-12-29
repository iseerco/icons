import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SmilePlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,5h-3v3h-2v-3h-3v-2h3V0h2v3h3v2Zm-6,10c0,4.962-4.038,9-9,9S0,19.962,0,15,4.038,6,9,6s9,4.038,9,9Zm-13-1.5c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5,1.5Zm7.667,5.045l-1.33-1.494c-.011.009-1.097.949-2.337.949s-2.326-.939-2.333-.946l-1.333,1.491c.067.06,1.651,1.455,3.667,1.455s3.6-1.395,3.667-1.455Zm.333-5.045c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z"/></svg>

);
