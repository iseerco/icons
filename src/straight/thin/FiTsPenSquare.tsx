import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPenSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,0H2.5C1.122,0,0,1.121,0,2.5v21.5h24V2.5c0-1.379-1.122-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5ZM14.732,5.732L5,15.465v3.535h3.536l9.732-9.732c.975-.975.975-2.561,0-3.535-.943-.945-2.592-.945-3.535,0Zm-6.611,12.268h-2.122v-2.121l7.336-7.336,2.121,2.121-7.336,7.336Zm9.439-9.439l-1.396,1.397-2.121-2.121,1.396-1.396c.566-.566,1.555-.566,2.121,0,.585.585.585,1.536,0,2.121Z"/></svg>

);
