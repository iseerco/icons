import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CompassWest = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15.007,7.781l-1.831,4.216,1.759,4.144-6.991-4.138,7.062-4.222Zm8.993,4.219c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-8.648,.002l1.398-3.25c.533-.965,.182-2.185-.783-2.718-.61-.337-1.338-.335-1.971,.021L4.055,11.998l9.946,5.98c.309,.173,.645,.256,.977,.256,.699,0,1.38-.367,1.748-1.02,.327-.583,.339-1.303,.035-1.895l-1.408-3.317Z"/>
</svg>

);
