import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Flag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 4v13h-11a3 3 0 0 1 -2.816-2h3.816a2 2 0 0 0 2-2v-9zm-22 9h12v-10a3 3 0 0 0 -3-3h-11v24h2z"/></svg>
);
