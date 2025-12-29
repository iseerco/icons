import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Spa = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24 19.5c0 2.485-5.373 4.5-12 4.5s-12-2.015-12-4.5 5.373-4.5 12-4.5 12 2.015 12 4.5zm-11.5-12.5c-5.247 0-9.5 1.567-9.5 3.5s4.253 3.5 9.5 3.5 9.5-1.567 9.5-3.5-4.253-3.5-9.5-3.5zm-2-7c-3.038 0-5.5 1.343-5.5 3s2.462 3 5.5 3 5.5-1.343 5.5-3-2.462-3-5.5-3z"/></svg>
);
