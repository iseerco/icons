import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const IdCard = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 2h-18c-1.654 0-3 1.346-3 3v17h24v-17c0-1.654-1.346-3-3-3zm-14.5 5c1.381 0 2.5 1.119 2.5 2.5s-1.119 2.5-2.5 2.5-2.5-1.119-2.5-2.5 1.119-2.5 2.5-2.5zm3.5 10h-2v-2h-3v2h-2v-2c0-1.103.897-2 2-2h3c1.103 0 2 .897 2 2zm9 0h-6v-2h6zm2-4h-8v-2h8zm0-4h-8v-2h8z"/></svg>
);
