import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLeaf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.458.047c-.574.024-14.099.646-18.57,5.117-3.727,3.727-3.842,9.719-.345,13.585L.005,23.288l.707.707,4.539-4.539c1.872,1.693,4.242,2.539,6.611,2.539,2.525,0,5.051-.961,6.974-2.884C23.397,14.55,23.958,1.134,23.979.565l.021-.542-.541.023Zm-5.33,18.357c-3.336,3.336-8.694,3.451-12.169.343l10.394-10.394-.707-.707-10.394,10.394c-3.108-3.476-2.994-8.833.343-12.169C9.308,2.16,20.354,1.243,22.951,1.077c-.156,2.584-1.034,13.54-4.822,17.327Z"/>
</svg>

);
