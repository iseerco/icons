import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CommentArrowUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm4.293,12.038l-3.293-3.293v9.256h-2V8.845l-3.192,3.192-1.414-1.414,3.91-3.91c.963-.961,2.54-.954,3.515,.021l3.889,3.89-1.414,1.414Z"/></svg>

);
