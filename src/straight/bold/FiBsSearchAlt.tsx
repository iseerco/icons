import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSearchAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m8 9v-3h8v3zm13.814 14.936-2.514-2.52a4.934 4.934 0 0 1 -2.3.584 5 5 0 1 1 5-5 4.934 4.934 0 0 1 -.584 2.3l2.52 2.519zm-2.814-6.936a2 2 0 1 0 -2 2 2 2 0 0 0 2-2zm-8.921 4h-4.579a.5.5 0 0 1 -.5-.5v-17a.5.5 0 0 1 .5-.5h13.5v6.262a7.973 7.973 0 0 1 3 1.5v-10.762h-16.5a3.5 3.5 0 0 0 -3.5 3.5v17a3.5 3.5 0 0 0 3.5 3.5h7.63a8.034 8.034 0 0 1 -3.051-3z"/></svg>
);
