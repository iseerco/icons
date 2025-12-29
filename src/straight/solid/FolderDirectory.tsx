import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderDirectory = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M0,7v-3C0,2.346,1.346,1,3,1h5.236l4,2h8.764c1.654,0,3,1.346,3,3v1H0Zm10.017,15c-.756-1.125-1.017-2-1.017-3.5,0-2.098,1.425-3.773,3.658-5.5h-3.658v-2h5c1.103,0,2,.897,2,2v5h-2v-3.512c-2.113,1.619-3,2.821-3,4.012,.007,.41,.187,3.5,3,3.5h10V9H0v13H10.017Z"/>
</svg>

);
