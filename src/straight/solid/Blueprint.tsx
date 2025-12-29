import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Blueprint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m0,17.762V3.5C0,1.57,1.57,0,3.5,0h1.5v17h-2.5c-.925,0-1.784.282-2.5.762ZM24,4v20H2.5c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5h4.5V4h17Zm-3,4h-6v2h4v7h-2v-4h-2v4h-3v-9h-2v11h11v-11Z"/>
</svg>

);
