import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCircleN = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m17,6.5v9.824c0,.822-.482,1.482-1.201,1.642-.104.023-.208.034-.311.034-.595,0-1.15-.375-1.442-1.002l-4.99-9.554c-.154-.33-.396-.487-.64-.434-.192.042-.417.242-.417.665v9.824c0,.276-.224.5-.5.5s-.5-.224-.5-.5V7.676c0-.822.482-1.482,1.201-1.642.709-.159,1.41.233,1.752.968l4.99,9.554c.154.329.393.485.64.434.192-.042.417-.242.417-.665V6.5c0-.276.224-.5.5-.5s.5.224.5.5Zm7,5.5c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0s12,5.383,12,12Zm-1,0c0-6.065-4.935-11-11-11S1,5.935,1,12s4.935,11,11,11,11-4.935,11-11Z"/></svg>

);
