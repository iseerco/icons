import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFaceSmirking = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,21c-4.962,0-9-4.038-9-9S7.038,3,12,3s9,4.038,9,9-4.038,9-9,9Zm4.237-7.309l2.539,1.599c-.624,1.006-2.437,2.71-5.275,2.71h-5.5v-3h5.5c1.847,0,2.701-1.255,2.737-1.309Zm-1.237-3.691h-2v-2h4c1.105,0,2,.895,2,2s-.895,2-2,2-2-.895-2-2Zm-6,2c-1.105,0-2-.895-2-2h-2v-2h4c1.105,0,2,.895,2,2s-.895,2-2,2Z"/></svg>

);
