import save from '../../images/save.png';
import hope from '../../images/hope.png';
import medicans from '../../images/medecins.png';
import razom from '../../images/razom.png';
import action from '../../images/action.png';
import sergey from '../../images/sergey.png';
import international from '../../images/international.png';
import world from '../../images/world.png';
import united from '../../images/united.png';

interface IPropsSupportUkraineImage {
  name: string;
}

export const SupportUkraineImage = ({ name }: IPropsSupportUkraineImage) => {
  switch (name) {
    case 'Save the Children':
      return (
        <>
          <img className=" brightness-0 invert h-8" src={save} alt="" />
        </>
      );
    case 'Project HOPE':
      return (
        <>
          <img className=" brightness-0 invert h-8" src={hope} alt="" />
        </>
      );
    case 'UNITED24':
      return (
        <>
          <img className=" brightness-0 invert h-8" src={united} alt="" />
        </>
      );
    case 'Medicins Sans Frontieres':
      return (
        <>
          <img className=" brightness-0 invert h-8" src={medicans} alt="" />
        </>
      );
    case 'RAZOM':
      return (
        <>
          <img className=" brightness-0 invert h-8" src={razom} alt="" />
        </>
      );
    case 'Action against hunger':
      return (
        <>
          <img className=" brightness-0 invert h-8" src={action} alt="" />
        </>
      );
    case 'World vision':
      return (
        <>
          <img className=" brightness-0 invert h-8" src={world} alt="" />
        </>
      );
    case 'Serhiy Prytula Charity Foundation':
      return (
        <>
          <img className=" brightness-0 invert h-8" src={sergey} alt="" />
        </>
      );
    case 'International Medical Corps':
      return (
        <>
          <img className=" brightness-0 invert h-8" src={international} alt="" />
        </>
      );
    default:
      return <></>;
  }
};
