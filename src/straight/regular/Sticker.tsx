import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Sticker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 0a12 12 0 0 0 0 24h.414l11.586-11.586v-.414a12.013 12.013 0 0 0 -12-12zm-10 12a9.994 9.994 0 0 1 19.79-1.989 12 12 0 0 0 -11.779 11.779 10.008 10.008 0 0 1 -8.011-9.79zm10.022 9.564a10 10 0 0 1 9.541-9.542z"/></svg>
);
