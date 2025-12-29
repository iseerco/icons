import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Dumpster = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,0v6h-4V0h4Zm8,6h5v-2c0-2.209-1.791-4-4-4h-1v6ZM.091,8l.584,6.451c.233,2.576,2.393,4.549,4.98,4.549h12.691c2.587,0,4.746-1.973,4.98-4.549l.584-6.451H.091ZM17,0h-4v6h4V0ZM5,6V0h-1C1.791,0,0,1.791,0,4v2h5Zm-1,15v.083c0,1.608,1.346,2.917,3,2.917s3-1.309,3-2.917v-.083h-6Zm10,0v.083c0,1.608,1.346,2.917,3,2.917s3-1.309,3-2.917v-.083h-6Z"/>
</svg>

);
