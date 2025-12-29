import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SquareQuote = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8,8h3v5c0,2.206-1.794,4-4,4v-2c1.103,0,2-.897,2-2h-3v-3c0-1.103.897-2,2-2Zm5,2v3h3c0,1.103-.897,2-2,2v2c2.206,0,4-1.794,4-4v-5h-3c-1.103,0-2,.897-2,2Zm11-7v21H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-2,0c0-.552-.448-1-1-1H3c-.552,0-1,.448-1,1v19h20V3Z"/></svg>

);
