import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTestTube = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,0H5.5c-.276,0-.5.224-.5.5s.224.5.5.5h1.5v18c0,2.757,2.243,5,5,5s5-2.243,5-5V1h1.5c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-6.5,23c-2.206,0-4-1.794-4-4V7h8v12c0,2.206-1.794,4-4,4Zm4-17h-8V1h8v5Z"/>
</svg>

);
