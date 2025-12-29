import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Podium = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23,10h-1.981c-.013,0-.026,0-.039,0H4v-3c0-1.654,1.346-3,3-3h.172c.413,1.164,1.524,2,2.828,2h3c1.654,0,3-1.346,3-3s-1.346-3-3-3h-3c-1.304,0-2.415,.836-2.828,2h-.172c-2.757,0-5,2.243-5,5v3H1c-.552,0-1,.448-1,1s.448,1,1,1h1.153l1.304,7.821c.403,2.422,2.478,4.179,4.932,4.179h7.223c2.455,0,4.529-1.757,4.932-4.179l1.304-7.821h1.153c.552,0,1-.448,1-1s-.448-1-1-1ZM10,2h3c.551,0,1,.449,1,1s-.449,1-1,1h-3c-.551,0-1-.449-1-1s.449-1,1-1Zm8.571,17.493c-.242,1.452-1.487,2.507-2.959,2.507h-7.223c-1.473,0-2.717-1.055-2.959-2.507l-1.249-7.493h15.639l-1.249,7.493Z"/></svg>

);
