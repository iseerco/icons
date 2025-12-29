import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IdCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11 17h-2v-2h-3v2h-2v-2c0-1.103.897-2 2-2h3c1.103 0 2 .897 2 2zm-3.5-5c1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5-2.5 1.119-2.5 2.5 1.119 2.5 2.5 2.5zm16.5-7c0-1.654-1.346-3-3-3h-18c-1.654 0-3 1.346-3 3v17h24zm-22 0c0-.551.449-1 1-1h18c.552 0 1 .449 1 1v15h-20zm18 2h-7v2h7zm0 4h-7v2h7zm-2 4h-5v2h5z"/></svg>
);
