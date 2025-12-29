import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MakeupBrush = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m10.427 9.841-2.12 1.824 4.048 4.047 1.821-2.122zm5.055 2.227 8.46-9.857-2.153-2.153-9.843 8.474zm-7.436 11.932h-1.646a6.407 6.407 0 0 1 -6.4-6.4v-1.632l6.615-3.353 4.731 4.731z"/></svg>
);
