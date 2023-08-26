import {
  mobile,
  backend,
  // creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  // starbucks,
  // tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  iconlogo,
  loginBg,
  MobileLogo,
  QRCode
} from '../assets'

export const QRCodeDownload = {
  icon: QRCode
}

export const logoNavbar = {
  icon: iconlogo,
}

export const loginImg = {
  img: loginBg,
}

export const navLinks = [
  {
    id: 'about',
    title: 'Giới thiệu',
  },
  {
    id: 'work',
    title: 'Hướng dẫn',
  },
  {
    id: 'contact',
    title: 'Liên hệ',
  },
]

const services = [
  {
    title: 'Web FPTU HCMAdventures',
    detail: 'Tìm hiểu rõ hơn về ứng dụng thực tế ảo để sinh viên khám phá, thi đấu và kiểm tra thứ hạng trên bảng xếp hạng',
    icon: web,
  },
  {
    title: 'Android FPTU HCMAdventures',
    detail: 'Chiêm ngưỡng cảnh quan tuyệt đẹp và tham gia các nhiệm vụ thú vị để giành những phần quà hấp dẫn thông qua thực tế ảo 3D',
    icon: mobile,
  },
  {
    title: 'Admin Web FPTU HCMAdventures',
    detail: 'Quản lý, nâng cấp và bảo trì server giúp cho học sinh có những trải nghiệm tốt nhất',
    icon: backend,
  },
  // {
  //   title: 'Content Creator',
  //   icon: creator,
  // },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Web FPTU HCMAdventures',
    icon: iconlogo,
    iconBg: '#383E56',
    step: 'Bước 1',
    points: [
      'Khám phá, hiểu rõ hơn về ứng dụng FPTU HCM3D Map Campus sử dụng công nghệ Unity là như thế nào. Ngoài ra còn biết được bảng xếp hạng Leaderboard vào mỗi sự kiện mà các học sinh cấp 3 đã tham gia FPTU HCMAdventures!',
      'Đặc biệt những học sinh đến từ trường cấp 3 có tham gia ứng dụng thực tế ảo 3D Map sẽ đăng ký tại đây',
      'Sau khi đăng ký (email tồn tại), sẽ nhận được tin trong email đó để xác thực',
      'Cuối cùng, khi xác thực thành công, bạn sẽ nhận được mã QR để tải ứng dụng về điện thoại của bạn (chỉ có trên Android)',
    ],
  },
  {
    title: 'Android FPTU HCMAdventures',
    icon: MobileLogo,
    iconBg: '#E6DEDD',
    step: 'Bước 2',
    points: [
      'Sau khi tải thành công và chọn ứng dụng, bạn sẽ đăng nhập tài khoản mà bạn trước đó đã tạo. Bạn có thể đăng nhập bằng cả 2 cách đều được!',
      'Mong bạn trước khi tham gia FPTU HCMAdventures, chắc chắn rằng bạn đã đọc và hiểu Hệ thống và Cách chơi',
      'Cuối cùng, bắt đầu cuộc hành trình và tìm kiếm những điểm số để nhận được phần quà hấp dẫn!',
      // 'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web FPTU HCMAdventures',
    icon: iconlogo,
    iconBg: '#383E56',
    step: 'Bước 3 - Cuối cùng',
    points: [
      'Sau khi sự kiện kết thúc, những học sinh - hay gọi là Player đã tham gia sẽ có thể xem bảng xếp hạng Leaderboard để biết mình ở vị trí nào. Nếu trong top 5 sẽ nhận được phần quà (vị trí càng cao thì giá trị phần quà càng lớn)',
      'Sau đó, những học sinh nhận được giải thưởng sẽ chờ Ban tổ chức gọi hay nhắn tin tại email trước đó đã đăng ký để nhận được phần quà nhé!',
      'Cuối cùng, cảm ơn các bạn đã quan tâm và theo dõi ứng dụng của chúng tôi <3. Mong các bạn có những trải nghiệm thật tốt, vui vẻ và nếu có đóng góp phát triển thì các bạn hãy mạnh dạn gửi tin nhắn cho đội ngũ tại mục Liên hệ',
    ],
  },
  // {
  //   title: 'Full stack Developer',
  //   company_name: 'Meta',
  //   icon: meta,
  //   iconBg: '#E6DEDD',
  //   date: 'Jan 2023 - Present',
  //   points: [
  //     'Developing and maintaining web applications using React.js and other related technologies.',
  //     'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
  //     'Implementing responsive design and ensuring cross-browser compatibility.',
  //     'Participating in code reviews and providing constructive feedback to other developers.',
  //   ],
  // },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/',
  },
]

export { services, technologies, experiences, testimonials, projects }
