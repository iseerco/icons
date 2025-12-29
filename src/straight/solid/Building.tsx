import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Building = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11 0h-8a3 3 0 0 0 -3 3v21h14v-21a3 3 0 0 0 -3-3zm-5 19h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm5 12h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm10-2h-5v19h8v-16a3 3 0 0 0 -3-3zm0 14h-2v-2h2zm0-4h-2v-2h2zm0-4h-2v-2h2z"/></svg>
);
