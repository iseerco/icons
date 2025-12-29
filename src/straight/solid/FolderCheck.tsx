import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderCheck = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M0,9v14H24V9H0Zm12.531,9.406c-.395,.396-.915,.593-1.434,.593s-1.039-.197-1.434-.593l-2.87-2.87,1.414-1.414,2.87,2.87,4.965-4.926,1.414,1.414-4.926,4.926ZM0,7v-3C0,2.346,1.346,1,3,1h5.236l4,2h8.764c1.654,0,3,1.346,3,3v1H0Z"/>
</svg>

);
