import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleDoubleSmallDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,20c-.534,0-1.036-.208-1.414-.586l-5.281-5.281,1.414-1.414,5.281,5.281,5.281-5.281,1.414,1.414-5.281,5.281c-.378,.378-.88,.586-1.414,.586Zm.825-7.001l5.871-5.871-1.414-1.414-5.281,5.282L6.719,5.714l-1.414,1.414,5.873,5.874c.227,.225,.523,.337,.821,.337s.598-.113,.826-.34Z"/></svg>

);
