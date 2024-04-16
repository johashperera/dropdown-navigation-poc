export interface NavLink {
  label: string;
  routerLink: string;
  testId: string;
  hasChildRoutes?: boolean;
}

export const navLinks: NavLink[] = [
  {
    label: 'Test Selection',
    routerLink: '/sep/academic-evaluation/attempt/25884/test-selection',
    testId: 'test-selection',
  },
  {
    label: 'Initial Intake Information',
    routerLink: '/sep/academic-evaluation/attempt/25884/initial-intake-info',
    testId: 'intake-info',
  },
  {
    label: 'Test Administration',
    routerLink: '/sep/academic-evaluation/attempt/25884/in-progress',
    testId: 'test-admin',
    hasChildRoutes: true,
  },
  {
    label: 'Results',
    routerLink: '/sep/academic-evaluation/attempt/25884/results',
    testId: 'test-result',
    hasChildRoutes: true,
  },
];

export const navLinksTestAdmin: NavLink[] = [
  {
    label: 'General Questions',
    routerLink: '/sep/academic-evaluation/attempt/25884/results/boehm',
    testId: '',
  },
  {
    label: 'HSWA',
    routerLink: '/sep/academic-evaluation/attempt/25884/results/hswa',
    testId: '',
  },
  {
    label: 'STAR Assessment',
    routerLink:
      '/sep/academic-evaluation/attempt/25884/results/star-assessment',
    testId: '',
  },
];

export const navLinksResults: NavLink[] = [
  {
    label: 'SVMPT',
    routerLink: '/sep/academic-evaluation/attempt/25884/results/boehm',
    testId: '',
  },
  {
    label: 'Reading Readiness',
    routerLink: '/sep/academic-evaluation/attempt/25884/results/hswa',
    testId: '',
  },
  {
    label: 'WOLD',
    routerLink:
      '/sep/academic-evaluation/attempt/25884/results/star-assessment',
    testId: '',
  },
];
