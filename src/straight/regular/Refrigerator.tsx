import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Refrigerator = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19,0H5c-1.654,0-3,1.346-3,3v21h20V3c0-1.654-1.346-3-3-3ZM5,2h14c.552,0,1,.449,1,1v6h-3v-4h-2v4H4V3c0-.551.448-1,1-1Zm-1,20v-11h11v7h2v-7h3v11H4Z"/>
</svg>

);
