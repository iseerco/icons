import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Answer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m12.113,6.09l1.156,4.91h-2.539l1.156-4.91c.012-.053.059-.09.113-.09s.101.037.113.09Zm11.887-3.09v17h-6.853l-3.847,3.18c-.361.322-.824.484-1.292.484-.476,0-.955-.168-1.337-.508l-3.749-3.156H0V3C0,1.346,1.346,0,3,0h18c1.654,0,3,1.346,3,3Zm-7.5,13l-2.422-10.291c-.154-.662-.575-1.266-1.202-1.528-1.313-.55-2.651.221-2.937,1.458l-2.439,10.362h2.053l.706-3h3.481l.706,3h2.053Z"/>
</svg>

);
