import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowSmallUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12,5s.005,0,0,0h0Zm5.847,4.639l-4.081-3.918c-.472-.466-1.14-.739-1.766-.721-.665.006-1.303.27-1.763.737l-4.043,3.948c-.198.193-.202.51-.009.707.098.101.228.151.358.151.126,0,.252-.047.349-.142l4.05-3.955c.16-.162.35-.283.558-.358v12.411c0,.276.224.5.5.5s.5-.224.5-.5V6.084c.21.072.402.19.567.354l4.086,3.923c.201.19.517.187.707-.015.191-.199.186-.516-.014-.707Z"/>
</svg>

);
