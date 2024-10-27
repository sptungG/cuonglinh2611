import React, { useId } from "react";

type TMasonryLayoutProps = { columns?: number; gap?: number; children?: any; className?: string; style?: React.CSSProperties };

const MasonryLayout = ({ columns = 3, gap = 24, children, className, style }: TMasonryLayoutProps) => {
  const uid = useId();
  const columnWrapper: Record<string, any> = {};
  const result = [];

  // create columns
  for (let i = 0; i < columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  // divide children into columns
  for (let i = 0; i < children?.length; i++) {
    const columnIndex = i % columns;
    columnWrapper[`column${columnIndex}`].push(
      <div key={uid + `${Math.random() * children.length}`} style={{ marginBottom: `${gap}px` }}>
        {children[i]}
      </div>
    );
  }

  // wrap children in each column with a div
  for (let i = 0; i < columns; i++) {
    result.push(
      <div
        key={uid + `column${i}`}
        style={{
          marginLeft: `${i > 0 ? gap : 0}px`,
          flex: 1,
        }}
      >
        {columnWrapper[`column${i}`]}
      </div>
    );
  }

  return (
    <div style={{ display: "flex", ...(style || {}) }} className={className}>
      {result}
    </div>
  );
};

export default MasonryLayout;
