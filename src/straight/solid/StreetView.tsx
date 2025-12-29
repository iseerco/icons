import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StreetView = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9,14h-2v-5c0-1.654,1.346-3,3-3h4c1.654,0,3,1.346,3,3v5h-2v5h-2v-5h-2v5h-2v-5Zm3-9c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm5,11v5H7v-5c-3.59,.436-7,1.852-7,3.742,0,2.925,6.221,4.258,12,4.258s12-1.332,12-4.258c0-1.89-3.413-3.194-7-3.742Z"/></svg>

);
