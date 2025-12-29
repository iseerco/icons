import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltFromLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.391,10.712l-6.391-5.848v6.635H1V3H0V21H1V12.5H17v6.794l6.389-5.846c.389-.349,.611-.847,.611-1.369s-.222-1.019-.609-1.367Zm-.673,1.995l-4.718,4.316V7.135l4.718,4.316,.004,.004c.18,.161,.278,.382,.278,.624s-.099,.463-.282,.628Z"/></svg>

);
