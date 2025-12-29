import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFill = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.871 15.992 2.121-2.121-13.871-13.871-2.121 2.121.929.929-1.879 1.879-2.989-2.99-2.122 2.122 2.99 2.989-3.889 3.889a3.5 3.5 0 0 0 0 4.95l7.07 7.07a3.5 3.5 0 0 0 4.951 0l7.889-7.889zm-10.932 4.847a.5.5 0 0 1 -.707 0l-7.071-7.071a.5.5 0 0 1 0-.707l3.889-3.89 4.389 4.39 2.122-2.122-4.39-4.389 1.879-1.879 7.779 7.779zm13.061.661a2.5 2.5 0 0 1 -5 0c0-1.25 2.5-4.5 2.5-4.5s2.5 3.119 2.5 4.5z"/></svg>
);
