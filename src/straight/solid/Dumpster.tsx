import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Dumpster = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11,0v6h-4V0h4Zm8,6h5v-3c0-1.654-1.346-3-3-3h-2v6ZM.091,8l.996,11h21.826l.996-11H.091ZM17,0h-4v6h4V0ZM5,6V0h-2C1.346,0,0,1.346,0,3v3h5Zm-1,15v.083c0,1.608,1.346,2.917,3,2.917s3-1.309,3-2.917v-.083H4Zm10,0v.083c0,1.608,1.346,2.917,3,2.917s3-1.309,3-2.917v-.083h-6Z"/>
</svg>

);
