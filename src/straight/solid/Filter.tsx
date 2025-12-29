import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Filter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m15 24-6-4.5v-5.12l-8-9v-2.38a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v2.38l-8 9z"/></svg>
);
