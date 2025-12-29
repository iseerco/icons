import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlugCircleBolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M7,16h2v8h-2v-6c-3.309,0-6-2.691-6-6v-4H0v-2H4V0h2V6h5V0h2V6h4v2H3v4c0,2.206,1.794,4,4,4Zm17,1c0,3.86-3.141,7-7,7s-7-3.14-7-7,3.141-7,7-7,7,3.14,7,7Zm-2,0c0-2.757-2.243-5-5-5s-5,2.243-5,5,2.243,5,5,5,5-2.243,5-5Zm-4.104-.998h-1.001l1.269-1.893-1.664-1.109s-1.422,1.879-1.902,2.919c-.213,.462-.054,1.022,.249,1.431,.303,.408,.788,.652,1.297,.652h1.007l-1.31,1.881,1.659,1.117,1.732-2.508h0c.327-.493,.357-1.122,.077-1.644-.28-.522-.821-.846-1.413-.846Z"/>
</svg>

);
