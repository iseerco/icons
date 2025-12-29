import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PriorityArrows = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21,0H3C1.346,0,0,1.346,0,3v21h24V3c0-1.654-1.346-3-3-3Zm1,22H2V3c0-.551.448-1,1-1h18c.552,0,1,.449,1,1v19Zm-13-13v9h-2v-9l-2.293,2.293-1.414-1.414,3.293-3.293c.779-.78,2.049-.78,2.828,0l3.293,3.293-1.414,1.414-2.293-2.293Zm10.293,3.707l1.414,1.414-3.293,3.293c-.39.39-.902.585-1.414.585s-1.024-.195-1.414-.585l-3.293-3.293,1.414-1.414,2.293,2.293V6h2v9l2.293-2.293Z"/>
</svg>

);
