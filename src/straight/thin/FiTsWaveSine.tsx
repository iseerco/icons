import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsWaveSine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18,21c-3.688,0-5.466-5.063-6.483-8.871-1.461-5.47-3.266-8.129-5.517-8.129-2.897,0-5,4.206-5,10H0C0,7.523,2.468,3,6,3c3.687,0,5.466,5.063,6.483,8.871,1.461,5.47,3.266,8.129,5.517,8.129,2.897,0,5-4.206,5-10h1c0,6.477-2.468,11-6,11Z"/></svg>

);
