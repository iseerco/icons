import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SportDrink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 11v-3c0-1.654-1.346-3-3-3v-2h-4v-3h-2v3h-4v2c-1.654 0-3 1.346-3 3v3c0 1.105.895 2 2 2-1.105 0-2 .895-2 2v9h16v-9c0-1.105-.895-2-2-2 1.105 0 2-.895 2-2zm-3 3h-10v-2h10z"/></svg>
);
