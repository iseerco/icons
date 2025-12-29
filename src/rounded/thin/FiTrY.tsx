import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrY = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.811,.108c-.216-.172-.53-.136-.702,.081L12,11.694,2.892,.189c-.172-.217-.486-.253-.702-.081-.217,.171-.253,.485-.081,.702L11.5,12.674v10.826c-.01,.649,1.01,.649,1,0V12.674L21.892,.811c.172-.217,.136-.531-.081-.702Z"/></svg>

);
