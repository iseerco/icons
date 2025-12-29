import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsEnvelope = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21.5,2H2.5C1.122,2,0,3.122,0,4.5V22H24V4.5c0-1.378-1.122-2.5-2.5-2.5ZM2.5,3H21.5c.534,0,1,.282,1.266,.703L14.494,11.975c-.662,.661-1.54,1.025-2.479,1.025h-.017c-.914-.017-1.826-.36-2.492-1.025L1.234,3.703c.266-.421,.732-.703,1.266-.703ZM1,21V4.883l7.799,7.799c.851,.851,1.98,1.318,3.177,1.318h.044c1.202,0,2.331-.467,3.182-1.318l7.799-7.799V21H1Z"/>
</svg>

);
