import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMobileLock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m3 1h11.257c.314-.381.682-.716 1.087-1h-13.344v21.5c0 1.378 1.121 2.5 2.5 2.5h11c1.379 0 2.5-1.122 2.5-2.5v-4.5h-15zm14 17v3.5c0 .827-.673 1.5-1.5 1.5h-11c-.827 0-1.5-.673-1.5-1.5v-3.5zm-5 3h-4v-1h4zm10-15v-1.5c0-1.93-1.57-3.5-3.5-3.5s-3.5 1.57-3.5 3.5v1.5h-2v6.5c0 1.378 1.121 2.5 2.5 2.5h6c1.379 0 2.5-1.122 2.5-2.5v-6.5zm-6-1.5c0-1.378 1.121-2.5 2.5-2.5s2.5 1.122 2.5 2.5v1.5h-5zm7 8c0 .827-.673 1.5-1.5 1.5h-6c-.827 0-1.5-.673-1.5-1.5v-5.5h9zm-4-1h-1v-2h1z"/></svg>
);
