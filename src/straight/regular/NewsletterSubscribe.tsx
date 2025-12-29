import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const NewsletterSubscribe = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.769,9.344l-1.769-1.694V3c0-1.654-1.346-3-3-3H6c-1.654,0-3,1.346-3,3v4.652l-1.767,1.692C.451,10.094.002,11.146.002,12.231l-.002,11.769h24v-11.769c0-1.087-.449-2.14-1.231-2.888ZM6,2h12c.552,0,1,.448,1,1v9.242l-4.879,4.879c-1.133,1.133-3.109,1.133-4.242,0l-4.879-4.879V3c0-.552.448-1,1-1Zm16,20H2s-.004-9.865,0-9.913l6.465,6.448c.943.944,2.199,1.465,3.535,1.465s2.592-.521,3.535-1.465l6.465-6.45c.004.049,0,9.915,0,9.915Zm-12.414-10.586l-2.782-2.696,1.393-1.436,2.793,2.707,4.811-4.703,1.4,1.428-4.793,4.707c-.386.386-.895.579-1.405.579s-1.025-.195-1.416-.586Z"/>
</svg>

);
