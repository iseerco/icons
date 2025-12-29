import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MarkerTime = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 6a5 5 0 1 0 5 5 5.006 5.006 0 0 0 -5-5zm1.707 6.707a1 1 0 0 1 -1.414 0l-1-1a1 1 0 0 1 -.293-.707v-2a1 1 0 0 1 2 0v1.586l.707.707a1 1 0 0 1 0 1.414zm6.07-9.485a11 11 0 1 0 -15.527 15.583l3.942 3.643a5.445 5.445 0 0 0 7.594.019l3.991-3.689a11 11 0 0 0 0-15.556zm-7.777 14.778a7 7 0 1 1 7-7 7.008 7.008 0 0 1 -7 7z"/></svg>
);
