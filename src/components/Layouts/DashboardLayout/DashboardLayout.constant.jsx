import { CiStar, CiViewList, CiGrid41, CiMicrochip } from 'react-icons/ci';

const SIDEBAR_ADMIN = [
  // {
  //   key: 'event',
  //   label: 'Beranda',
  //   href: '/beranda',
  //   icon: <CiGrid41 />,
  // },
  {
    key: 'category',
    label: 'Data Pendaftar',
    href: '/admin/data-pendaftar',
    icon: <CiViewList />,
  },
  {
    key: 'bobot',
    label: 'Data Bobot',
    href: '/admin/bobot',
    icon: <CiMicrochip />,
  },
  {
    key: 'banner',
    label: 'Hasil Seleksi ',
    href: '/admin/hasil-seleksi',
    icon: <CiStar />,
  },
];

export { SIDEBAR_ADMIN };
