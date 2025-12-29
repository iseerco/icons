import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaceSmirking = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,22c-5.514,0-10-4.486-10-10S6.486,2,12,2s10,4.486,10,10-4.486,10-10,10Zm5.155-7.535l1.695,1.061c-.062,.101-1.57,2.474-4.85,2.474h-6v-2h6c2.138,0,3.114-1.472,3.155-1.535Zm-2.069-3.465h-2.086v-2h3.5c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5c-.653,0-1.208-.417-1.414-1Zm-8,0h-2.086v-2h3.5c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5c-.653,0-1.208-.417-1.414-1Z"/></svg>

);
