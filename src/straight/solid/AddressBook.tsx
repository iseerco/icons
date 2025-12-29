import React from 'react';
import type { IconProps } from '../../types';

export const AddressBook: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M20,0H3V3H1V5H3V7H1V9H3v2H1v2H3v2H1v2H3v2H1v2H3v3H20a3,3,0,0,0,3-3V3A3,3,0,0,0,20,0ZM13,4A3.5,3.5,0,1,1,9.5,7.5,3.5,3.5,0,0,1,13,4Zm6,14H17V16a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v2H7V16a3,3,0,0,1,3-3h6a3,3,0,0,1,3,3ZM11.5,7.5A1.5,1.5,0,1,1,13,9,1.5,1.5,0,0,1,11.5,7.5Z"/></svg>
);

AddressBook.displayName = 'AddressBook';
