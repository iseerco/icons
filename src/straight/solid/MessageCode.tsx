import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const MessageCode = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,0H3C1.346,0,0,1.346,0,3V20H6.923l3.748,3.156c.382,.34,.862,.509,1.338,.509,.467,0,.931-.163,1.292-.485l3.847-3.18h6.852V3c0-1.654-1.346-3-3-3ZM10.294,13.293l-1.414,1.414-3.298-3.299c-.375-.375-.583-.874-.583-1.405s.207-1.031,.583-1.407l3.298-3.298,1.414,1.414-3.298,3.299,3.298,3.282Zm8.123-1.884l-3.298,3.298-1.414-1.414,3.298-3.299-3.298-3.282,1.414-1.414,3.298,3.299c.375,.375,.583,.874,.583,1.406s-.207,1.03-.583,1.406Z"/></svg>

);
