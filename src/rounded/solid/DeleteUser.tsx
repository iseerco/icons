import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DeleteUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3 6a6 6 0 1 1 6 6 6.006 6.006 0 0 1 -6-6zm6 8a9.01 9.01 0 0 0 -9 9 1 1 0 0 0 1 1h16a1 1 0 0 0 1-1 9.01 9.01 0 0 0 -9-9zm12.414-2 2.293-2.293a1 1 0 0 0 -1.414-1.414l-2.293 2.293-2.293-2.293a1 1 0 0 0 -1.414 1.414l2.293 2.293-2.293 2.293a1 1 0 1 0 1.414 1.414l2.293-2.293 2.293 2.293a1 1 0 0 0 1.414-1.414z"/></svg>
);
