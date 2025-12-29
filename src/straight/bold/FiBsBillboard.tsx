import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBillboard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 8.5c0-1.93-1.57-3.5-3.5-3.5h-.5v-2h1v-3h-4v3h1v2h-5v-2h1v-3h-4v3h1v2h-5v-2h1v-3h-4v3h1v2h-.5c-1.93 0-3.5 1.57-3.5 3.5v12.5h10.5v3h3v-3h10.5zm-3 9.5h-18v-9.5c0-.275.225-.5.5-.5h17c.275 0 .5.225.5.5z"/></svg>
);
