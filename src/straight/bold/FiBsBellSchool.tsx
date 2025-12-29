import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBellSchool = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m9.5 8a1.5 1.5 0 1 1 -1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm11-1a3.493 3.493 0 0 0 -.186 6.981 11.569 11.569 0 0 1 -9.314 6.926v-2.04a9.487 9.487 0 0 0 5.65-3.138 6.513 6.513 0 0 1 -1.968-2.344 6.493 6.493 0 1 1 .62-6.776 6.513 6.513 0 0 1 2.343-1.942 9.485 9.485 0 1 0 -9.645 14.203v5.13h1.5c8 0 14.5-6.056 14.5-13.5a3.5 3.5 0 0 0 -3.5-3.5z"/></svg>
);
