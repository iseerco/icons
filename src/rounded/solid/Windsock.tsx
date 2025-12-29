import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Windsock = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M6,4.294l3,.571V17.219l-3,.572Zm8,1.524-3-.572V16.838l3-.571Zm5,.952L16,6.2v9.687l3-.572ZM4,3.913l-1-.19A2.008,2.008,0,0,0,2.433.045,2,2,0,0,0,1,3.723V23a1,1,0,0,0,2,0V18.362l1-.19ZM21,7.151v7.783a3.12,3.12,0,0,0,3-3.054V10.205A3.119,3.119,0,0,0,21,7.151Z"/></svg>

);
