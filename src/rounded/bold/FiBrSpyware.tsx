import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSpyware = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m5 16.5c0-.828.672-1.5 1.5-1.5.255-1.763 1.235-5 3-5 1.247.024 1.827 1.03 2.5 1.797.672-.767 1.253-1.773 2.5-1.797 1.766 0 2.745 3.237 3 5 .828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5h-11c-.828 0-1.5-.672-1.5-1.5zm19-10v11c0 3.032-2.468 5.5-5.5 5.5h-13c-3.032 0-5.5-2.468-5.5-5.5v-11c0-3.038 2.462-5.5 5.5-5.5h13c3.038 0 5.5 2.462 5.5 5.5zm-16-2c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm-5 0c0 .828.672 1.5 1.5 1.5s1.5-.672 1.5-1.5-.672-1.5-1.5-1.5-1.5.672-1.5 1.5zm18 3.5h-18v9.5c0 1.379 1.121 2.5 2.5 2.5h13c1.379 0 2.5-1.121 2.5-2.5z"/></svg>
);
