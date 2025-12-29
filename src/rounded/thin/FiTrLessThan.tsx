import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrLessThan = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.5,24c-.066,0-.134-.013-.199-.041L1.8,14.638c-1.1-.448-1.827-1.515-1.8-2.649.026-1.09.737-2.077,1.811-2.515L23.299.042c.254-.107.549.004.659.257s-.004.548-.257.659L2.2,10.395c-.718.292-1.184.925-1.2,1.617-.018.723.46,1.407,1.187,1.704l21.512,9.325c.253.11.369.404.26.658-.082.188-.266.301-.459.301Z"/>
</svg>

);
