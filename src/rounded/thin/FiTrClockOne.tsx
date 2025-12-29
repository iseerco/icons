import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrClockOne = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm-.1,11.8l3-4c.165-.221,.12-.534-.101-.7-.22-.165-.533-.121-.7,.1l-2.1,2.8V5.5c0-.276-.224-.5-.5-.5s-.5,.224-.5,.5v7c0,.215,.138,.406,.342,.474,.052,.018,.105,.026,.158,.026,.154,0,.304-.072,.4-.2Z"/></svg>

);
