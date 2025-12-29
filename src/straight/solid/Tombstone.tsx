import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tombstone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22,22v-12C22,4.486,17.514,0,12,0S2,4.486,2,10v12H0v2h24v-2h-2Zm-6-10h-3v5h-2v-5h-3v-2h3v-3h2v3h3v2Z"/></svg>

);
