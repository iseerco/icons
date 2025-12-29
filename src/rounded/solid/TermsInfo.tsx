import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const TermsInfo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M13,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h7.726c-1.667-1.467-2.726-3.61-2.726-6s1.059-4.533,2.726-6H5c-.552,0-1-.448-1-1s.448-1,1-1H13c.552,0,1,.448,1,1,0,.033-.016,.061-.019,.094,1.183-.691,2.553-1.094,4.019-1.094V5c0-2.757-2.243-5-5-5ZM5,15h2c.552,0,1,.448,1,1s-.448,1-1,1h-2c-.552,0-1-.448-1-1s.448-1,1-1ZM13,7H5c-.552,0-1-.448-1-1s.448-1,1-1H13c.552,0,1,.448,1,1s-.448,1-1,1Zm5,5c-3.31,0-6,2.69-6,6s2.69,6,6,6,6-2.69,6-6-2.69-6-6-6Zm1,9c0,.55-.45,1-1,1s-1-.45-1-1v-2c0-.55,.45-1,1-1s1,.45,1,1v2Zm-1-4c-.83,0-1.5-.67-1.5-1.5s.67-1.5,1.5-1.5,1.5,.67,1.5,1.5-.67,1.5-1.5,1.5Z"/>
</svg>

);
