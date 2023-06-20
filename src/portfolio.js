const header = {
  // all the properties are optional - can be left empty or deleted
  title: "Saptarshi's Portfolio",
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Saptarshi',
  role: 'Software Engineering Student @ UWaterloo',
  description:
    'I currently study Software Engineering at the University of Waterloo and have 8 months of full- stack software engineering internship experience. During this time, I have written, tested, and reviewed code for server-side applications, microservices, and web and mobile apps. I’ve worked in cross-functional teams spanning many domains including IOT, personal finance, and insurance.',
  resume:
    'https://drive.google.com/file/d/16d-LFmLKWJJDdfCiYQZlmto6nZ0asJ_E/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/saptarshibhattacherya',
    github: 'https://github.com/truered8',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Social Network App',
    description: `Leading a team of 4 engineers to develop iOS/Android app. Reduced phone verification costs by 86% by implementing system manually with Twilio SMS and Redis. Wrote and deployed containerized REST API on AWS EC2. Managed CI/CD pipeline with GitHub Actions.`,
    stack: ['Docker', 'PostgreSQL', 'Flask', 'AWS EC2'],
  },
  {
    name: 'Scala Compiler',
    description: `Created compiler to transform subset of the Scala language to 32-bit MIPS. Added support for variables, type-checking, arithmetic, nested procedures, closures, garbage collection. Implemented scanning, CYK parsing, context-sensitive analysis, IR transformation, code generation.`,
    stack: ['Scala', 'MIPS'],
  },
  {
    name: 'VADAR',
    description: `Developed device that provided audio recognition using convolutional neural network with Raspberry Pi. Displayed output on OLED display using SPI Protocol with GPIO pins.`,
    stack: ['Python', 'Keras'],
    sourceCode: 'https://github.com/truered8/vadar',
    livePreview:
      'https://medium.com/analytics-vidhya/vadar-an-innovative-solution-for-the-deaf-and-hard-of-hearing-91b2bc6390f6',
  },
  {
    name: 'Chemfriend',
    description: `Designed and developed a robust chemical equation solver for iOS/Android. 
Successfully released the app on both the App Store and Play Store, garnering 1,500+ downloads.`,
    stack: ['Flutter'],
    sourceCode: 'https://github.com/ghostpepperapps/chemfriend-mobile',
    livePreview: 'https://apps.apple.com/us/app/id1530614880',
  },
  {
    name: 'Traffic Control',
    description: `Developed simulation of traffic at a 4-way intersection. Used simulation to evaluate q-learning and deep q-learning-based methods of traffic control against conventional
methods, achieving at best a 17% decrease in average car wait times.`,
    stack: ['Keras', 'Pygame', 'Python'],
    sourceCode: 'https://github.com/truered8/traffic-control',
  },
  {
    name: 'FPGA Robot Arm Controller',
    description: `Implemented circuits including Mealy state machine, multiplexer, decoder, and 4-bit comparator. Utilized structural, functional, and behavioral styles to implement circuit simulating robot arm controller. Tested circuits using functional simulation and on Intel MAX 10 FPGA.`,
    stack: ['VHDL', 'Quartus Prime'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Pandas',
  'Flask',
  'Docker',
  'AWS EC2',
  'GitHub Actions',
  'Keras',
  'Flask',
  'React',
  'Angular',
  'PostgreSQL',
  'Redis',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'saptarshibhattacherya@gmail.com',
}

export { header, about, projects, skills, contact }
