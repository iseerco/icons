import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Browsers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5.1,6c.46-2.28,2.48-4,4.9-4h9c2.41,0,4.43,1.72,4.9,4H5.1Zm-.1,2v5c0,2.76,2.24,5,5,5h9c2.76,0,5-2.24,5-5v-5H5Zm5,12c-3.86,0-7-3.14-7-7V7c0-.2,.01-.4,.03-.59-1.78,.77-3.03,2.54-3.03,4.59v6c0,2.76,2.24,5,5,5H14c1.63,0,3.06-.79,3.97-2h-7.97Z"/></svg>

);
