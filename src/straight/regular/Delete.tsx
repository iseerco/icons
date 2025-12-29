import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Delete = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 2h-13.24l-7.76 10 7.76 10h13.24a3 3 0 0 0 3-3v-14a3 3 0 0 0 -3-3zm1 17a1 1 0 0 1 -1 1h-12.26l-6.2-8 6.2-8h12.26a1 1 0 0 1 1 1zm-4.043-9.543-2.543 2.543 2.543 2.543-1.414 1.414-2.543-2.543-2.543 2.543-1.414-1.414 2.543-2.543-2.543-2.543 1.414-1.414 2.543 2.543 2.543-2.543z"/></svg>
);
