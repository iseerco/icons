import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ShieldDividedFour = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M2,11V6.916c0-2.16,1.377-4.067,3.427-4.746L11,.322V11H2Zm11,0h9V6.916c0-2.16-1.377-4.067-3.426-4.746L13,.322V11Zm-2,2H2.06c.595,5.887,6.755,9.544,8.94,10.658V13Zm2,0v10.717c2.255-.942,8.411-4.121,8.946-10.717H13Z"/>
</svg>

);
