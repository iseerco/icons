import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LaptopShield = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m18.456 13.756-.605-.304c-1.136-.567-4.851-2.701-4.851-6.271v-3.912c0-.862.551-1.624 1.37-1.896l4.13-1.369 4.13 1.37c.819.272 1.37 1.034 1.37 1.896v3.912c0 4.032-3.764 5.858-4.917 6.322l-.627.253zm-3.443 7.244.846-1h8.14v1c0 1.657-1.343 3-3 3h-17.999c-1.657 0-3-1.343-3-3v-1h8.145l.846 1h6.023zm4.816-5.642-1.463.591-1.413-.71c-1.394-.696-5.953-3.34-5.953-8.058v-1.181h-9v12h7.082l.846 1h4.157l.846-1h7.068v-3.8c-.886.595-1.701.97-2.171 1.158z"/></svg>
);
