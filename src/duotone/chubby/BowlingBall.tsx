import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BowlingBall = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><circle cx="12" cy="12" opacity=".5" r="11"/><circle cx="9.362" cy="6.968" r="1"/><circle cx="11.362" cy="9.968" r="1"/><circle cx="7.362" cy="9.968" r="1"/></svg>
);
