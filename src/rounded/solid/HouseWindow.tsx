import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HouseWindow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.797,5.579L14.797,.855c-1.699-1.146-3.895-1.146-5.594,0L2.204,5.579c-1.38,.93-2.204,2.479-2.204,4.145v9.276c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V9.724c0-1.665-.824-3.215-2.203-4.145Zm-5.797,10.421c0,1.103-.897,2-2,2h-4c-1.103,0-2-.897-2-2v-4c0-1.103,.897-2,2-2h4c1.103,0,2,.897,2,2v4Zm-2-4l.002,4h-4.002v-4h4Z"/></svg>

);
