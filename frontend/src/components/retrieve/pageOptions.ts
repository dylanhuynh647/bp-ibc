import type React from 'react';
import AboutPage from '../../pages/AboutPage';
import EducationPage from '../../pages/EducationPage';
import VolunteerPage from '../../pages/VolunteerPage';
import HomePage from '../../pages/HomePage';

export type PageOption = {
  id: string;
  label: string;
  route: string;
  Component: () => React.JSX.Element;
};

export const AVAILABLE_PAGES: PageOption[] = [
  { id: 'about', label: 'About', route: '/about', Component: AboutPage },
  { id: 'education', label: 'Education', route: '/education', Component: EducationPage },
  { id: 'volunteer', label: 'Volunteer', route: '/volunteer', Component: VolunteerPage },
  { id: 'home', label: 'Home', route: '/home', Component: HomePage },
];

export function getPageOption(pageId?: string | null) {
  return AVAILABLE_PAGES.find((page) => page.id === pageId) ?? AVAILABLE_PAGES[0];
}
