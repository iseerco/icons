import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrC = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.956,24h-.955c-5.515,0-10.001-4.527-10.001-10.091v-3.818C2,4.527,6.487,0,12.001,0h.955c3.763,0,7.168,2.147,8.887,5.604,.369,.742,.066,1.643-.675,2.011-.741,.37-1.643,.067-2.011-.675-1.227-2.467-3.545-3.94-6.201-3.94h-.955c-3.861,0-7.001,3.181-7.001,7.091v3.818c0,3.91,3.141,7.091,7.001,7.091h.955c2.646,0,4.969-1.436,6.211-3.84,.381-.737,1.29-1.023,2.021-.644,.736,.38,1.024,1.285,.645,2.021-1.741,3.37-5.143,5.463-8.877,5.463Z"/></svg>

);
