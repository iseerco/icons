import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Macarons = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m20 16.5c0-1.86-.931-3.504-2.348-4.5 1.417-.996 2.348-2.64 2.348-4.5.553 0 1-.447 1-1s-.447-1-1-1c0-3.032-2.468-5.5-5.5-5.5h-5c-3.032 0-5.5 2.468-5.5 5.5-.553 0-1 .447-1 1s.447 1 1 1c0 1.86.931 3.504 2.348 4.5-1.417.996-2.348 2.64-2.348 4.5-.553 0-1 .447-1 1s.447 1 1 1c0 3.032 2.468 5.5 5.5 5.5h5c3.032 0 5.5-2.468 5.5-5.5.553 0 1-.447 1-1s-.447-1-1-1zm-10.5-14.5h5c1.93 0 3.5 1.57 3.5 3.5h-12c0-1.93 1.57-3.5 3.5-3.5zm-3.5 5.5h12c0 1.93-1.57 3.5-3.5 3.5h-5c-1.93 0-3.5-1.57-3.5-3.5zm8.5 14.5h-5c-1.93 0-3.5-1.57-3.5-3.5h12c0 1.93-1.57 3.5-3.5 3.5zm-8.5-5.5c0-1.93 1.57-3.5 3.5-3.5h5c1.93 0 3.5 1.57 3.5 3.5z"/></svg>
);
