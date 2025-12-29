import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SearchAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11 17.5a6.5 6.5 0 0 1 11-4.684v-12.816h-17a3 3 0 0 0 -3 3v18a3 3 0 0 0 3 3h12.5a6.5 6.5 0 0 1 -6.5-6.5zm-4-12.5h10v2h-10zm15.543 18.957-2.657-2.657a4.457 4.457 0 0 1 -2.386.7 4.5 4.5 0 1 1 4.5-4.5 4.457 4.457 0 0 1 -.7 2.386l2.657 2.657z"/></svg>
);
