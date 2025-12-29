import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCommentAltMiddleTop = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.982,.705l3.985,3.295h7.032V21.5c0,1.378-1.121,2.5-2.5,2.5H2.5c-1.379,0-2.5-1.122-2.5-2.5V4H7.105L11.004,.716c.285-.253,.645-.379,1.001-.379,.352,0,.702,.123,.978,.368ZM1,21.5c0,.827,.673,1.5,1.5,1.5H21.5c.827,0,1.5-.673,1.5-1.5V5h-6.392L12.332,1.464c-.188-.167-.474-.169-.674,.008l-4.188,3.527H1V21.5Z"/></svg>

);
