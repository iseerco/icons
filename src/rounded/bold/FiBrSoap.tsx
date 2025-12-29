import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSoap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 7.655v-.655a2 2 0 0 0 -2-2v-2h3.5a1.5 1.5 0 0 0 0-3h-6a3.5 3.5 0 0 0 -3.5 3.5v1.5a2 2 0 0 0 -2 2v.655a9.441 9.441 0 0 0 -5 8.345v1.5a6.508 6.508 0 0 0 6.5 6.5h7a6.508 6.508 0 0 0 6.5-6.5v-1.5a9.441 9.441 0 0 0 -5-8.345zm2 9.845a3.5 3.5 0 0 1 -3.5 3.5h-7a3.5 3.5 0 0 1 -3.5-3.5v-1.5a6.471 6.471 0 0 1 4.007-6h5.986a6.471 6.471 0 0 1 4.007 6zm-2-.5a2 2 0 0 1 -2 2h-6a2 2 0 0 1 0-4h6a2 2 0 0 1 2 2z"/></svg>
);
