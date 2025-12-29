import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BandAid = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><circle cx="10" cy="10" r="1"/><circle cx="14" cy="10" r="1"/><circle cx="10" cy="14" r="1"/><circle cx="14" cy="14" r="1"/><path d="m0 5v14h24v-14zm17 2v10h-10v-10zm-15 0h3v10h-3zm20 10h-3v-10h3z"/></svg>
);
