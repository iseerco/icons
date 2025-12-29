import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CupTogo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.999,5h-1.282l-.548-2.616c-.29-1.381-1.524-2.384-2.936-2.384H5.767c-1.412,0-2.646,1.003-2.937,2.385l-.547,2.615H.999v2h1.205l1.67,14.347c.176,1.513,1.457,2.653,2.979,2.653h10.291c1.523,0,2.804-1.141,2.979-2.653l1.67-14.347h1.205v-2ZM4.788,2.795c.097-.461.508-.795.979-.795h12.466c.471,0,.882.334.979.795l.462,2.205H4.326l.462-2.205Zm.012,9.205h14.399l-.582,5H5.382l-.582-5Zm12.345,10H6.854c-.507,0-.935-.38-.993-.884l-.246-2.116h12.769l-.246,2.116c-.059.504-.486.884-.993.884Zm2.287-12H4.567l-.349-3h15.563l-.349,3Z"/>
</svg>

);
