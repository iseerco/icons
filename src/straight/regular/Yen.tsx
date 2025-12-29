import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Yen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.208.39-9.208 11.97-9.208-11.97-1.584 1.22 9.53 12.39h-5.738v2h6v2h-6v2h6v4h2v-4h6v-2h-6v-2h6v-2h-5.738l9.53-12.39z"/></svg>
);
