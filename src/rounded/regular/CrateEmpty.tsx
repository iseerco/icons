import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CrateEmpty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,10H3c-1.654,0-3,1.346-3,3v6c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5v-6c0-1.654-1.346-3-3-3Zm1,9c0,1.654-1.346,3-3,3H5c-1.302,0-2.402-.839-2.816-2h16.816c.553,0,1-.448,1-1s-.447-1-1-1H2v-2h17c.553,0,1-.448,1-1s-.447-1-1-1H2v-1c0-.551.448-1,1-1h18c.552,0,1,.449,1,1v6Z"/>
</svg>

);
