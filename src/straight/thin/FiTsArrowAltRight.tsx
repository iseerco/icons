import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.394,10.635l-6.394-5.85v6.715H0v1H17v6.715l6.392-5.848c.387-.348,.608-.846,.608-1.367s-.223-1.02-.606-1.365Zm-.672,1.989l-4.722,4.32V7.056l4.722,4.32c.18,.161,.278,.383,.278,.624s-.099,.463-.278,.624Z"/></svg>

);
