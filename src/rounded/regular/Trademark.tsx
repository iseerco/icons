import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Trademark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,6c0,.55-.45,1-1,1h-3v11c0,.55-.45,1-1,1s-1-.45-1-1V7H1c-.55,0-1-.45-1-1s.45-1,1-1H9c.55,0,1,.45,1,1Zm11.94-1c-.77,0-1.47,.42-1.82,1.09l-2.61,4.81-2.61-4.8c-.36-.68-1.06-1.1-1.83-1.1-1.14,0-2.06,.93-2.06,2.06v10.94c0,.55,.45,1,1,1s1-.45,1-1V7.06l.13-.02,3.49,6.43c.35,.64,1.41,.64,1.76,0l3.49-6.43s0,0,0,0c.02,0,.13,.03,.13,.02v10.94c0,.55,.45,1,1,1s1-.45,1-1V7.06c0-1.14-.93-2.06-2.06-2.06Z"/></svg>

);
