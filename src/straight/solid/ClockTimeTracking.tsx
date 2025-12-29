import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockTimeTracking = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18,12c-3.314,0-6,2.686-6,6s2.686,6,6,6,6-2.686,6-6-2.686-6-6-6Zm1.293,8.793l-2.293-2.293v-3.414h2v2.586l1.707,1.707-1.414,1.414Zm-6.578,3.207H1v-14h17c-4.411,0-8,3.589-8,8,0,2.387,1.051,4.533,2.715,6ZM24,3v5H0V3C0,1.343,1.343,0,3,0h18c1.657,0,3,1.343,3,3Z"/>
</svg>

);
