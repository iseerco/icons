import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SmartGlasses = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m.014 8c.047-1.704 1.364-3 2.986-3h4v3zm20.986-3h-12v5h-8.805l.899 9h8.008l2.518-4.765c.105-.199.284-.229.38-.229.097 0 .274.03.38.229l2.518 4.765h8.007l1.096-11c0-1.654-1.346-3-3-3z"/></svg>
);
