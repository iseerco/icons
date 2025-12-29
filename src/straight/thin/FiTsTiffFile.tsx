import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTiffFile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14.707 0h-10.207c-1.378 0-2.5 1.121-2.5 2.5v21.5h20v-1h-19v-20.5c0-.827.673-1.5 1.5-1.5h9.5v7h7v3h1v-3.707zm.293 1.707 5.293 5.293h-5.293zm3 11.293h4v1h-3v2.5h3v1h-3v3.5h-1zm-4 1v2.5h3v1h-3v3.5h-1v-8h4v1zm-3 7v-8h1v8zm-1-7h-1.999l.016 6.999-1 .002-.016-7.001h-2.001v-1h5z"/></svg>
);
