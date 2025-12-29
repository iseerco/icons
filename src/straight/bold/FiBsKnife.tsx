import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsKnife = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.363.19a2.721,2.721,0,0,0-3,.685L.022,21.858l2.206,2.034,4.441-4.819A17.31,17.31,0,0,0,24,3V2.645A2.584,2.584,0,0,0,22.363.19ZM9.739,15.743,20.959,3.571C20.635,6.276,18.225,14.036,9.739,15.743Z"/></svg>

);
