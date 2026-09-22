import type { EducationEntry } from '../types';

/**
 * No graduation year is claimed — only the current status, which is confirmed.
 */
export const education: EducationEntry = {
  institution: 'University of Ibadan',
  qualification: 'B.Sc. Computer Science',
  status: 'Current student',
  areas: [
    'Software Engineering',
    'Artificial Intelligence',
    'Machine Learning',
    'Computer Vision',
    'Backend Development',
    'Web Development',
    'Data & Systems',
  ],
  note:
    'My degree supplies the fundamentals. The projects on this page are where I apply them — which is why most of the work below is shipped and running rather than theoretical.',
};
