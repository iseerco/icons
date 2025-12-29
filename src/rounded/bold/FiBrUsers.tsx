import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrUsers = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7.5 13a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-6a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5zm7.5 15.5a7.5 7.5 0 0 0 -15 0 1.5 1.5 0 0 0 3 0 4.5 4.5 0 0 1 9 0 1.5 1.5 0 0 0 3 0zm9-4.5a7 7 0 0 0 -11.455-5.4 1.5 1.5 0 1 0 1.91 2.314 3.951 3.951 0 0 1 2.545-.914 4 4 0 0 1 4 4 1.5 1.5 0 0 0 3 0zm-6.5-9a4.5 4.5 0 1 1 4.5-4.5 4.505 4.505 0 0 1 -4.5 4.5zm0-6a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0 -1.5-1.5z"/></svg>
);
