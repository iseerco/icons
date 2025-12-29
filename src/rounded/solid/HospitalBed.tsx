import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HospitalBed = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 0c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm2 6h-1v1c0 .552-.448 1-1 1-.552 0-1-.448-1-1v-1h-1c-.552 0-1-.448-1-1 0-.552.448-1 1-1h1v-1c0-.552.448-1 1-1 .552 0 1 .448 1 1v1h1c.552 0 1 .448 1 1 0 .552-.448 1-1 1zm10 8v8c0 1.105-.895 2-2 2s-2-.895-2-2 .895-2 2-2v-3h-20v3c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2v-19c0-.552.447-1 1-1s1 .448 1 1v7.026c.838-.635 1.87-1.026 3-1.026h1.26c1.265 1.812 3.362 3 5.74 3s4.475-1.188 5.74-3h1.26c2.757 0 5 2.243 5 5z"/></svg>
);
