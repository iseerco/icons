import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrChartScatter3d = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.84,23.13c.2,.19,.22,.5,.03,.71-.1,.11-.23,.16-.37,.16-.12,0-.24-.04-.34-.13L12,13.68,.84,23.87c-.2,.19-.52,.17-.71-.03-.19-.2-.17-.52,.03-.71L11.5,12.78V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V12.78l11.34,10.35ZM17,2c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Zm6,5c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Zm-14,13c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1Zm7,2c-.55,0-1,.45-1,1s.45,1,1,1,1-.45,1-1-.45-1-1-1ZM7,7c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1ZM1,2c.55,0,1-.45,1-1S1.55,0,1,0,0,.45,0,1s.45,1,1,1ZM3,13c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Zm16,0c.55,0,1-.45,1-1s-.45-1-1-1-1,.45-1,1,.45,1,1,1Z"/></svg>

);
