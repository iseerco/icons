import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentPen = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm5.121,11.122l-6.879,6.878H6v-4.243l6.879-6.878c1.17-1.17,3.072-1.17,4.242,0,.566,.566,.879,1.32,.879,2.121s-.313,1.555-.879,2.122Zm-1.414-2.828c.189,.188,.293,.439,.293,.707s-.104,.518-.293,.707l-6.293,6.293h-1.414v-1.415l6.293-6.292c.391-.39,1.023-.39,1.414,0Z"/></svg>

);
