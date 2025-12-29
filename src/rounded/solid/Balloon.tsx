import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Balloon = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,9.378C22,4.215,17.514.015,12,.015S2,4.215,2,9.378c0,5.287,3.362,11.119,8.111,12.379-.254.382-.457.812-.583,1.246-.145.499.239.998.759.998h3.424c.52,0,.905-.498.759-.998-.126-.433-.329-.864-.583-1.246,4.749-1.26,8.111-7.092,8.111-12.379Zm-6.65,5.248c-.328.488-1.005.582-1.442.19-.363-.325-.411-.862-.141-1.267.492-.737.933-1.698,1.134-2.778.083-.448.477-.771.933-.771h.034c.599,0,1.064.549.945,1.137-.274,1.356-.839,2.563-1.463,3.489Z"/>
</svg>

);
