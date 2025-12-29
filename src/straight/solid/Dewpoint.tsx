import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Dewpoint = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,23.994A10,10,0,0,1,2.929,6.922L10,.006l7.063,6.909a10.012,10.012,0,0,1,.008,14.149h0A9.931,9.931,0,0,1,10,23.994ZM21,6a3,3,0,0,1,0-6A3,3,0,0,1,21,6Zm0-4a1,1,0,0,0,0,2A1,1,0,0,0,21,2Z"/></svg>

);
