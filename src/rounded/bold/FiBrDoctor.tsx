import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrDoctor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5 5h-1.5v-1.5a3.5 3.5 0 0 0 -3.5-3.5h-3a3.5 3.5 0 0 0 -3.5 3.5v1.5h-1.5a5.506 5.506 0 0 0 -5.5 5.5v8a5.506 5.506 0 0 0 5.5 5.5h13a5.506 5.506 0 0 0 5.5-5.5v-8a5.506 5.506 0 0 0 -5.5-5.5zm-8.5-1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1.5h-4zm11 15a2.5 2.5 0 0 1 -2.5 2.5h-13a2.5 2.5 0 0 1 -2.5-2.5v-8a2.5 2.5 0 0 1 2.5-2.5h13a2.5 2.5 0 0 1 2.5 2.5zm-4.5-4a1.5 1.5 0 0 1 -1.5 1.5h-1.5v1.5a1.5 1.5 0 0 1 -3 0v-1.5h-1.5a1.5 1.5 0 0 1 0-3h1.5v-1.5a1.5 1.5 0 0 1 3 0v1.5h1.5a1.5 1.5 0 0 1 1.5 1.5z"/></svg>
);
