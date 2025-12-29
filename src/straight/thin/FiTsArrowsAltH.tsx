import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowsAltH = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.393,10.556l-6.393-5.85v6.794H7V4.706L.611,10.552c-.389,.349-.611,.847-.611,1.369s.222,1.019,.609,1.367l6.391,5.848v-6.635h10v6.635l6.391-5.848c.387-.348,.609-.846,.609-1.367s-.223-1.021-.607-1.365ZM6,16.865L1.282,12.548l-.004-.004c-.18-.161-.278-.382-.278-.624s.099-.463,.282-.628L6,6.977v9.888Zm16.722-4.32l-4.722,4.32V6.977l4.722,4.32c.18,.161,.278,.382,.278,.624s-.099,.463-.278,.624Z"/></svg>

);
