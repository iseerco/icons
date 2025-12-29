import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FireHydrant = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,8H6c0-2.968,2.166-5.439,5-5.916V0h2v2.084c2.834.477,5,2.948,5,5.916Zm0,8v6h2v2H4v-2h2v-6h-2v-3h2v-3h12v3h2v3h-2Zm-4.5-1.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5.672,1.5,1.5,1.5,1.5-.672,1.5-1.5Z"/>
</svg>

);
