import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8,14h8v2H8v-2ZM24,6V23H0V4C0,2.346,1.346,1,3,1h5.236l4,2h8.764c1.654,0,3,1.346,3,3ZM2,4v3H22v-1c0-.552-.448-1-1-1H11.764L7.764,3H3c-.552,0-1,.448-1,1ZM22,21V9H2v12H22Z"/></svg>

);
