import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RectangleXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,2H3C1.346,2,0,3.346,0,5V22H24V5c0-1.654-1.346-3-3-3Zm1,18H2V5c0-.552,.448-1,1-1H21c.552,0,1,.448,1,1v15Zm-5.543-11.043l-3.043,3.043,3.043,3.043-1.414,1.414-3.043-3.043-3.043,3.043-1.414-1.414,3.043-3.043-3.043-3.043,1.414-1.414,3.043,3.043,3.043-3.043,1.414,1.414Z"/></svg>

);
