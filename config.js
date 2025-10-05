const siteConfig = {
  personal: {
    name: 'Nthabiseng Thema',
    title: 'MSc @ Carnegie Mellon University',
    institution: 'CMU Africa',
    department: 'College of Engineering',
    email: 'nthema@andrew.cmu.edu',
    location: 'Kigali, Rwanda',
    avatar:
      'NThema.png',
    bio: 'Impact driven and a lifelong learner, exploring technology and data to build meaningful solutions.',
    social: {
      email: 'mailto:nthabisengadelaidethema20@gmail.com',
      github: 'https://github.com/AdeiTech-star/',
      linkedin: 'https://www.linkedin.com/in/nthabiseng-thema-981b25152/',

    },
  },
  navigation: [
    { name: 'About', href: '#about', active: true },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Research', href: '#publications' },
    { name: 'Portfolio', href: '#portfolio' },
  ],
  about: {
    title: 'About me',
    content:
      'I am a masters student at Carnegie Mellon University. My research and projects interests center on Machine Learning applications, Natural Language Processing and Computer Vision. My expertise lies in software engineering and data science.',
    interests: [
      'Machine Learning',
        'Natural Language Processing',
        'Computer Vision',
        'Software Engineering',
        'Data Science'
    ],
    education: [
        {
            degree: 'Msc In IT, Applied ML',
            institution: 'CMU Africa',
            year: '2025 - Present',
        },
        {
            degree: "Bachelors(Hons) in Computer Science",
            institution: 'University of the Witwatersrand ',
            year: '2023 - 2024',
        },
      {
        degree: "Bachelors in Computational Mathematics and Computer Science",
        institution: 'University of the Witwatersrand',
        year: '2020 - 2022',
      },

    ],
  },
  publications: [
    {
      title:
        'Computer assisted cyclist road safety warning system',
      authors: 'Thema N, Prof. Hairong Bau',
      venue: 'WiML @ NeurIPS',
      year: '2025',
      type: 'Conference/Workshop',
      review: 'https://openreview.net/forum?id=ZWsmeAaPg7'
    },
  ],
  projects: [
    {
      title: 'Computer assisted cyclist road safety warning system',
      description:
        'Developed a cyclist safety warning system using YOLO and CNN-based Machine Learning and Computer Vision for\n' +
          'real-time hazard detection trained on 5,000+ traffic images and video streams.\n' +
          ' Research accepted for poster presentation at WiML@NeurIPS 2025, one of 198 accepted submissions.',
      year: '2024',
      link: 'https://github.com/AdeiTech-star/Computer-assisted-cyclist-road-warning-system',
      tags: ['Python', 'Tensorflow', 'Computer Vision', 'Reinforcement Learning', 'Machine Learning'],
    },
      {
          title: 'Bank Customer Churn',
          description:
              'Developed a machine learning model using XGBoost to predict bank customer churn. Performed comprehensive EDA, data cleaning, and preprocessing to ensure high data quality. Utilized Optuna for hyperparameter tuning, achieving an impressive 99.7% recall',
          year: '2025',
          link: 'https://www.kaggle.com/code/nthabisengthema/bank-customer-churn-and-tuning',
          tags: ['Python','Data Visualisation', 'EDA', 'Machine Learning', 'XGBoost','Hyperparameter tuning', 'Optuna', 'Seaborn','Notebook','Docker'],
      },
      {
          title: 'CreditCardFraudDetection',
          description:
              'Built a logistic regression model to detect fraudulent transactions using a Kaggle dataset. Achieved 96% accuracy and explored handling data imbalance through undersampling, oversampling, and SMOTE techniques. Planning to test additional models like Random Forest to improve performance on imbalanced data.',
          year: '2025',
          link: 'https://github.com/AdeiTech-star/CreditCardFraudDetection',
          tags: ['Python','Data Visualisation', 'EDA', 'Machine Learning'],
      },
    {
      title: 'SwapShop',
      description:
        'Developed a React Native app enabling community item swaps. Focused on front-end design and assisted with backend features like OAuth login and payment integration. Improved usability through user feedback, boosting retention by 35% and community participation by 40%.',
      year: '2022',
      link: 'https://github.com/SCRUM-OF-THE-EARTH/SwapShop',
      tags: ['React Native', 'Firebase', 'Payment Gateway', 'Mobile', 'UI-UX', 'Front-end'],
    },


  ],
  certifications: [
    {
      title: 'Introduction to Generative AI with AWS',
      issuer: 'Udacity',
      date: '2025',
      credential: 'https://www.udacity.com/certificate/e/4b07a73a-40c6-11f0-b366-dfc078748ccf',
    },
    {
      title: 'Python for Data Science and Machine Learning Bootcamp',
      issuer: 'Udemy',
      date: '2025',
      credential: 'https://www.udemy.com/certificate/UC-d907810d-f68a-4979-8f73-e63b4e416db0/',

    },

    {
      title: 'Java 17 Masterclass',
      issuer: 'Udemy',
      date: '2024',
      credential: 'https://www.udemy.com/certificate/UC-81387928-1905-4e24-a8b4-a6f7e5aefd9b/',

    },
  ],
  experience: [
    {
      position: 'Software Developer',
      company: 'Hensoldt',
      location: 'Pretoria, South Africa',
      period: '2023 - 2025',
      description:'Developed a secure VoIP and messaging platform supporting real-time communication for 30+ users. ' +
          'Built Java frontend features that improved usability and reduced development time by 60%, and migrated legacy frontend to Spring Boot, increasing customer satisfaction by 70%. ' +
          'Mentored junior team members to accelerate onboarding and adoption of best practices.'

    },
      {
          position: 'Software Developer Intern',
          company: 'Hensoldt',
          location: 'Pretoria, South Africa',
          period: '2022 - 2022',
          description:'Contributed to maintaining and improving existing systems through bug fixes and performance enhancements. ' +
              'Explored new technologies and system designs, researching ways to integrate modern solutions and improve overall functionality.'

      },
    {
      position: 'Tutor',
      company: 'Prep2Perfection and TeachMe2',
      location: 'Remote',
      period: '2021 - Present',
      description:
        'I tutor, mentor students from all level of studies, from Mathematics, Physical Science, Accounting and Computer Science',
    },

  ],
  colors: {
    reInventPurple: '#9D5CAE',
    reInventPink: '#E91E8C',
    reInventOrange: '#FF9900',
    darkBg: '#161E2D',
    lightBg: '#232F3E',
    textLight: '#B0B7C3',
    textDark: '#1B2530',
    accent: '#00D4FF',
  },
}
