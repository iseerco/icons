import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBuildingFlag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 13-7.998-4h-1.002v15h1v-7h.002zm-8-2.885 5.8 2.885-5.8 2.885zm-1-7.615c0-.827-.673-1.5-1.5-1.5h-11c-.827 0-1.5.673-1.5 1.5v20.5h12v1h-13v-21.5c0-1.379 1.121-2.5 2.5-2.5h11c1.379 0 2.5 1.121 2.5 2.5v4h-1zm-8 11.5h-3v-1h3zm5 0h-3v-1h3zm-8 3h3v1h-3zm5 0h3v1h-3zm-2-11h-3v-1h3zm5 0h-3v-1h3zm-5 4h-3v-1h3zm5 0h-3v-1h3z"/></svg>
);
