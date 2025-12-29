import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsScreenRecorder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 8v1.643l3-2.143v7l-3-2.143v1.643h-7v-6zm8 0c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm1 8h-18v-13h11.09c.193-1.142.708-2.173 1.45-3h-12.54c-1.654 0-3 1.346-3 3v16h10.5v2h-4.5v3h12v-3h-4.5v-2h10.5v-10.54c-.827.742-1.858 1.257-3 1.45z"/></svg>
);
