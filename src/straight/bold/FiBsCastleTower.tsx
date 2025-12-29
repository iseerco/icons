import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCastleTower = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19 21v-21h-3v3h-2.5v-3h-3v3h-2.5v-3h-3v21h-3v3h20v-3zm-11-15h8v15h-8zm5.5 3.5v2.5h-3v-2.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm0 7v2.5h-3v-2.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5z"/></svg>
);
