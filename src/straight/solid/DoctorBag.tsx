import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const DoctorBag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 18v6h-24v-6h6v2h2v-2h8v2h2v-2zm-24-2v-9c0-1.654 1.346-3 3-3h3v-2c0-1.103.897-2 2-2h8c1.103 0 2 .897 2 2v2h3c1.654 0 3 1.346 3 3v9zm15-7h-2v-2h-2v2h-2v2h2v2h2v-2h2zm-7-5h8v-2h-8z"/></svg>
);
