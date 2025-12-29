import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DisplayArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24.021,6v13h-11v1h4v2H7.021v-2h4v-1H.021V6C.021,4.346,1.367,3,3.021,3h6v2H3.021c-.552,0-1,.449-1,1v11h20V6c0-.551-.448-1-1-1h-6v-2h6c1.654,0,3,1.346,3,3Zm-15.293.707l-1.414,1.414,3.293,3.293c.39.39.902.585,1.414.585s1.024-.195,1.414-.585l3.293-3.293-1.414-1.414-2.293,2.293V0h-2v9l-2.293-2.293Z"/>
</svg>

);
