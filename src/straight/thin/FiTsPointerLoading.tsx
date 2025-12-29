import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPointerLoading = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23.713,2.564c-.46-.605-1.332-.752-1.925-.3L9.8,12.529l5.996,.671-3.697,6.904,3.342,1.672,3.798-7.068,4.761,4.442V3.415c0-.304-.102-.605-.287-.851Zm-.713,14.285l-4.026-3.759-3.954,7.357-1.554-.777,3.908-7.301-5.174-.579L22.415,3.043c.103-.079,.359-.061,.502,.126,.053,.07,.083,.159,.083,.246v13.435ZM2,21c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm4,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm4,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/>
</svg>

);
