import React from 'react';
import PersonalInfoForm from '../components/FormSections/PersonalInfoForm';
import EducationForm from '../components/FormSections/EducationForm';
import ExperienceForm from '../components/FormSections/ExperienceForm';
import ProjectsForm from '../components/FormSections/ProjectsForm';
import SkillsForm from '../components/FormSections/SkillsForm';
import SummaryForm from '../components/FormSections/SummaryForm';
import AIGenerator from '../components/FormSections/AIGenerator';
import ResumePreview from '../components/ResumePreview/ResumePreview';
import DownloadPDF from '../components/ResumePreview/DownloadPDF';
import ThemeSwitcher from '../components/ResumePreview/ThemeSwitcher';

export default function ResumeBuilder() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4 gap-6">
      <div className="w-full md:w-1/2 space-y-6 overflow-y-auto">
        <PersonalInfoForm />
        <EducationForm />
        <ExperienceForm />
        <ProjectsForm />
        <SkillsForm />
        <SummaryForm />
        <AIGenerator />
      </div>
      <div className="w-full md:w-1/2">
        <ThemeSwitcher />
        <ResumePreview />
        <DownloadPDF />
      </div>
    </div>
  );
}
