import React from 'react';
import Typography from '@mui/material/Typography';

export default function Languages({ text }) {
  const languagesList = [
    { name: 'JavaScript', color: '#F0DB4F' }, // Yellow (JavaScript logo color)
    { name: 'Java', color: '#FF5733' }, // Red (Java logo color)
    { name: 'Python', color: '#3572A5' }, // Blue (Python logo color)
    { name: 'C++', color: '#00599C' }, // Blue (C++ logo color)
    { name: 'C#', color: '#9B4F96' }, // Purple (C# logo color)
    { name: 'Swift', color: '#FFAC45' }, // Orange (Swift logo color)
    { name: 'Kotlin', color: '#F88909' }, // Orange (Kotlin logo color)
    { name: 'Ruby', color: '#CC342D' }, // Red (Ruby logo color)
    { name: 'PHP', color: '#777BB4' }, // Blue (PHP logo color)
    { name: 'Rust', color: '#000000' }, // Black (Rust logo color)
    { name: 'Go', color: '#00ADD8' }, // Cyan (Go logo color)
    { name: 'TypeScript', color: '#007ACC' }, // Blue (TypeScript logo color)
    { name: 'HTML', color: '#E34F26' }, // Orange (HTML logo color)
    { name: 'CSS', color: '#1572B6' }, // Blue (CSS logo color)
  ]

  const getLanguageColor = (languageName) => {
    const language = languagesList.find((lang) => lang.name.toLowerCase() === languageName.toLowerCase())
    return language ? language.color : '#CCCCCC'
  };

  
  const dotColor = getLanguageColor(text);

  return (
    <div className="flex items-center space-x-1">
      <div
        style={{ backgroundColor: dotColor, width: '12px', height: '12px', borderRadius: '50%' }}
      />
      <Typography variant="body2" sx={{ color: 'gray' }}>
        {text}
      </Typography>
    </div>
  );
}