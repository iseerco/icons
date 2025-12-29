import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrSitemap = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,17h-.5v-1.5c0-2.48-2.02-4.5-4.5-4.5h-4.5V7h.5c1.1,0,2-.9,2-2V3c0-1.1-.9-2-2-2h-2c-1.1,0-2,.9-2,2v2c0,1.1,.9,2,2,2h.5v4H7c-2.48,0-4.5,2.02-4.5,4.5v1.5h-.5c-1.1,0-2,.9-2,2v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2h-.5v-1.5c0-1.93,1.57-3.5,3.5-3.5h4.5v5h-.5c-1.1,0-2,.9-2,2v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2h-.5v-5h4.5c1.93,0,3.5,1.57,3.5,3.5v1.5h-.5c-1.1,0-2,.9-2,2v2c0,1.1,.9,2,2,2h2c1.1,0,2-.9,2-2v-2c0-1.1-.9-2-2-2ZM10,5V3c0-.55,.45-1,1-1h2c.55,0,1,.45,1,1v2c0,.55-.45,1-1,1h-2c-.55,0-1-.45-1-1Zm-5,14v2c0,.55-.45,1-1,1H2c-.55,0-1-.45-1-1v-2c0-.55,.45-1,1-1h2c.55,0,1,.45,1,1Zm9,0v2c0,.55-.45,1-1,1h-2c-.55,0-1-.45-1-1v-2c0-.55,.45-1,1-1h2c.55,0,1,.45,1,1Zm9,2c0,.55-.45,1-1,1h-2c-.55,0-1-.45-1-1v-2c0-.55,.45-1,1-1h2c.55,0,1,.45,1,1v2Z"/></svg>

);
