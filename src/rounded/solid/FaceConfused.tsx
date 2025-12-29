import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FaceConfused = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm-3.5,8c.828,0,1.5,.672,1.5,1.5s-.672,1.5-1.5,1.5-1.5-.672-1.5-1.5,.672-1.5,1.5-1.5Zm7.5,8h-4c-2.331,0-4.316,1.73-4.336,1.747-.19,.169-.427,.252-.663,.252-.275,0-.55-.113-.747-.336-.366-.412-.331-1.041,.08-1.409,.103-.092,2.559-2.254,5.666-2.254h4c.553,0,1,.447,1,1s-.447,1-1,1Zm-.5-5c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5,.672,1.5,1.5-.672,1.5-1.5,1.5Z"/></svg>

);
