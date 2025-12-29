import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GymBag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3 23h-3v-11c0-1.654 1.346-3 3-3zm18-14v14h3v-11c0-1.654-1.346-3-3-3zm-16-1c0-3.859 3.14-7 7-7s7 3.141 7 7v15h-14zm9 6h-4v2h4zm-7-5h10v-1c0-2.757-2.243-5-5-5s-5 2.243-5 5z"/></svg>
);
