import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsC = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.956,24h-.955c-5.515,0-10.001-4.527-10.001-10.091v-3.818C2,4.527,6.487,0,12.001,0h.955c3.858,0,7.323,2.148,9.041,5.605l-2.688,1.335c-1.207-2.43-3.642-3.94-6.354-3.94h-.955c-3.861,0-7.001,3.181-7.001,7.091v3.818c0,3.91,3.141,7.091,7.001,7.091h.955c2.664,0,5.079-1.472,6.305-3.841l2.664,1.378c-1.742,3.37-5.179,5.463-8.969,5.463Z"/></svg>

);
