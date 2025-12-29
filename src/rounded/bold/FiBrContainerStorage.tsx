import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrContainerStorage = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,18.086V5.914c.583-.206,1-.761,1-1.414,0-.829-.671-1.5-1.5-1.5H1.5c-.829,0-1.5.671-1.5,1.5,0,.653.417,1.208,1,1.414v12.171c-.583.206-1,.761-1,1.414,0,.829.671,1.5,1.5,1.5h21c.829,0,1.5-.671,1.5-1.5,0-.653-.417-1.208-1-1.414Zm-3-.086H4V6h16v12Zm-5-3.5v-5c0-.829.671-1.5,1.5-1.5s1.5.671,1.5,1.5v5c0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5Zm-4.5,0v-5c0-.829.671-1.5,1.5-1.5s1.5.671,1.5,1.5v5c0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5Zm-4.5,0v-5c0-.829.671-1.5,1.5-1.5s1.5.671,1.5,1.5v5c0,.829-.671,1.5-1.5,1.5s-1.5-.671-1.5-1.5Z"/>
</svg>

);
