import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCardsBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M22.213,3.663L11.14,.101c-1.325-.385-2.714,.377-3.099,1.696l-.661,2.203H2.5c-1.379,0-2.5,1.122-2.5,2.5V24H16v-1.22l2.311,.872L23.9,6.759c.385-1.324-.378-2.714-1.688-3.096Zm-7.213,19.337H1V6.5c0-.827,.673-1.5,1.5-1.5H13.5c.827,0,1.5,.673,1.5,1.5V23ZM22.945,6.462l-5.256,15.887-1.689-.638V6.5c0-1.378-1.121-2.5-2.5-2.5h-5.077l.576-1.919c.232-.793,1.067-1.25,1.848-1.024l11.073,3.562c.793,.231,1.251,1.066,1.025,1.843Z"/>
</svg>

);
