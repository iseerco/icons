import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDoctorBag = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5 3h-3.5v-.5c0-1.378-1.122-2.5-2.5-2.5h-7c-1.378 0-2.5 1.122-2.5 2.5v.5h-3.5c-1.378 0-2.5 1.122-2.5 2.5v18.5h24v-18.5c0-1.378-1.122-2.5-2.5-2.5zm-.5 3v8h-18v-8zm-18 15v-4h3v2h3v-2h6v2h3v-2h3v4zm8-10h-2v-2h2v-2h2v2h2v2h-2v2h-2z"/></svg>
);
