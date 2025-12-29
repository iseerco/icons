import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ClockTwo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm3.964,10.866l-3.464,2c-.155,.089-.327,.134-.5,.134s-.345-.045-.5-.134c-.31-.179-.5-.509-.5-.866V6c0-.553,.448-1,1-1s1,.447,1,1v4.268l1.964-1.134c.477-.277,1.089-.112,1.366,.366,.276,.479,.112,1.09-.366,1.366Z"/></svg>

);
