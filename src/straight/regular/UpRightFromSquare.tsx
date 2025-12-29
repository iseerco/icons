import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UpRightFromSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,2v9h-2V3.414l-12.793,12.793-1.414-1.414L20.586,2h-7.586V0h9c1.103,0,2,.897,2,2Zm-2,20H2V3c0-.551.448-1,1-1h7V0H3C1.346,0,0,1.346,0,3v21h24v-10h-2v8Z"/>
</svg>

);
