import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WineBottle = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.229,9.782l-4.219-2.813V.005h-6v6.964l-4.219,2.813c-1.115.744-1.781,1.988-1.781,3.328v10.896h18v-10.896c0-1.341-.666-2.585-1.781-3.328Zm-.219,12.224H5.01v-7h12v-2H5.016c.033-.629.356-1.207.884-1.56l5.109-3.407v-4.035h2v4.035l5.109,3.407c.558.372.891.994.891,1.664v8.896Z"/></svg>

);
