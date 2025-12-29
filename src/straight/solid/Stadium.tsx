import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Stadium = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 7h3v3.662l-1.113 3.338h-6.477l1.089-7h1.5v-7h2l3 2-3 2v3zm-11.371 7h4.769l1.086-7h-2.484v-3l3-2-3-2h-2v7h-2.484zm-3.129-7h-1.5v-3l3-2-3-2h-2v7h-3v3.662l1.113 3.338h6.503zm-3.5 12.662v4.338h7v-4c0-1.105.895-2 2-2s2 .895 2 2v4h7v-4.338l1.221-3.662h-20.442z"/></svg>
);
