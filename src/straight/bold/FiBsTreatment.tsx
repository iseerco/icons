import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsTreatment = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5 9h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3h2.5v-2.5h3zm-6.5 10h10v-3h-10zm15-17v18.5a3.5 3.5 0 0 1 -3.5 3.5h-13a3.5 3.5 0 0 1 -3.5-3.5v-18.5h5.338a3.5 3.5 0 0 1 3.162-2h3a3.5 3.5 0 0 1 3.162 2zm-3 3h-5v-1.5a.5.5 0 0 0 -.5-.5h-3a.5.5 0 0 0 -.5.5v1.5h-5v15.5a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5z"/></svg>
);
