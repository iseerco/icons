import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BuildingUser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7 15h-3v-2h3zm2 0h3v-2h-3zm-5 4h3v-2h-3zm5 0h3v-2h-3zm-2-14h-3v2h3zm2 2h3v-2h-3zm-2 2h-3v2h3zm2 2h3v-2h-3zm10 7c1.379 0 2.5-1.121 2.5-2.5s-1.121-2.5-2.5-2.5-2.5 1.121-2.5 2.5 1.121 2.5 2.5 2.5zm2 1h-4c-1.654 0-3 1.346-3 3v2h2v-2c0-.552.448-1 1-1h4c.552 0 1 .448 1 1v2h2v-2c0-1.654-1.346-3-3-3zm-7-4c0-1.63.792-3.065 2-3.977v-8.023c0-1.654-1.346-3-3-3h-10c-1.654 0-3 1.346-3 3v21h12v-2h-10v-19c0-.552.449-1 1-1h10c.552 0 1 .448 1 1z"/></svg>
);
