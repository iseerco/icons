import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LocationArrow = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13.595,23.999c-.229,0-.455-.021-.674-.061-1.467-.267-2.947-1.463-2.947-3.532v-6.394H3.595C1.524,14.013.328,12.532.061,11.064c-.267-1.467.331-3.273,2.268-4.003L18.723.268c1.473-.555,3.047-.216,4.136.874,1.091,1.09,1.43,2.663.886,4.105l-6.83,16.457c-.611,1.621-2.011,2.295-3.319,2.295Z"/>
</svg>

);
