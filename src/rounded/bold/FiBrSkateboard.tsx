import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSkateboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.561 7.439a1.5 1.5 0 0 1 0 2.122l-3 3a1.5 1.5 0 0 1 -2.122-2.122l.44-.439-.879-.879-.439.44a1.5 1.5 0 0 1 -2.122-2.122l3-3a1.5 1.5 0 0 1 2.122 2.122l-.44.439.879.879.439-.44a1.5 1.5 0 0 1 2.122 0zm-9.122 7-.439.44-.879-.879.44-.439a1.5 1.5 0 0 0 -2.122-2.122l-3 3a1.5 1.5 0 0 0 2.122 2.122l.439-.44.879.879-.44.439a1.5 1.5 0 0 0 2.122 2.122l3-3a1.5 1.5 0 0 0 -2.122-2.122zm13.561-6.548a7.838 7.838 0 0 1 -2.312 5.579l-8.218 8.218a7.89 7.89 0 1 1 -11.158-11.158l8.218-8.218a7.891 7.891 0 0 1 13.47 5.579zm-3 0a4.89 4.89 0 0 0 -8.349-3.458l-8.218 8.218a4.89 4.89 0 1 0 6.916 6.916l8.218-8.218a4.86 4.86 0 0 0 1.433-3.458z"/></svg>
);
