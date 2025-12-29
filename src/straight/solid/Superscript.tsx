import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Superscript = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,11h-2V3.393l-1.043,1.064-1.441-1.387,2.972-3.07h1.513v11Zm-10.628-5l-5.334,7.309L2.66,6H.18l6.618,9L.198,24h2.48l5.359-7.309,5.334,7.309h2.48l-6.574-9,6.574-9h-2.48Z"/></svg>

);
