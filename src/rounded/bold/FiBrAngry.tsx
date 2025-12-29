import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrAngry = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm0,21a9.011,9.011,0,0,1-9-9C3.453.077,20.549.08,21,12A9.011,9.011,0,0,1,12,21Zm5.056-6.066a1.5,1.5,0,0,1-2.1,2.142,4.7,4.7,0,0,0-5.911,0,1.5,1.5,0,0,1-2.1-2.143C9.436,12.4,14.587,12.415,17.056,14.934ZM18,8.5a1.5,1.5,0,0,1-1,1.415A2,2,0,0,1,15,12h-.5l0-.018h-.034C11.514,11.616,13.362,6.759,16.5,7A1.5,1.5,0,0,1,18,8.5ZM7,9.915A1.5,1.5,0,0,1,7.5,7c3.163-.242,4.99,4.668,2,5H9A2,2,0,0,1,7,9.915Z"/></svg>

);
