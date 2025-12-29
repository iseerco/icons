import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSquareW = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21.5,0H2.5C1.121,0,0,1.121,0,2.5v21.5h24V2.5c0-1.379-1.121-2.5-2.5-2.5Zm1.5,23H1V2.5c0-.827.673-1.5,1.5-1.5h19c.827,0,1.5.673,1.5,1.5v20.5Zm-4.538-19h1.015l-2.623,14.833c-.116.611-.582,1.064-1.188,1.161-.587.083-1.197-.19-1.454-.651l-2.211-5.035-2.12,4.842c-.295.55-.796.845-1.33.861-.811.025-1.288-.559-1.404-1.152l-2.625-14.858h1.015l2.593,14.676c.033.168.176.301.363.33.187.025.374-.08.489-.294l3.018-6.896,3.106,7.082c.021.035.218.137.411.106.179-.028.316-.164.353-.353l2.591-14.652Z"/></svg>

);
