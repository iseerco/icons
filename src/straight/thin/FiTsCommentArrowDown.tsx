import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCommentArrowDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12h12V12C24,5.383,18.617,0,12,0Zm11,23H12c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11v11Zm-6.354-10.184l.707,.707-3.889,3.889c-.394,.394-.91,.591-1.423,.591-.503,0-1.004-.19-1.385-.57l-3.91-3.91,.707-.707,3.91,3.91c.042,.042,.088,.079,.136,.112V6h1v10.891c.093-.047,.181-.109,.258-.186l3.889-3.889Z"/></svg>

);
