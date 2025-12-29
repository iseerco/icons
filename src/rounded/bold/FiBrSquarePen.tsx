import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSquarePen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.5 0h-13c-3.033 0-5.5 2.467-5.5 5.5v13c0 3.033 2.467 5.5 5.5 5.5h13c3.032 0 5.5-2.467 5.5-5.5v-13c0-3.033-2.468-5.5-5.5-5.5zm2.5 18.5c0 1.378-1.121 2.5-2.5 2.5h-13c-1.378 0-2.5-1.122-2.5-2.5v-13c0-1.378 1.122-2.5 2.5-2.5h13c1.379 0 2.5 1.122 2.5 2.5zm-9.274-9.312 3.086 3.086-4.408 4.408c-.844.844-1.988 1.318-3.182 1.318h-.722c-.276 0-.5-.224-.5-.5v-.722c0-1.193.474-2.338 1.318-3.182zm6.135-3.049c.852.852.852 2.234 0 3.086l-1.008 1.008-3.086-3.086 1.008-1.008c.852-.852 2.234-.852 3.086 0z"/></svg>
);
