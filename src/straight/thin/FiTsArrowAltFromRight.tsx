import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowAltFromRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,3V11.5H7V4.865L.609,10.712c-.387,.348-.609,.846-.609,1.367s.223,1.021,.607,1.365l6.393,5.85v-6.794H23v8.5h1V3h-1ZM6,17.023L1.278,12.703c-.18-.161-.278-.382-.278-.624s.099-.463,.278-.624L6,7.135v9.888Z"/></svg>

);
