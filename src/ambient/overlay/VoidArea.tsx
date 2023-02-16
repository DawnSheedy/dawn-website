import "./VoidArea.scss";
import { VoidBlock } from "./VoidBlock";

export const VoidArea = () => {
  const renderVoidBlocks = () => {
    return Array.from({ length: 20 }, (v, i) => i).map((number) => (
      <VoidBlock key={number} />
    ));
  };

  return (
    <div className="void-root-container">
      <div className="void-container left">{renderVoidBlocks()}</div>
      <div className="void-container right">{renderVoidBlocks()}</div>
    </div>
  );
};
