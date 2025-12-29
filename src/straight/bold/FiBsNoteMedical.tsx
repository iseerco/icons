import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsNoteMedical = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20.5,0H3.5C1.57,0,0,1.57,0,3.5v20.5h18.381l5.619-5.664V3.5c0-1.93-1.57-3.5-3.5-3.5ZM3,3.5c0-.275.224-.5.5-.5h17c.276,0,.5.225.5.5v12.5h-5v5H3V3.5Zm7.5,12.5v-2.5h-2.5v-3h2.5v-2.5h3v2.5h2.5v3h-2.5v2.5h-3Z"/></svg>

);
