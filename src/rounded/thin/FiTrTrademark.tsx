import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTrademark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11,5.5c0,.28-.22,.5-.5,.5H6v12.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5V6H.5c-.28,0-.5-.22-.5-.5s.22-.5,.5-.5H10.5c.28,0,.5,.22,.5,.5Zm11.44-.5c-.58,0-1.11,.32-1.38,.83l-3.05,5.62-3.05-5.62c-.27-.52-.8-.84-1.38-.84-.86,0-1.56,.7-1.56,1.56v11.94c0,.28,.22,.5,.5,.5s.5-.22,.5-.5V6.56c0-.31,.25-.56,.56-.56,.21,0,.4,.12,.5,.31l3.49,6.43c.17,.32,.7,.32,.88,0l3.5-6.44c.1-.19,.29-.3,.5-.3,.31,0,.56,.25,.56,.56v11.94c0,.28,.22,.5,.5,.5s.5-.22,.5-.5V6.56c0-.86-.7-1.56-1.56-1.56Z"/></svg>

);
