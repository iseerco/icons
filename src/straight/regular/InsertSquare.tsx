import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const InsertSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.414,5.586l4.786,4.701-1.4,1.427-3.8-3.731v16.018h-2V7.992l-3.799,3.721-1.401-1.427,4.793-4.707c.772-.774,2.042-.774,2.822.006ZM21,0H3C1.346,0,0,1.346,0,3v21h2V3c0-.551.449-1,1-1h18c.552,0,1,.449,1,1v21h2V3c0-1.654-1.346-3-3-3Z"/>
</svg>

);
