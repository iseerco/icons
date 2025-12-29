import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Segway = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 14c-1.654 0-3 1.346-3 3v1h-2v-2h-3v-7.278l3.137-6.722h3.863v-2h-16v2h3.863l3.137 6.722v7.278h-3v2h-2v-1c0-1.654-1.346-3-3-3s-3 1.346-3 3v4c0 1.654 1.346 3 3 3s3-1.346 3-3v-1h12v1c0 1.654 1.346 3 3 3s3-1.346 3-3v-4c0-1.654-1.346-3-3-3zm-7.07-12-1.93 4.135-1.93-4.135h3.859zm-9.93 19c0 .551-.449 1-1 1s-1-.449-1-1v-4c0-.551.449-1 1-1s1 .449 1 1zm18 0c0 .551-.448 1-1 1s-1-.449-1-1v-4c0-.551.448-1 1-1s1 .449 1 1z"/></svg>
);
