import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Scale = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 5v2h-4.913l1.8-3.547-1.784-.906-2.261 4.453h-2.842v-2a5 5 0 0 1 10 0zm4-3h-2.685a6.955 6.955 0 0 1 .685 3v4h-14v-4a6.955 6.955 0 0 1 .685-3h-2.685a3 3 0 0 0 -3 3v19h24v-19a3 3 0 0 0 -3-3z"/></svg>
);
