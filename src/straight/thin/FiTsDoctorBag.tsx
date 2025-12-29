import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsDoctorBag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5 4h-3.5v-2.5c0-.827-.673-1.5-1.5-1.5h-9c-.827 0-1.5.673-1.5 1.5v2.5h-3.5c-1.378 0-2.5 1.122-2.5 2.5v17.5h24v-17.5c0-1.378-1.122-2.5-2.5-2.5zm-14.5-2.5c0-.276.224-.5.5-.5h9c.276 0 .5.224.5.5v2.5h-10zm-4.5 3.5h19c.827 0 1.5.673 1.5 1.5v10.5h-22v-10.5c0-.827.673-1.5 1.5-1.5zm-1.5 18v-5h5v2h1v-2h10v2h1v-2h5v5zm10.5-11.5h-2.5v-1h2.5v-2.5h1v2.5h2.5v1h-2.5v2.5h-1z"/></svg>
);
