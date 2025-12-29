import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const GridAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0 7h5v4h-5zm5 6h-5v4h5zm6 0h-4v4h4zm0-2v-4h-4v4zm2 0h4v-4h-4zm6 0h5v-4h-5zm-12-6h4v-5h-4zm6-5v5h4v-5zm-2 24v-5h-4v5zm-6-24a5.006 5.006 0 0 0 -5 5h5zm12 19h-4v5h4zm2 5a5.006 5.006 0 0 0 5-5h-5zm-14-5h-5a5.006 5.006 0 0 0 5 5zm8-6v4h4v-4zm6-8h5a5.006 5.006 0 0 0 -5-5zm5 8h-5v4h5z"/></svg>
);
