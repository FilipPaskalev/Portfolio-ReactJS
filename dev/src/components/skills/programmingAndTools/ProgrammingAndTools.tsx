import DATA from '../../../data/sectionsData.json';
import './programming-and-tools.css';

interface ILiEl {
  title: string;
  href: string;
  style: string;
}

const ProgrammingAndTools = () => {
  const title: string = DATA.skillsSection.subSections.programmingLangTools.title.toUpperCase();
  const skillsList: ILiEl[] = DATA.skillsSection.subSections.programmingLangTools.list;

  return (
    <article>
      <h6 className='subheading mb-3 text-muted'>{title}</h6>
      <ul className='list-inline dev-icons'>
        {skillsList.map((icon: ILiEl, index) => (
          <li className='list-inline-item' key={index}>
            <a className='text-muted' href={icon.href} title={icon.title} target='_blank'>
              <i className={icon.style}></i>
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ProgrammingAndTools;
