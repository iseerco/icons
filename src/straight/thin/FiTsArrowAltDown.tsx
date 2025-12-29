import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12.5,17V0h-1V17H4.786l5.846,6.389c.348,.389,.847,.611,1.368,.611s1.019-.222,1.366-.609l5.848-6.391h-6.714Zm.127,5.718l-.003,.004c-.322,.359-.923,.363-1.251-.004l-4.317-4.718h9.889l-4.317,4.718Z"/></svg>

);
