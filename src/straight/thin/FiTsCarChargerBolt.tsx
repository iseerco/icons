import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCarChargerBolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11.185 7.287 2.952-3.13.727.688-2.813 2.973c-.064.063-.075.183.054.183h2.791c.853-.028 1.415 1.018.919 1.713l-2.952 3.13-.727-.688 2.789-2.948c.059-.053.114-.208-.031-.208h-2.791c-.407 0-.78-.223-.973-.582-.192-.359-.172-.792.053-1.131zm12.815-3.287v9h-4v3h-10.151l-2.262 3.751c-.637 1.17-2.255 1.611-3.405.921l-1.034-.591-2.227 3.897-.868-.496 2.227-3.897-1.033-.59c-1.18-.644-1.621-2.258-.93-3.411l7.412-12.312c.791-1.397 2.291-2.272 3.91-2.272h8.362v3h4zm-5-2h-7.362c-1.259 0-2.426.681-3.046 1.776l-7.413 12.314c-.407.68-.14 1.657.564 2.036l2.935 1.677c.694.415 1.66.15 2.046-.558l2.56-4.245h9.716zm4 3h-3v7h3z"/></svg>
);
