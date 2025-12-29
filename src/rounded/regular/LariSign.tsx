import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LariSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,23c0,.55-.45,1-1,1H2c-.55,0-1-.45-1-1s.45-1,1-1h3.68c-2.83-1.99-4.68-5.28-4.68-9C1,7.97,4.39,3.72,9,2.42V1c0-.55,.45-1,1-1s1,.45,1,1v1.05c.33-.03,.66-.05,1-.05s.67,.02,1,.05V1c0-.55,.45-1,1-1s1,.45,1,1v1.42c4.61,1.31,8,5.56,8,10.58,0,.55-.45,1-1,1s-1-.45-1-1c0-3.91-2.51-7.25-6-8.49v6.49c0,.55-.45,1-1,1s-1-.45-1-1V4.06c-.33-.04-.66-.06-1-.06s-.67,.02-1,.06v6.94c0,.55-.45,1-1,1s-1-.45-1-1V4.51c-3.49,1.24-6,4.57-6,8.49,0,4.96,4.04,9,9,9h10c.55,0,1,.45,1,1Z"/></svg>

);
