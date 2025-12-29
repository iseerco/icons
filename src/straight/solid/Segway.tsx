import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Segway = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m22 14c-1.105 0-2 .895-2 2v2h-4v-2h-3v-8.5l3.137-5.5h3.863v-2h-16v2h3.863l3.137 5.5v8.5h-3v2h-4v-2c0-1.105-.895-2-2-2s-2 .895-2 2v6c0 1.105.895 2 2 2s2-.895 2-2v-2h16v2c0 1.105.895 2 2 2s2-.895 2-2v-6c0-1.105-.895-2-2-2z"/></svg>
);
