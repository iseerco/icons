import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltToLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11.5H8V4.875L1.612,10.644c-.389,.345-.612,.839-.612,1.356s.224,1.013,.61,1.354l6.39,5.771v-6.625H24v-1ZM7,16.875L2.276,12.609c-.178-.158-.276-.374-.276-.609s.098-.451,.276-.609L7,7.125v9.75ZM1,3V21H0V3H1Z"/></svg>

);
