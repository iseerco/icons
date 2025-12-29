import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MessageCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.12,14.707l-1.414-1.414,3.298-3.299-3.298-3.282,1.414-1.414,3.298,3.299c.375,.375,.583,.874,.583,1.406s-.207,1.03-.583,1.406l-3.298,3.298Zm-4.825-1.414l-3.298-3.282,3.298-3.299-1.414-1.414-3.298,3.298c-.376,.376-.583,.875-.583,1.407s.207,1.03,.583,1.405l3.298,3.299,1.414-1.414Zm3.007,9.887l3.847-3.18h6.852V3c0-1.654-1.346-3-3-3H3C1.346,0,0,1.346,0,3V20H6.923l3.748,3.156c.382,.34,.862,.509,1.338,.509,.467,0,.931-.163,1.292-.485ZM2,3c0-.552,.449-1,1-1H21c.551,0,1,.448,1,1v15h-5.571l-4.449,3.645-4.326-3.645H2V3Z"/></svg>

);
