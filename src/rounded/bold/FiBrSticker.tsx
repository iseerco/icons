import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSticker = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m23.964 10.416a12.037 12.037 0 1 0 -13.548 13.547 4.04 4.04 0 0 0 .538.036 4.37 4.37 0 0 0 3.066-1.29l8.689-8.689a4.329 4.329 0 0 0 1.255-3.604zm-20.907.584a9.042 9.042 0 0 1 17.505-1.978 12 12 0 0 0 -11.54 11.539 9 9 0 0 1 -5.965-9.561zm8.97 9.457a9 9 0 0 1 8.432-8.431z"/></svg>
);
