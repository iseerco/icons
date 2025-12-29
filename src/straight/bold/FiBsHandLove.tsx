import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsHandLove = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,13.5v-4c0-.828,.672-1.5,1.5-1.5s1.5,.672,1.5,1.5v4c0,.828-.672,1.5-1.5,1.5s-1.5-.672-1.5-1.5Zm5.5,1.5c.828,0,1.5-.672,1.5-1.5v-4c0-.828-.672-1.5-1.5-1.5s-1.5,.672-1.5,1.5v4c0,.828,.672,1.5,1.5,1.5ZM22.5,2c-.828,0-1.5,.672-1.5,1.5V21H11.025l-1.025-.818V1.58c0-.747-.511-1.44-1.248-1.56-.94-.153-1.752,.568-1.752,1.479v14.901l-3.64-2.928c-.866-.722-2.153-.604-2.874,.261-.722,.866-.605,2.153,.261,2.874l9.228,7.391h14.025V3.5c0-.828-.672-1.5-1.5-1.5Z"/></svg>

);
