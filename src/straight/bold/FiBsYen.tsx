import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsYen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.189 1.915-2.378-1.83-8.811 11.455-8.811-11.455-2.378 1.83 8.527 11.085h-4.338v3h5.5v2h-5.5v3h5.5v3h3v-3h5.5v-3h-5.5v-2h5.5v-3h-4.338z"/></svg>
);
