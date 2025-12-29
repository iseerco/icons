import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Boxes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.5,15h4v2h-4v-2Zm8.5-1v10H0V14c0-1.654,1.346-3,3-3h2V3c0-1.654,1.346-3,3-3h8c1.654,0,3,1.346,3,3V11h2c1.654,0,3,1.346,3,3ZM7,11h10V3c0-.552-.448-1-1-1H8c-.552,0-1,.448-1,1V11ZM2,22H11V13H3c-.552,0-1,.448-1,1v8ZM22,14c0-.552-.448-1-1-1H13v9h9V14Zm-17.5,1v2h4v-2H4.5ZM10,6h4v-2h-4v2Z"/></svg>

);
