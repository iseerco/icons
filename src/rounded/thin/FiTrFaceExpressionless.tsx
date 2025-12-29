import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrFaceExpressionless = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm-2.5-13h-3c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h3c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5Zm8.5-.5c0,.276-.224,.5-.5,.5h-3c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h3c.276,0,.5,.224,.5,.5Zm-1,6c0,.276-.224,.5-.5,.5H7.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h9c.276,0,.5,.224,.5,.5Z"/></svg>

);
