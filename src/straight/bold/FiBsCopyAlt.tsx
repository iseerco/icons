import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCopyAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17 4.879-4.879-4.879h-7.121a3 3 0 0 0 -3 3v16h15zm-12 11.121v-13h5v4h4v9zm17-6.121v14.121h-15v-3h12v-14.121z"/></svg>
);
