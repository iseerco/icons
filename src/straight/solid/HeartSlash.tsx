import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HeartSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,7.596c0-3.584-2.916-6.5-6.5-6.5-2.287,0-4.338,1.355-5.5,3.341-1.162-1.986-3.213-3.341-5.5-3.341-1.115,0-2.192,.298-3.155,.835L1.457,.043,.043,1.457,22.543,23.957l1.414-1.414-5.141-5.141c3.426-3.603,5.184-6.902,5.184-9.806Zm-8.075,12.572c-1.385,1.202-2.603,2.117-3.344,2.646l-.581,.415-.581-.415C9.512,21.451,0,14.316,0,7.596c0-.964,.223-1.892,.616-2.737l15.309,15.309Z"/>
</svg>

);
