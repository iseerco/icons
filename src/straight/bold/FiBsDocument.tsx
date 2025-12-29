import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsDocument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m7 10h10v3h-10zm0 8h7v-3h-7zm15-12.121v18.121h-20v-21a3 3 0 0 1 3-3h11.121zm-3 15.121v-13h-5v-5h-9v18z"/></svg>
);
