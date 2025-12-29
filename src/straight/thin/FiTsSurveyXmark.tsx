import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsSurveyXmark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11.604,7.604l-1.896,1.896,1.896,1.896-.707,.707-1.896-1.896-1.896,1.896-.707-.707,1.896-1.896-1.896-1.896,.707-.707,1.896,1.896,1.896-1.896,.707,.707Zm1.396,2.396h5v-1h-5v1Zm-2.104,3.896l-1.896,1.896-1.896-1.896-.707,.707,1.896,1.896-1.896,1.896,.707,.707,1.896-1.896,1.896,1.896,.707-.707-1.896-1.896,1.896-1.896-.707-.707Zm2.104,3.104h5v-1h-5v1ZM21,2V21.5c0,1.379-1.121,2.5-2.5,2.5H5.5c-1.379,0-2.5-1.121-2.5-2.5V2h5.05c.232-1.14,1.243-2,2.45-2h3c1.207,0,2.218,.86,2.45,2h5.05Zm-1,1h-5v-.5c0-.827-.673-1.5-1.5-1.5h-3c-.827,0-1.5,.673-1.5,1.5v.5H4V21.5c0,.827,.673,1.5,1.5,1.5h13c.827,0,1.5-.673,1.5-1.5V3Z"/>
</svg>

);
