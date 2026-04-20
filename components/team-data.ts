export type TeamMember = {
  name: string;
  role: string;
  qualification: string;
  image?: string;
  bio: string;
  accent: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: 'Yash',
    role: 'Founder',
    qualification: 'BCA, MCA',
    image: '/my_team/Yash.png',
    bio: 'Leads vision, client relationships, and the long-term direction of MMC Tech Solutions.',
    accent: 'Leadership',
  },
  {
    name: 'Ajay',
    role: 'CTO',
    qualification: 'BCA',
    image: '/my_team/Ajay.png',
    bio: 'Oversees technology planning, build quality, and technical execution across projects.',
    accent: 'Technology',
  },
  {
    name: 'Anoop',
    role: 'CEO',
    qualification: 'BCA, MCA',
    image: '/my_team/Anoop.png',
    bio: 'Drives operations, business strategy, and scalable growth for the company.',
    accent: 'Execution',
  },
  {
    name: 'Shuvham',
    role: 'Senior SEO Expert',
    qualification: 'B.Tech',
    image: '/my_team/Shuvham.png',
    bio: 'Builds search visibility strategies focused on rankings, traffic quality, and lead growth.',
    accent: 'SEO',
  },
  {
    name: 'Mayra Sharma',
    role: 'Project Coordinator',
    qualification: 'MA Honors',
    image: '/my_team/Mayra_Sharma.png',
    bio: 'Keeps project communication, planning, and delivery flow organized from start to finish.',
    accent: 'Coordination',
  },
  {
    name: 'Mudit',
    role: 'Developer',
    qualification: 'BCA',
    image: '/my_team/Mudit.png',
    bio: 'Supports development delivery with a focus on reliable implementation and project support.',
    accent: 'Development',
  },
  {
    name: 'Gaurav',
    role: 'Senior Developer',
    qualification: 'B.Tech',
    image: '/my_team/Gaurav.png',
    bio: 'Works on modern development workflows, system structure, and scalable implementation.',
    accent: 'Engineering',
  },
  {
    name: 'Anand',
    role: 'Senior Developer',
    qualification: 'B.Tech',
    image: '/my_team/Anand.png',
    bio: 'Builds dependable front-end and back-end solutions aligned with business requirements.',
    accent: 'Delivery',
  },
];
