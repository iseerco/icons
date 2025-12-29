import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectanglePanoramic = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M18.5,5H5.5A5.506,5.506,0,0,0,0,10.5v3A5.506,5.506,0,0,0,5.5,19h13A5.506,5.506,0,0,0,24,13.5v-3A5.506,5.506,0,0,0,18.5,5ZM21,13.5A2.5,2.5,0,0,1,18.5,16H5.5A2.5,2.5,0,0,1,3,13.5v-3A2.5,2.5,0,0,1,5.5,8h13A2.5,2.5,0,0,1,21,10.5Z"/></svg>

);
