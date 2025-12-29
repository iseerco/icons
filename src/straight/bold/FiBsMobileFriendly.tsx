import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMobileFriendly = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5 9h-5c-1.378 0-2.5 1.121-2.5 2.5v12.5h10v-12.5c0-1.379-1.122-2.5-2.5-2.5zm-.5 9h-4v-2h4zm0-4h-4v-2h4zm-11.769 1h2.769v4h-9c-1.657 0-3-1.343-3-3v-2h2v-14h20v7h-3v-4h-14v11h3.308zm-2.231-7v-3h10v3zm0 1h5v3h-5z"/></svg>
);
