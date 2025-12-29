import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Browser = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 1h-18a3 3 0 0 0 -3 3v19h24v-19a3 3 0 0 0 -3-3zm-18 2h18a1 1 0 0 1 1 1v3h-20v-3a1 1 0 0 1 1-1zm-1 18v-12h20v12zm3-9h14v2h-14zm0 4h10v2h-10zm-2-11a1 1 0 1 1 1 1 1 1 0 0 1 -1-1zm3 0a1 1 0 1 1 1 1 1 1 0 0 1 -1-1zm3 0a1 1 0 1 1 1 1 1 1 0 0 1 -1-1z"/></svg>
);
