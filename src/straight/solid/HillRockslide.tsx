import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HillRockslide = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.414 24.05h-20.414c-1.654 0-3-1.346-3-3v-20.414zm-1.886-9.05h-4.119l-2.409-2.468v-2.689l2.775-2.843h3.237l2.971 4.134-2.456 3.866zm-14.528-10.875 1.83 1.875h3.329l1.798-2.832-2.277-3.168h-2.484l-2.196 2.25zm10-1.375 1.22 1.25h2.219l1.199-1.888-1.518-2.112h-1.656l-1.464 1.5z"/></svg>
);
