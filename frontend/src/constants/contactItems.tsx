import { FaHouse } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import type { ContactItem } from '../types/contactIems';

export const contactItems:ContactItem[] = [
  {
    icon: <MdEmail size={17} />,
    label: "contato@iep.ufpi.edu.br",
  },
  {
    icon: <FaPhoneAlt size={15} />,
    label: "+55 (86) 3333-3333",
  },
  {
    icon: <FaHouse size={24} />,
    label: "Rua João Cabral, 1234 - Ininga, Teresina - PI, 64049-550",
  },
];