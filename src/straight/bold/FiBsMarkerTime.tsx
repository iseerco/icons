import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsMarkerTime = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12 23.994-7.06-6.905a10 10 0 1 1 14.131-14.154 10.008 10.008 0 0 1 0 14.141zm0-20.988a7 7 0 0 0 -4.95 11.95l4.95 4.844 4.962-4.853a7 7 0 0 0 -4.962-11.941zm1.939 11.055-3.439-3.44v-4.621h3v3.379l2.561 2.56z"/></svg>
);
