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
  QRCode,
  anhKiet,
  chiBao,
  dinhKhang,
  thayHoang,
  tuanThanh,
  vanTrung,
} from '../assets'

export const QRCodeDownload = {
  icon: QRCode,
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
    id: 'system',
    title: 'Cách chơi & Hệ thống',
  },
  {
    id: 'contact',
    title: 'Liên hệ',
  },
]

const services = [
  {
    title: 'Web FPTU HCMAdventures',
    detail:
      'Tìm hiểu rõ hơn về ứng dụng thực tế ảo để sinh viên khám phá, thi đấu và kiểm tra thứ hạng trên bảng xếp hạng',
    icon: web,
  },
  {
    title: 'Android FPTU HCMAdventures',
    detail:
      'Chiêm ngưỡng cảnh quan tuyệt đẹp và tham gia các nhiệm vụ thú vị để giành những phần quà hấp dẫn thông qua thực tế ảo 3D',
    icon: mobile,
  },
  {
    title: 'Admin Web FPTU HCMAdventures',
    detail:
      'Quản lý, nâng cấp và bảo trì server giúp cho học sinh có những trải nghiệm tốt nhất',
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
      'Khám phá, hiểu rõ hơn về ứng dụng FPTU HCM3D Map Campus sử dụng công nghệ Unity là như thế nào. Ngoài ra còn biết được bảng xếp hạng Leaderboard vào mỗi sự kiện mà các học sinh cấp 3 đã tham gia FPTU HCM Adventures!',
      'Trước khi tham gia ứng dụng FPTU HCM Adventures Mobile, khuyến khích nên xem video hướng dẫn về Cách chơi & Hệ thống',
      'Cuối cùng, scan QR Code bằng điện thoại để tải ứng dụng về điện thoại của bạn (chỉ có trên Android) tại mục Liên hệ',
    ],
  },
  {
    title: 'Android FPTU HCMAdventures',
    icon: MobileLogo,
    iconBg: '#E6DEDD',
    step: 'Bước 2',
    points: [
      'Sau khi tải thành công và mở ứng dụng, bạn sẽ đăng nhập tài khoản gồm email và passcode mà trước đó trường học đã cung cấp',
      'Một lần nữa, mong bạn trước khi tham gia FPTU HCM Adventures, chắc chắn rằng bạn đã xem video hướng dẫn về Cách chơi & Hệ thống',
      'Cuối cùng, bắt đầu cuộc hành trình và tìm kiếm những điểm số và cố gắng nằm trong top 10 để nhận được phần quà hấp dẫn!',
      // 'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Web FPTU HCMAdventures',
    icon: iconlogo,
    iconBg: '#383E56',
    step: 'Bước 3 - Cuối cùng',
    points: [
      'Sau khi sự kiện kết thúc, những bạn nào đã tham gia sẽ có thể xem bảng xếp hạng Leaderboard để biết mình ở vị trí nào. Nếu trong top 10 sẽ nhận được phần quà (vị trí càng cao thì giá trị phần quà càng lớn). Nếu muốn biết bản thân đang ở vị trí nào thì hãy đăng nhập tại đây',
      'Sau đó, những học sinh nhận được giải thưởng sẽ chờ Ban tổ chức gọi hay nhắn tin tại email trước đó đã đăng ký để nhận được phần quà nhé!',
      'Cuối cùng, cảm ơn các bạn đã quan tâm và theo dõi ứng dụng của chúng tôi <3. Mong các bạn có những trải nghiệm thật tốt, vui vẻ <3',
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
      'Phụ trách giám sát trực tiếp của chúng tôi, người đã hỗ trợ sâu rộng về công nghệ, hiểu biết kinh doanh và tài liệu',
    name: 'Nguyễn Thế Hoàng',
    designation: 'Giảng viên',
    company: 'Adventures Team',
    image: thayHoang,
  },
  {
    testimonial:
      'Phụ trách BE, hỗ trợ những BE khác, đảm nhiệm phần thiết kế game trên mobile app và làm tốt nhiệm vụ thúc đẩy team',
    name: 'Huỳnh Anh Kiệt',
    designation: 'Nhóm trưởng',
    company: 'Adventures Team',
    image: anhKiet,
  },
  {
    testimonial:
      'Hỗ trợ thiết kế database, đảm nhiện phần thiết kế game trên mobile app đặc biệt là về thiết kế giao diện',
    name: 'Đinh Thế Khang',
    designation: 'Thành viên',
    company: 'Adventures Team',
    image: dinhKhang,
  },
  {
    testimonial:
      'Phụ trách BE, thiết kế database và hiện thực một số các chức năng trong web',
    name: 'Nguyễn Tuấn Thành',
    designation: 'Thành viên',
    company: 'Adventures Team',
    image: tuanThanh,
  },
  {
    testimonial:
      'Phụ trách FE chính, thiết kế giao diện và hiện thực hầu hết các chức năng trên web',
    name: 'Lê Văn Trung',
    designation: 'Thành viên',
    company: 'Adventures Team',
    image: vanTrung,
  },
  {
    testimonial:
      'Phụ trách FE phụ & BA thiết kế giao diện, thiết kế database và kiểm tra các chức năng',
    name: 'Ngô Chí Bảo',
    designation: 'Thành viên',
    company: 'Adventures Team',
    image: chiBao,
  },
]

const projects = [
  {
    name: 'Vật phẩm ảo',
    description:
      'Vật phẩm được mô phỏng chân thật và đa dạng, thân thuộc với cuộc sống thường ngày của sinh viên.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'unity',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: carrent,
    source_code_link: 'https://github.com/VanTrung0307/fpt-3dmap-guest',
  },
  {
    name: 'Bản đồ đa dạng',
    description:
      'Bản đồ được xây dựng gần như sát với ngoài đời, nhiều ngóc ngach và nhiệm vụ ẩn đang đợi bản khám phá.',
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
        name: 'unity',
        color: 'pink-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/VanTrung0307/fpt-3dmap-guest',
  },
  {
    name: 'Nhân vật phong phú',
    description:
      'Nhiều nhân vật NPC được xây dựng với nhiều câu chuyện thú vị khác nhau và được mô phỏng từ ngoài đời.',
    tags: [
      {
        name: 'threejs',
        color: 'blue-text-gradient',
      },
      {
        name: 'unity',
        color: 'green-text-gradient',
      },
      {
        name: 'typescript',
        color: 'pink-text-gradient',
      },
    ],
    image: tripguide,
    source_code_link: 'https://github.com/VanTrung0307/fpt-3dmap-guest',
  },
]

export { services, technologies, experiences, testimonials, projects }
