import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsReferee = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 19.5v4.5h-3v-4.5c0-1.207-.861-2.217-2-2.449v6.949h-3v-4.381l-1 .857-1-.857v4.381h-3v-6.949c-1.139.232-2 1.242-2 2.449v4.5h-3v-4.5c0-3.033 2.467-5.5 5.5-5.5h.555l2.945 2.524 2.945-2.524h.555c3.033 0 5.5 2.467 5.5 5.5zm-15-13.5c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm3 0c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3z"/></svg>
);
