import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PreviousSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21,0H3C1.346,0,0,1.346,0,3V24H24V3c0-1.654-1.346-3-3-3Zm-4,17.647l-8-4.5v4.352h-2V6.5h2v4.353l8-4.5v11.294Zm-2-3.42l-3.96-2.228,3.96-2.227v4.455Z"/>
</svg>

);
