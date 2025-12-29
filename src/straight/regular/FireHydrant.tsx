import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FireHydrant = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.5,13.5c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5.672-1.5,1.5-1.5,1.5.672,1.5,1.5Zm4.5,1.5v7h2v2H4v-2h2v-7h-2v-3h2v-4c0-2.968,2.166-5.439,5-5.916V0h2v2.084c2.834.477,5,2.948,5,5.916v4h2v3h-2Zm-10-7h8c0-2.206-1.794-4-4-4s-4,1.794-4,4Zm8,14v-12h-8v12h8Z"/>
</svg>

);
