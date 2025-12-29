import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SurveyXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M15.829,2c-.413-1.164-1.525-2-2.829-2h-2c-1.304,0-2.416,.836-2.829,2H3V21c0,1.654,1.346,3,3,3h12c1.654,0,3-1.346,3-3V2h-5.171Zm-4.199,16.293l-1.414,1.414-1.254-1.254-1.254,1.254-1.414-1.414,1.254-1.254-1.254-1.254,1.414-1.414,1.254,1.254,1.254-1.254,1.414,1.414-1.254,1.254,1.254,1.254Zm0-7l-1.414,1.414-1.254-1.254-1.254,1.254-1.414-1.414,1.254-1.254-1.254-1.254,1.414-1.414,1.254,1.254,1.254-1.254,1.414,1.414-1.254,1.254,1.254,1.254Zm6.37,6.707h-5v-2h5v2Zm0-7h-5v-2h5v2Z"/>
</svg>

);
