import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AddFolder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0 7v-3a3 3 0 0 1 3-3h5.236l4 2h8.764a3 3 0 0 1 3 3v1zm24 2v14h-24v-14zm-8 6h-3v-3h-2v3h-3v2h3v3h2v-3h3z"/></svg>
);
