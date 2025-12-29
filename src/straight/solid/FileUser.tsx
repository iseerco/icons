import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.026,7h-7V0H5.026c-1.657,0-3,1.343-3,3v21h3.974v-2c0-1.654,1.346-3,3-3h6.026c1.654,0,3,1.346,3,3v2h4V7Zm-10,10c-2.205,0-4-1.795-4-4s1.795-4,4-4,4,1.795,4,4-1.795,4-4,4Zm9.414-12h-4.414V.586l4.414,4.414Zm-7.414,8c0,1.103-.897,2-2,2s-2-.897-2-2,.897-2,2-2,2,.897,2,2Zm2,9v2h-8.026v-2c0-.551.449-1,1-1h6.026c.552,0,1,.449,1,1Z"/>
</svg>

);
