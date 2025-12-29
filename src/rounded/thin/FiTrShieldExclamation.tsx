import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrShieldExclamation = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11.5,14.5V5.5c0-.276.224-.5.5-.5s.5.224.5.5v9c0,.276-.224.5-.5.5s-.5-.224-.5-.5Zm10.5-7.911l-.002,5.346c0,7.5-7.172,10.968-9.37,11.852,0,0-.416.214-.627.214s-.649-.266-.649-.266c-2.194-1.097-9.354-5.189-9.354-11.8l.002-5.346c0-1.943,1.239-3.659,3.084-4.271L11.843.077c.102-.033.213-.033.314,0l6.759,2.24c1.845.612,3.084,2.328,3.084,4.271Zm-1,0c0-1.511-.964-2.847-2.398-3.322l-6.602-2.188-6.602,2.188c-1.435.476-2.398,1.812-2.398,3.322l-.002,5.346c0,6.037,6.736,9.873,8.801,10.905l.224.112.232-.094c2.051-.825,8.744-4.051,8.744-10.924l.002-5.346Zm-9,10.411c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Z"/>
</svg>

);
