import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsHeartHalf = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,23.48s-.96-.69-1.12-.8C4.1,17.42,0,12.36,0,8.06c-.07-1.96,.61-3.84,1.87-5.16,1.2-1.24,2.8-1.9,4.64-1.9,2.28,.05,4.37,1.31,5.47,3.29,.01,0,1.02,1.44,1.02,3.75v15.43ZM6.5,2c-1.55,0-2.91,.55-3.91,1.59-1.08,1.12-1.66,2.74-1.59,4.44,0,3.84,3.9,8.62,11,13.51V8.05c0-1.98-.85-3.21-.86-3.22-.96-1.72-2.72-2.79-4.63-2.83Z"/></svg>

);
