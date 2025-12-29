import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Circle1 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm1,17c0,.553-.448,1-1,1s-1-.447-1-1v-7.586l-.737,.737c-.391,.391-1.023,.391-1.414,0s-.391-1.023,0-1.414l2.444-2.444c.285-.286,.714-.374,1.09-.217,.374,.154,.617,.52,.617,.924v10Z"/></svg>

);
