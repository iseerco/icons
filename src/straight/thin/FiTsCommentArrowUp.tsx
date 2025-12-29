import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCommentArrowUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm11,23H12c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11v11ZM13.465,6.588l3.889,3.889-.707,.707-3.889-3.889c-.077-.077-.164-.139-.258-.185v10.89h-1V7.163c-.048,.032-.094,.069-.136,.111l-3.91,3.91-.707-.707,3.91-3.91c.767-.768,2.027-.759,2.808,.021Z"/></svg>

);
