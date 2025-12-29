import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTimeForwardThirty = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 3v4.5c0 .827-.673 1.5-1.5 1.5h-4.5v-1h4.244c-1.639-4.193-5.729-7-10.244-7-6.065 0-11 4.935-11 11 0 5.024 3.39 9.263 8 10.574v1.031c-5.167-1.337-9-6.026-9-11.605 0-6.617 5.383-12 12-12 4.773 0 9.109 2.876 11 7.216v-4.216zm-8.299 16.321c.489-.457.799-1.101.799-1.821 0-1.378-1.122-2.5-2.5-2.5h-3v1h3c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-2v1h2.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5h-3.5v1h3.5c1.378 0 2.5-1.122 2.5-2.5 0-.941-.529-1.752-1.299-2.179zm-3.701-13.821h-1v6.5h-5.5v1h6.5zm12 12.5v3c0 1.654-1.346 3-3 3s-3-1.346-3-3v-3c0-1.654 1.346-3 3-3s3 1.346 3 3zm-1 0c0-1.103-.897-2-2-2s-2 .897-2 2v3c0 1.103.897 2 2 2s2-.897 2-2z"/></svg>
);
