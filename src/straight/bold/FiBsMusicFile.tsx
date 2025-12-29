import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMusicFile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m13.5 9h2.5v3h-2v4a3 3 0 1 1 -3-3v-1.5a2.5 2.5 0 0 1 2.5-2.5zm8.5-3.121v18.121h-20v-21a3 3 0 0 1 3-3h11.121zm-3 15.121v-13h-5v-5h-9v18z"/></svg>
);
