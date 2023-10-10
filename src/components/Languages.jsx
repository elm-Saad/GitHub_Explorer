import React from 'react';
import Typography from '@mui/material/Typography';

export default function Languages({ text }) {
  const languagesList = [
    { name: 'JavaScript', color: '#F0DB4F' },
    { name: 'Java', color: '#FF5733' }, 
    { name: 'Python', color: '#3572A5' }, 
    { name: 'C++', color: '#00599C' }, 
    { name: 'C#', color: '#9B4F96' },
    { name: 'Swift', color: '#FFAC45' },
    { name: 'Kotlin', color: '#F88909' }, 
    { name: 'Ruby', color: '#CC342D' }, 
    { name: 'PHP', color: '#777BB4' }, 
    { name: 'Rust', color: '#000000' }, 
    { name: 'Go', color: '#00ADD8' },
    { name: 'TypeScript', color: '#007ACC' }, 
    { name: 'HTML', color: '#E34F26' }, 
    { name: 'CSS', color: '#1572B6' }, 
  ]

  const getLanguageColor = (languageName) => {
    const language = languagesList.find((lang) => lang.name.toLowerCase() === languageName?.toLowerCase())
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