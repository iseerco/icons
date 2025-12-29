import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsReferee = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21 18.5v5.5h-1v-5.5c0-1.757-1.293-3.196-3-3.44v8.94h-1v-8.27l-2 1.714v6.556h-1v-5.698l-1 .857-1-.857v5.698h-1v-6.556l-2-1.714v8.27h-1v-8.94c-1.707.244-3 1.683-3 3.44v5.5h-1v-5.5c-.007-2.497 2.03-4.498 4.528-4.492l4.472 3.833 4.472-3.833c2.498-.006 4.535 1.994 4.528 4.492zm-15-12.5c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm1 0c0 2.757 2.243 5 5 5s5-2.243 5-5-2.243-5-5-5-5 2.243-5 5z"/></svg>
);
