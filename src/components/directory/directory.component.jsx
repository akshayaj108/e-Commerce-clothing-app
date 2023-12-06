import DirectoryItem from "../directory-item/directory-item.component";

import { DirctoryContainer } from "./directory.styles.jsx";

const Directory = ({ categories }) => {
  return (
    <DirctoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirctoryContainer>
  );
};

export default Directory;
