import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TiffFile = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.414 5h-4.414v-4.414zm-6.414 2v-7h-10c-1.657 0-3 1.343-3 3v21h20v-17zm-7 6.6h-1.75v6.4h-1.6v-6.4h-1.65v-1.6h5zm2.6 6.4h-1.6v-8h1.6zm5.4-6.4h-2.4v1.801h2.4v1.6h-2.4v3h-1.6v-8.001h4zm5 0h-2.4v1.801h2.4v1.6h-2.4v3h-1.6v-8.001h4z"/></svg>
);
