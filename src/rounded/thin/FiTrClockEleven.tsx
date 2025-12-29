import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrClockEleven = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm.658,11.974c.204-.068,.342-.259,.342-.474V5.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v5.5l-2.1-2.8c-.166-.222-.479-.266-.7-.1-.221,.166-.266,.479-.1,.7l3,4c.096,.128,.246,.2,.4,.2,.053,0,.106-.008,.158-.026Z"/></svg>

);
