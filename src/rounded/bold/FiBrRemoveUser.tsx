import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrRemoveUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22.5 13h-6a1.5 1.5 0 0 1 0-3h6a1.5 1.5 0 0 1 0 3zm-8.5-7a6 6 0 1 0 -6 6 6.006 6.006 0 0 0 6-6zm-3 0a3 3 0 1 1 -3-3 3 3 0 0 1 3 3zm5 16.5v-.5a8 8 0 0 0 -16 0v.5a1.5 1.5 0 0 0 3 0v-.5a5 5 0 0 1 10 0v.5a1.5 1.5 0 0 0 3 0z"/></svg>
);
