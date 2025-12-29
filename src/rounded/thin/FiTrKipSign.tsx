import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrKipSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,13c0,.28-.22,.5-.5,.5H7.46l12.35,9.61c.22,.17,.26,.48,.09,.7-.1,.13-.25,.19-.39,.19-.11,0-.22-.03-.31-.11L6,13.63v9.87c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5V13.5H2.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5h2.5V.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V12.32L19.16,.13c.2-.19,.52-.18,.71,.03s.17,.52-.03,.71L7.28,12.5h14.22c.28,0,.5,.22,.5,.5Z"/></svg>

);
