import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11.5H7V4.785L.61,10.632c-.388,.348-.61,.847-.61,1.368s.222,1.019,.608,1.367l6.392,5.848v-6.715H24v-1ZM6,16.944L1.282,12.627l-.004-.003c-.18-.161-.278-.383-.278-.624s.099-.463,.282-.627L6,7.056v9.889Z"/></svg>

);
