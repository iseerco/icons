import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsArrowsToDottedLine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,13c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm-4-2c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm8,2c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1ZM2,11c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm20,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-4,0c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-5.5-3.223V0h-1V7.777l-3.766-3.766-.707,.707,3.792,3.792c.315,.315,.735,.489,1.181,.489s.865-.174,1.18-.489l3.792-3.792-.707-.707-3.766,3.765Zm-1.681,7.712l-3.792,3.792,.707,.707,3.766-3.766v7.777h1v-7.777l3.766,3.765,.707-.707-3.792-3.792c-.63-.631-1.73-.631-2.361,0Z"/></svg>

);
