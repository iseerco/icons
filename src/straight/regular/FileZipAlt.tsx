import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileZipAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19,0H5c-1.654,0-3,1.346-3,3V24H22V3c0-1.654-1.346-3-3-3Zm1,22H4V3c0-.551,.448-1,1-1h14c.552,0,1,.449,1,1V22Zm-7-10l1,5v1h-4v-1l1-5h2ZM7.34,3.654l-1.453,1.373-1.331-1.409,1.453-1.373,1.331,1.409Zm1.996,2.114l-1.453,1.373-1.331-1.409,1.453-1.373,1.331,1.409Zm1.208,4.191l1.455-1.373h0s0,0,0,0l1.455,1.373-.456,1.041h-2l-.456-1.041Zm3.455-3.487l1.453,1.373-1.331,1.409-1.453-1.373,1.331-1.409Zm3.992-4.228l1.453,1.373-1.331,1.409-1.453-1.373,1.331-1.409Zm-6.659,5.637l-1.453,1.373-1.331-1.409,1.453-1.373,1.331,1.409Zm4.663-3.523l1.453,1.373-1.331,1.409-1.453-1.373,1.331-1.409Z"/>
</svg>

);
