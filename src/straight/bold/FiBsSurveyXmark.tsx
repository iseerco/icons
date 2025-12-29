import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsSurveyXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M16.662,2c-.562-1.182-1.769-2-3.162-2h-3c-1.394,0-2.6,.818-3.162,2H2V20.5c0,1.93,1.57,3.5,3.5,3.5h13c1.93,0,3.5-1.57,3.5-3.5V2h-5.338Zm2.338,18.5c0,.275-.225,.5-.5,.5H5.5c-.275,0-.5-.225-.5-.5V5h5v-1.5c0-.275,.225-.5,.5-.5h3c.275,0,.5,.225,.5,.5v1.5h5v15.5Zm-7.37-11.716l-1.254,1.254,1.254,1.254-1.414,1.414-1.254-1.254-1.254,1.254-1.414-1.414,1.254-1.254-1.254-1.254,1.414-1.414,1.254,1.254,1.254-1.254,1.414,1.414Zm0,7l-1.254,1.254,1.254,1.254-1.414,1.414-1.254-1.254-1.254,1.254-1.414-1.414,1.254-1.254-1.254-1.254,1.414-1.414,1.254,1.254,1.254-1.254,1.414,1.414Zm1.37-6.784h4v3h-4v-3Zm0,6h4v3h-4v-3Z"/>
</svg>

);
