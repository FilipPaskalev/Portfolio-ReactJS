import './workflow.css';
import DATA from '../../../data/sectionsData.json';

const Workflow = () => {
  const title: string = DATA.skillsSection.subSections.workflow.title.toUpperCase();
  const skillsList: string[] = DATA.skillsSection.subSections.workflow.list;

  return (
    <article>
      <h6 className='subheading mb-3'>{title}</h6>
      <ul className='fa-ul mb-0'>
        {skillsList.map((skill: string, index) => (
          <li key={index}>
            <span className='fa-li'>
              <i className='fas fa-check'></i>
            </span>
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Workflow;
