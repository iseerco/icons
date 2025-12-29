import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RestaurantSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 6v-2.142c1.721-.447 3-2 3-3.858h-2c0 1.103-.897 2-2 2h-18v-2h-2v24h2v-20h5v2c-1.654 0-3 1.346-3 3v15h20v-15c0-1.654-1.346-3-3-3zm-12-2h10v2h-10zm11 15h-12v-2h1c0-2.414 1.721-4.434 4-4.899v-1.601h2v1.601c2.279.465 4 2.484 4 4.899h1zm-3-2h-6c0-1.654 1.346-3 3-3s3 1.346 3 3z"/></svg>
);
