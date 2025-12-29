import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGlasses = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.5 0a4.505 4.505 0 0 0 -4.5 4.5v.5h3v-.5a1.5 1.5 0 0 1 1.5-1.5h1.5v10.607a5.484 5.484 0 0 0 -7.787 3.393h-2.426a5.484 5.484 0 0 0 -7.787-3.393v-10.607h1.5a1.5 1.5 0 0 1 1.5 1.5v.5h3v-.5a4.505 4.505 0 0 0 -4.5-4.5h-4.5v18.5a5.5 5.5 0 0 0 10.787 1.5h2.426a5.5 5.5 0 0 0 10.787-1.5v-18.5zm-14 21a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1 -2.5 2.5zm13 0a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1 -2.5 2.5z"/></svg>
);
