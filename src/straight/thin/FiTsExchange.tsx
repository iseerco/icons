import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsExchange = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.735,7H0v-1H22.734l-3.729-3.729,.707-.707,3.829,3.829c.61,.61,.61,1.604,0,2.214l-3.809,3.809-.707-.707,3.709-3.709ZM4.974,13.291l-.707-.707L.458,16.393c-.61,.61-.61,1.604,0,2.214l3.829,3.829,.707-.707-3.729-3.729H24v-1H1.265l3.709-3.709Z"/></svg>

);
