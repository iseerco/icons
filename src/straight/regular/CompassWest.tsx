import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CompassWest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm3.967-15.966c-.61-.337-1.338-.335-1.971,.021L4.055,11.998l9.946,5.98c.309,.173,.645,.256,.977,.256,.699,0,1.38-.367,1.748-1.02,.327-.583,.339-1.303,.035-1.895l-1.408-3.317,1.398-3.25c.533-.965,.182-2.185-.783-2.718Zm-1.031,10.106l.07,.107-7.062-4.246,7.062-4.222-1.831,4.216,1.759,4.144Z"/>
</svg>

);
