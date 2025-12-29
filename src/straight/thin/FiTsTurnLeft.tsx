import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTurnLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,10.5v11.5h-1v-11.5c0-.827-.673-1.5-1.5-1.5H1.25l6.604,6.647-.709.705L.469,9.632c-.302-.301-.469-.704-.469-1.132s.167-.831.47-1.133L7.146.647l.709.705L1.25,8h20.25c1.379,0,2.5,1.122,2.5,2.5Z"/>
</svg>

);
