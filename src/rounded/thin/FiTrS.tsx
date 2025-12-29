import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrS = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.399,24H7.601c-3.088,0-5.601-2.513-5.601-5.601v-.899c-.01-.649,1.01-.649,1,0v.899c0,2.537,2.063,4.601,4.601,4.601h8.799c5.365-.064,6.32-7.666,1.146-9.057l-11.34-2.918C-.097,9.329,1.075,.077,7.601,0h8.799c3.088,0,5.601,2.513,5.601,5.601v.899c.01,.649-1.01,.649-1,0v-.899c0-2.537-2.063-4.601-4.601-4.601H7.601c-5.365,.064-6.32,7.666-1.146,9.057l11.34,2.918c6.302,1.696,5.131,10.948-1.396,11.025Z"/></svg>

);
