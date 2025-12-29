import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Tax = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.414,5h-4.414V.586l4.414,4.414Zm-9.529,8.63c-.046-.02-.087-.03-.127-.03-.041,0-.08.01-.118.031-.098.053-.174.162-.201.29l-.726,3.079h2.081l-.701-3.019c-.047-.212-.151-.326-.207-.351Zm10.115-6.63v17H2V3c0-1.657,1.343-3,3-3h10v7h7Zm-15.5,6.6h2v-1.6H3v1.6h1.9v6.4h1.6v-6.4Zm8.6,6.4l-1.447-6.373c-.146-.668-.565-1.213-1.118-1.459-.251-.112-.514-.168-.776-.168-.305,0-.607.075-.882.225-.509.277-.875.776-1.001,1.356l-1.475,6.418h1.607l.33-1.4h2.829l.325,1.4h1.609Zm4.106-3.999l1.994-4h-1.812l-1.088,2.182-1.088-2.182h-1.812l1.994,4-1.994,4h1.812l1.088-2.182,1.088,2.182h1.812l-1.994-4Z"/>
</svg>

);
