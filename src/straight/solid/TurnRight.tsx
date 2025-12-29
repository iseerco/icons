import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TurnRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.384,10.486l-6.675,6.719-1.419-1.41,5.758-5.795H3c-.551,0-1,.449-1,1v11H0v-11c0-1.654,1.346-3,3-3h18.048l-5.758-5.795,1.419-1.409,6.677,6.721c.817.817.817,2.151-.002,2.97Z"/>
</svg>

);
