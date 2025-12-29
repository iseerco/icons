import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,7v-3C0,2.343,1.343,1,3,1h5.236l4,2h8.764c1.657,0,3,1.343,3,3v1H0Zm24,2v14H0V9H24Zm-8,6H8v2h8v-2Z"/></svg>

);
