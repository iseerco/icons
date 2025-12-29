import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LariSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,22h11v2H1v-2H5.7c-2.83-1.99-4.7-5.28-4.7-9C1,7.98,4.39,3.74,9,2.43V0h2V2.05c.33-.03,.66-.05,1-.05s.67,.02,1,.05V0h2V2.43c4.61,1.31,8,5.55,8,10.57h-2c0-3.91-2.51-7.24-6-8.47v7.47h-2V4.06c-.33-.04-.66-.06-1-.06s-.67,.02-1,.06v7.94h-2V4.53c-3.49,1.24-6,4.57-6,8.47,0,4.96,4.04,9,9,9Z"/></svg>

);
