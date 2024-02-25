import React, { useEffect } from 'react';

const SkillBlock = ({ skillName, skillId, skillPercentage }) => {
    useEffect(() => {
        const skillLine = document.getElementById(`skill-line-${skillId}`);
        skillLine.style.width = `${skillPercentage}%`;
        skillLine.style.setProperty('--skillPercentage', `${skillPercentage}%`);
    }, [skillId, skillPercentage]);

    // map associant le nom de la compétence au lien de l'icône
    const iconMap = {
        html5: 'html',
        javascript: 'js',
        css3: 'css',
        typescript: 'ts',
        tailwindcss: 'tailwind',
        'C#': 'cs',
    };

    const iconName = iconMap[skillName.toLowerCase()] || skillName.toLowerCase();
    const iconUrl = `https://skillicons.dev/icons?i=${iconName}`;


    return (
        <div className="skill-block">
            <div className='skill-name-img'>
                <span className="skill-block-heading">{skillName}</span>
                <img src={iconUrl} alt={iconName} style={{ marginLeft: '5px', height: '20px' }} />
            </div>
            <div className="skill-line">
                <div id={`skill-line-${skillId}`} className="animation line-progress"></div>
                <span>{`${skillPercentage}%`}</span>
            </div>
        </div>
    );
};

export default SkillBlock;
